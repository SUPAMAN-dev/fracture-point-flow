// In file: ./cadence/contracts/FPToken.cdc

import "FungibleToken"

// FPToken: The contract for our non-transferable experience points (FPXP).
// This token adheres to the FungibleToken standard but has controlled minting.
access(all) contract FPToken: FungibleToken {

    // Events
    access(all) event TokensMinted(amount: UFix64)
    access(all) event TokensBurned(amount: UFix64)

    // Total supply of FPXP in circulation.
    access(all) var totalSupply: UFix64

    // The storage path for the Vault, Minter, and other resources.
    access(all) let VaultStoragePath: StoragePath
    access(all) let MinterStoragePath: StoragePath

    // Minter: A resource that has the authority to mint new FPXP tokens.
    // This is the resource your backend will own.
    access(all) resource Minter {
        // mintTokens creates new tokens and returns them to be deposited.
        access(all) fun mintTokens(amount: UFix64): @FungibleToken.Vault {
            pre {
                amount > 0.0: "Cannot mint zero or negative tokens"
            }
            FPToken.totalSupply = FPToken.totalSupply + amount
            emit TokensMinted(amount: amount)
            return <-create Vault(balance: amount)
        }
    }

    // Vault: The resource that each player will store in their account to hold FPXP.
    access(all) resource Vault: FungibleToken.Provider, FungibleToken.Receiver, FungibleToken.Balance {
        access(all) var balance: UFix64

        init(balance: UFix64) {
            self.balance = balance
        }

        // withdraw allows taking tokens out of the Vault.
        access(all) fun withdraw(amount: UFix64): @FungibleToken.Vault {
            self.balance = self.balance - amount
            emit FungibleToken.TokensWithdrawn(amount: amount, from: self.owner?.address)
            return <-create Vault(balance: amount)
        }

        // deposit adds tokens to the Vault.
        access(all) fun deposit(from: @FungibleToken.Vault) {
            let vault <- from as! @FPToken.Vault
            self.balance = self.balance + vault.balance
            emit FungibleToken.TokensDeposited(amount: vault.balance, to: self.owner?.address)
            destroy vault
        }

        // burnTokens allows the owner of the vault to burn their own tokens.
        // This will be called by the ClaimManager transaction on behalf of the player.
        access(all) fun burnTokens(amount: UFix64) {
            pre {
                self.balance >= amount: "Insufficient balance to burn"
            }
            FPToken.totalSupply = FPToken.totalSupply - amount
            self.balance = self.balance - amount
            emit TokensBurned(amount: amount)
        }

        destroy() {
            FPToken.totalSupply = FPToken.totalSupply - self.balance
        }
    }

    // createEmptyVault is a required function for the standard.
    // It allows anyone to create an empty vault for themselves.
    access(all) fun createEmptyVault(): @FungibleToken.Vault {
        return <-create Vault(balance: 0.0)
    }

    // init is called once when the contract is deployed.
    init() {
        self.totalSupply = 0.0
        self.VaultStoragePath = /storage/FPTokenVault
        self.MinterStoragePath = /storage/FPTokenMinter

        // Create the one and only Minter resource and store it in the deployer's account.
        // The deployer of this contract MUST be your backend's Flow account.
        let minter <- create Minter()
        self.account.storage.save(<-minter, to: self.MinterStoragePath)
    }
}