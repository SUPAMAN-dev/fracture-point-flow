# Fracture Point – Flow EVM Proof‑of‑Play Prototype

A competitive Web3 extraction shooter that rewards **skill, creativity, and community contribution** through an on‑chain `ProofOfPlay` XP token.

This repo is an **open, early prototype** for the Flow GrantDAO review.  
It shows how we apply *Cutting‑Edge Technology* on Flow EVM: transparent match telemetry, modular rewards, and a future Cadence expansion path.

## Quick Start

```bash
git clone https://github.com/YOUR_HANDLE/fracture-point-flow.git
cd fracture-point-flow
cp .env.example .env   # paste your Flow EVM private key
npm install
npx hardhat test
npx hardhat run scripts/deploy.ts --network flowTestnet
```

## Cutting‑Edge Highlights
- **On‑chain telemetry:** every rewarded match emits `MatchLogged` for composable leaderboards.
- **Composable rewards:** XP token can plug into quests, staking, or DAO logic.
- **Flow dual‑path:** rapid EVM iteration today, Cadence asset logic tomorrow.

License: MIT
