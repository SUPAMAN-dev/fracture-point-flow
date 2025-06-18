// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/**
 * @title ProofOfPlay
 * @dev ERC20-like XP token + on-chain match logging for Fracture Point (Flow EVM)
 */
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ProofOfPlay is ERC20, Ownable {
    /// Emitted whenever XP is rewarded for a verified match
    event MatchLogged(address indexed player, uint256 xpGained, uint256 blockTime);

    constructor()
    ERC20("Fracture Point XP", "FPXP")
    Ownable(msg.sender)      // ✅ pass the deployer as initial owner
{}


    /**
     * @notice Called by the trusted game backend after verifying skillful play off‑chain.
     * @dev Only the owner (game backend) can mint XP.
     */
    function rewardXP(address player, uint256 amount) external onlyOwner {
        _mint(player, amount);
        emit MatchLogged(player, amount, block.timestamp);
    }
}
