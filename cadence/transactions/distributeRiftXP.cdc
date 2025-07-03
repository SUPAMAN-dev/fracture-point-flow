// In file: ./transactions/distributeRiftXP.cdc

import "FungibleToken"
import "FPToken"
import "ClaimManager"

// This transaction is executed by the backend to distribute Rift XP.
// It takes the addresses and rewards for the three winners.
transaction(
    firstPlaceWinner: Address,
    firstPlaceAmount: UFix64,
    secondPlaceWinner: Address,
    secondPlaceAmount: UFix64,
    thirdPlaceWinner: Address,
    thirdPlaceAmount: UFix64
) {

    // A reference to the backend's Minter resource.
    let minterRef: &FPToken.Minter

    // Capabilities for the winners' vaults.
    let firstPlaceVault: &{FungibleToken.Receiver}
    let secondPlaceVault: &{FungibleToken.Receiver}
    let thirdPlaceVault: &{FungibleToken.Receiver}

    prepare(backendSigner: auth(BorrowValue) &Account) {
        // --- Authorization Phase ---
        // Borrow a reference to the Minter resource from the backend's account storage.
        // This line will FAIL if the account signing this transaction is not the backend
        // that owns the Minter, thus securing the entire operation.
        self.minterRef = backendSigner.storage.borrow<&FPToken.Minter>(from: FPToken.MinterStoragePath)
            ?? panic("Could not borrow a reference to the FPToken Minter")

        // --- Get Recipient Vaults ---
        // Get the public capability for each winner's vault to receive the tokens.
        let firstPubAcct = getAccount(firstPlaceWinner)
        self.firstPlaceVault = firstPubAcct.capabilities.borrow<&{FungibleToken.Receiver}>(/public/FPTokenReceiver)
            ?? panic("Could not borrow receiver capability for the 1st place winner")

        let secondPubAcct = getAccount(secondPlaceWinner)
        self.secondPlaceVault = secondPubAcct.capabilities.borrow<&{FungibleToken.Receiver}>(/public/FPTokenReceiver)
            ?? panic("Could not borrow receiver capability for the 2nd place winner")

        let thirdPubAcct = getAccount(thirdPlaceWinner)
        self.thirdPlaceVault = thirdPubAcct.capabilities.borrow<&{FungibleToken.Receiver}>(/public/FPTokenReceiver)
            ?? panic("Could not borrow receiver capability for the 3rd place winner")
    }

    execute {
        // --- Execution Phase ---
        // Call the ClaimManager to distribute rewards for each winner.
        // The 50:30:20 ratio is handled by the amounts your backend provides as arguments.

        ClaimManager.distributeRiftXP(
            minter: self.minterRef,
            recipientVault: self.firstPlaceVault,
            amount: firstPlaceAmount
        )

        ClaimManager.distributeRiftXP(
            minter: self.minterRef,
            recipientVault: self.secondPlaceVault,
            amount: secondPlaceAmount
        )

        ClaimManager.distributeRiftXP(
            minter: self.minterRef,
            recipientVault: self.thirdPlaceVault,
            amount: thirdPlaceAmount
        )

        log("Rift XP successfully distributed to the three winners.")
    }
}