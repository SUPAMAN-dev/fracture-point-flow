# Fracture Point – Flow EVM Proof‑of‑Play Prototype

A competitive Web3 extraction shooter that rewards **skill, creativity, and community contribution** through an on‑chain `ProofOfPlay` XP token.

This repo is an **open, early prototype** for the Flow GrantDAO review.  
It shows how we apply *Cutting‑Edge Technology* on Flow EVM: transparent match telemetry, modular rewards, and a future Cadence expansion path.

 Technologies Used

Flow EVM Testnet – Ethereum-compatible environment for Flow

Hardhat – Smart contract dev environment

TypeScript – Safer development with typings

OpenZeppelin v5 – Secure, audited ERC standards

## Quick Start

```bash
git clone https://github.com/YOUR_HANDLE/fracture-point-flow.git
cd fracture-point-flow
cp .env.example .env  0x9262844fa5405062c2050b859b979430483b1b18ff3c62425f76bc7010bb382a
npm install
npx hardhat test
npx hardhat run scripts/deploy.ts --network flowTestnet
```

## Cutting‑Edge Highlights
- **On‑chain telemetry:** every rewarded match emits `MatchLogged` for composable leaderboards.
- **Composable rewards:** XP token can plug into quests, staking, or DAO logic.
- **Flow dual‑path:** rapid EVM iteration today, Cadence asset logic tomorrow.
- **Transparent economy layer:** Player actions drive on-chain minting with provable gameplay data.

License: MIT License – open-sourced for developer collaboration under GrantDAO's public good requirements.

Acknowledgements

Built by Adesegun Adeyemi (@SUPAMANLJ)

Supported by Flow ecosystem contributors

Inspired by failures of over 40+ Web3 game economies


