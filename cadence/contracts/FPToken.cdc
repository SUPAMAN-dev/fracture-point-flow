import FungibleToken from 0x9a0766d93b6608b7
 

access(all) contract FPToken: FungibleToken {

    access(all) event TokensMinted(amount: UFix64)
    access(all) event TokensBurned(amount: UFix64)

    access(all) var totalSupply: UFix64

    access(all) let VaultStoragePath: StoragePath
    access(all) let MinterStoragePath: StoragePath

    access(all) resource Minter {
        access(all) fun mintTokens(amount: UFix64): @FungibleToken.Vault {
            pre {
                amount > 0.0: "Cannot mint zero or negative tokens"
            }
            FPToken.totalSupply = FPToken.totalSupply + amount
            emit TokensMinted(amount: amount)
            return <-create Vault(balance: amount)
        }
    }

    access(all) resource Vault: FungibleToken.Provider, FungibleToken.Receiver, FungibleToken.Balance {
        access(all) var balance: UFix64 
         access(all) fun getBalance(): UFix64 {
        return self.balance
        }
        init(balance: UFix64) {
            self.balance = balance
        }

        access(all) fun withdraw(amount: UFix64): @FungibleToken.Vault {
            self.balance = self.balance - amount
            emit FungibleToken.TokensWithdrawn(amount: amount, from: self.owner?.address)
            return <-create Vault(balance: amount)
        }

        access(all) fun deposit(from: @FungibleToken.Vault) {
            self.balance = self.balance + from.balance // Access balance directly
            emit FungibleToken.TokensDeposited(amount: from.balance, to: self.owner?.address)
            destroy from // Destroy the incoming vault
        }

        access(all) fun burnTokens(amount: UFix64) {
            pre {
                self.balance >= amount: "Insufficient balance to burn"
            }
            FPToken.totalSupply = FPToken.totalSupply - amount
            self.balance = self.balance - amount
            emit TokensBurned(amount: amount)
        }
    }

    access(all) fun createEmptyVault(): @FungibleToken.Vault {
        return <-create Vault(balance: 0.0)
    }

    init() {
        self.totalSupply = 0.0
        self.VaultStoragePath = /storage/FPTokenVault
        self.MinterStoragePath = /storage/FPTokenMinter

        let minter <- create Minter()
        self.account.storage.save(<-minter, to: self.MinterStoragePath)
    }
}