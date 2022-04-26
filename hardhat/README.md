# Table of contents
- [Table of contents](#table-of-contents)
- [Getting started](#getting-started)
  - [How to deploy contract whit Hardhat accounts](#how-to-deploy-contract-whit-hardhat-accounts)
    - [Hardhat commands](#hardhat-commands)

**CURRENT CONTRACT ADRESS**
0x5FbDB2315678afecb367f032d93F642f64180aa3

# Getting started
- Goto official page (up-to-date)
  - Get started
  - Follow instructions

**OR**

- Run
  - `npm init -y`
  - `npm i -D hardhat`
  - `npx hardhat` : select default options & Y
  - `npm i -D @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers`

## How to deploy contract whit Hardhat accounts
- `npx hardhat node`
- in metamask, set up a new localhost (erase the current one)
  - Click on networks -> Add network
  - Goto network (lateral menu) -> remove current localhost
  - Add network (blue botton above) 
  - Put the details shown above all the accounts shown after `npx hardhat node`
    - ChainID: 31337
    - Symbol: ETH
    - New Url: http://127.0.0.1:8545/ http://localhost:8545

### Hardhat commands

1. `npx hardhat accounts` : Shows list of account used for development
2. `npx hardhat compile` : Compile .sol files into bytecode
3. `npx hardhat clean` : 
4. `npx hardhat test` : Run the files in the 'test' folder
5. `npx hardhat node` : Local host for testing w/accounts
6. `npx hardhat run scripts/sample-script.js --network localhost` : deploy contract w/localhost made w/*5*
7. `node scripts/sample-script.js` : 
8. `npx hardhat help` : 
