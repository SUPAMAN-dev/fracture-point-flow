// In file: ./cadence/contracts/NonFungibleToken.cdc

// This is the standard Flow NonFungibleToken interface.
// You can get this from the official Flow repository:
// https://github.com/onflow/flow-nft/blob/master/contracts/NonFungibleToken.cdc

access(all) contract interface NonFungibleToken {
    access(all) event ContractInitialized()
    access(all) event Withdraw(id: UInt64, from: Address?)
    access(all) event Deposit(id: UInt64, to: Address?)

    access(all) var totalSupply: UInt64

    access(all) resource interface NFT {
        access(all) let id: UInt64
    }

    access(all) resource interface Provider {
        access(all) fun withdraw(withdrawID: UInt64): @NFT
    }

    access(all) resource interface Receiver {
        access(all) fun deposit(token: @NFT)
        access(all) fun getIDs(): [UInt64]
    }

    access(all) resource interface CollectionPublic {
        access(all) fun deposit(token: @NFT)
        access(all) fun getIDs(): [UInt64]
        access(all) fun borrowNFT(id: UInt64): &NFT
    }

    access(all) resource Collection: Provider, Receiver, CollectionPublic {
        access(all) var ownedNFTs: @{UInt64: NFT}
    }

    access(all) fun createEmptyCollection(): @Collection
}