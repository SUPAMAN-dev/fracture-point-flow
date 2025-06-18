Fracture Point – Technical Overview

What We're Building
Fracture Point is a Flow-powered competitive shooter with a Proof-of-Play economy. This overview explains how our Flow EVM prototype demonstrates cutting-edge technology and sets the foundation for scalable, gameplay-driven systems.

Why It’s Cutting-Edge

1. Proof-of-Play Smart Contract
The core innovation is an XP token contract (ProofOfPlay.sol) that mints based on verifiable, skill-driven gameplay triggers.

-Composable XP: Can be plugged into faction ranks, unlockables, or DAO logic.

-Transparent Events: MatchLogged emits metadata for leaderboard systems.

2. Flow Dual-Path Design
-EVM for Speed: We deploy and iterate using Solidity and Flow EVM.
-Cadence for Growth: We plan to migrate asset logic to Cadence for better performance, upgradeability, and Flow-native integration.

3. On-Chain Match Telemetry
We introduce logMatch() — a gameplay sync function to register actions such as kills, extractions, or assists. This creates a transparent match footprint.

4. Modular Game Economy Hooks
-XP minting is external-callable by backend services
-Future integration: player wagers, tournament pools, skill rewards

System Architecture (Prototype Phase)
-Solidity XP contract on Flow EVM
-Unity client (WIP) triggers backend telemetry
-Backend (Node/Firebase, WIP) queues match data
-Flow testnet validates and mints XP to wallet

Planned Upgrades

Feature                      --Description

ProofOfPlayV2               --Modular reward curves for different game modes



Cadence NFT Layer           --Flow-native NFTs for Variants, cosmetics, keys



Reputation Scoring         --Sybil-resistant player trust model



Onboarding Quests          --Smart contract–linked progression tasks



Repo Contents

contracts/ProofOfPlay.sol – Core XP token logic

scripts/deploy.ts – Hardhat deployment script

test/ – Smart contract unit tests

.env.example – Environment template

Open Source Contribution

This repo is part of a public good initiative for GrantDAO and the Flow developer ecosystem. We welcome contributions, feedback, and support.

Built by @SUPAMANLJ

