// In file: ./cadence/contracts/FungibleToken.cdc

// This is the standard Flow Fungible Token interface.
// You can get this from the official Flow repository.
// It is a prerequisite for our FPToken.

access(all) contract interface FungibleToken {
    access(all) event TokensInitialized(initialSupply: UFix64)
    access(all) event TokensWithdrawn(amount: UFix64, from: Address?)
    access(all) event TokensDeposited(amount: UFix64, to: Address?)

    access(all) var totalSupply: UFix64

    access(all) resource interface Provider {
        access(all) fun withdraw(amount: UFix64): @Vault {
            post {
                result.balance == amount:
                    "Withdrawal amount must be the same as the balance of the withdrawn Vault"
            }
        }
    }

    access(all) resource interface Receiver {
        access(all) var balance: UFix64
        access(all) fun deposit(from: @Vault)
    }

    access(all) resource interface Balance {
        access(all) var balance: UFix64
    }

    access(all) resource Vault: Provider, Receiver, Balance {
        access(all) var balance: UFix64

        init(balance: UFix64) {
            self.balance = balance
        }
    }

    access(all) fun createEmptyVault(): @Vault {
        return <-create Vault(balance: 0.0)
    }
}