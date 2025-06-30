// In file: ./cadence/contracts/RankBadge.cdc

import "NonFungibleToken"

// RankBadge: The contract for our Fracture Point Rank Badge NFTs.
// This contract follows the NonFungibleToken standard and includes
// metadata for rank and the badge's visual representation.
access(all) contract RankBadge: NonFungibleToken {

    // Events
    access(all) event ContractInitialized()
    access(all) event Withdraw(id: UInt64, from: Address?)
    access(all) event Deposit(id: UInt64, to: Address?)
    access(all) event Minted(id: UInt64, rank: UInt256, season: UInt256)

    // Contract-level state
    access(all) var totalSupply: UInt64

    // The storage and public paths for this contract's resources.
    access(all) let CollectionStoragePath: StoragePath
    access(all) let CollectionPublicPath: PublicPath
    access(all) let MinterStoragePath: StoragePath

    // NFT: The definition of the RankBadge resource.
    // Each badge has a unique ID and metadata.
    access(all) resource NFT: NonFungibleToken.NFT {
        access(all) let id: UInt64
        access(all) let rank: UInt256
        access(all) let season: UInt256
        access(all) let metadataURI: String

        init(id: UInt64, rank: UInt256, season: UInt256, metadataURI: String) {
            self.id = id
            self.rank = rank
            self.season = season
            self.metadataURI = metadataURI
        }
    }

    // NFTMinter: The resource with the authority to mint new RankBadge NFTs.
    // This powerful resource will be stored securely in your backend's account.
    access(all) resource NFTMinter {
        access(all) fun mintNFT(
            rank: UInt256,
            season: UInt256,
            metadataURI: String
        ): @NFT {
            // Create a new RankBadge NFT
            var newNFT <- create NFT(
                id: RankBadge.totalSupply,
                rank: rank,
                season: season,
                metadataURI: metadataURI
            )

            emit Minted(id: newNFT.id, rank: rank, season: season)

            // Increment the total supply
            RankBadge.totalSupply = RankBadge.totalSupply + 1
            
            return <-newNFT
        }
    }
    
    // Collection: The resource that each player will store in their account
    // to hold their collection of RankBadge NFTs.
    access(all) resource Collection: NonFungibleToken.Collection {
        access(all) var ownedNFTs: @{UInt64: NonFungibleToken.NFT}

        init () {
            self.ownedNFTs <- {}
        }

        access(all) fun withdraw(withdrawID: UInt64): @NonFungibleToken.NFT {
            let token <- self.ownedNFTs.remove(key: withdrawID) 
                ?? panic("Cannot withdraw: NFT not found in collection")
            
            emit Withdraw(id: token.id, from: self.owner?.address)
            return <-token
        }

        access(all) fun deposit(token: @NonFungibleToken.NFT) {
            let badge <- token as! @RankBadge.NFT
            let id = badge.id
            
            let oldToken <- self.ownedNFTs[id] <- badge
            
            emit Deposit(id: id, to: self.owner?.address)

            destroy oldToken
        }

        access(all) fun getIDs(): [UInt64] {
            return self.ownedNFTs.keys
        }

        access(all) fun borrowNFT(id: UInt64): &NonFungibleToken.NFT {
            return &self.ownedNFTs[id] as &NonFungibleToken.NFT
        }

        destroy() {
            destroy self.ownedNFTs
        }
    }

    // createEmptyCollection allows anyone to create a collection for themselves.
    access(all) fun createEmptyCollection(): @NonFungibleToken.Collection {
        return <- create Collection()
    }

    // init is called once when the contract is deployed.
    init() {
        self.totalSupply = 0
        self.CollectionStoragePath = /storage/RankBadgeCollection
        self.CollectionPublicPath = /public/RankBadgeCollection
        self.MinterStoragePath = /storage/RankBadgeMinter

        // Create the one-and-only NFTMinter and save it to the deployer's account.
        // This MUST be your backend's Flow account.
        let minter <- create NFTMinter()
        self.account.storage.save(<-minter, to: self.MinterStoragePath)

        emit ContractInitialized()
    }
}