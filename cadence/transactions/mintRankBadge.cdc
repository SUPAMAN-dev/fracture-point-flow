import RankBadge from "./RankBadge.cdc"
import ClaimManager from "./ClaimManager.cdc"

// This transaction mints a RankBadge NFT to a player
transaction(
    recipientAddress: Address,
    rank: UInt256,
    season: UInt256,
    metadataURI: String
) {
    let badgeMinterRef: &RankBadge.NFTMinter
    let recipientCollection: &{RankBadge.CollectionPublic}

    prepare(signer: auth(BorrowValue) &Account) {
        self.badgeMinterRef = signer.storage.borrow<&RankBadge.NFTMinter>(
            from: RankBadge.MinterStoragePath
        ) ?? panic("Could not borrow badge minter")

        let recipient = getAccount(recipientAddress)
        self.recipientCollection = recipient.capabilities
            .borrow<&{RankBadge.CollectionPublic}>(RankBadge.CollectionPublicPath)
            ?? panic("Could not borrow recipient badge collection")
    }

    execute {
        ClaimManager.mintRankBadgeForPlayer(
            badgeMinter: self.badgeMinterRef,
            recipient: self.recipientCollection,
            rank: rank,
            season: season,
            metadataURI: metadataURI
        )
    }
}
