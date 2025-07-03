import NonFungibleToken from 0x631e88ae7f1dce20
import MetadataViews from 0x631e88ae7f1dce20 // Add this if you don't have it
 

access(all) contract RankBadge: NonFungibleToken {

    access(all) event ContractInitialized()
    access(all) event Withdraw(id: UInt64, from: Address?)
    access(all) event Deposit(id: UInt64, to: Address?)
    access(all) event Minted(id: UInt64, rank: UInt256, season: UInt256)

    access(all) var totalSupply: UInt64

    access(all) let CollectionStoragePath: StoragePath
    access(all) let CollectionPublicPath: PublicPath
    access(all) let MinterStoragePath: StoragePath

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

    access(all) resource NFTMinter {
        access(all) fun mintNFT(
            rank: UInt256,
            season: UInt256,
            metadataURI: String
        ): @NFT {
            var newNFT <- create NFT(
                id: RankBadge.totalSupply,
                rank: rank,
                season: season,
                metadataURI: metadataURI
            )
            emit Minted(id: newNFT.id, rank: rank, season: season)
            RankBadge.totalSupply = RankBadge.totalSupply + 1
            return <-newNFT
        }
    }
    
    access(all) resource Collection: NonFunibleToken.Collection {
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
    }

    access(all) fun createEmptyCollection(): @NonFungibleToken.Collection {
        return <- create Collection()
    }

    init() {
        self.totalSupply = 0
        self.CollectionStoragePath = /storage/RankBadgeCollection
        self.CollectionPublicPath = /public/RankBadgeCollection
        self.MinterStoragePath = /storage/RankBadgeMinter
        let minter <- create NFTMinter()
        self.account.storage.save(<-minter, to: self.MinterStoragePath)
        emit ContractInitialized()
    }
}