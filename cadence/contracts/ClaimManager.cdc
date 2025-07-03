import FungibleToken from 0x9a0766d93b6608b7
import NonFungibleToken from 0x631e88ae7f1dce20
import FPToken from 0x9e0919634b0ae78e // Your deployed contract
import RankBadge from 0x9e0919634b0ae78e // Your deployed contract
 
access(all) contract ClaimManager {

    access(all) event XPDistributed(to: Address, amount: UFix64, by: Address)
    access(all) event BadgeMinted(to: Address, id: UInt64, rank: UInt256, season: UInt256)

    // Distributes XP to a player
    access(all) fun distributeRiftXP(
        minter: &FPToken.Minter,
        recipientVault: &{FPToken.Receiver},
        amount: UFix64
    ) {
        let newTokens <- minter.mintTokens(amount: amount)
        recipientVault.deposit(from: <-newTokens)

        emit XPDistributed(
            to: recipientVault.owner!.address,
            amount: amount,
            by: minter.owner!.address
        )
    }

    // Mints a Rank Badge NFT to a player
    access(all) fun mintRankBadgeForPlayer(
        badgeMinter: &RankBadge.NFTMinter,
        recipient: &{RankBadge.CollectionPublic},
        rank: UInt256,
        season: UInt256,
        metadataURI: String
    ) {
        let newBadge <- badgeMinter.mintNFT(
            rank: rank,
            season: season,
            metadataURI: metadataURI
        )

        let id = newBadge.id

        recipient.deposit(token: <-newBadge)

        emit BadgeMinted(
            to: recipient.owner!.address,
            id: id,
            rank: rank,
            season: season
        )
    }

    init() {
        // Nothing to initialize — this contract is just a gateway
    }
}
