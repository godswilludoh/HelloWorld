# Basic Hello World Hardhat Project

Tools Used:
-Alchemy
-Metamask
-Visual studio code
-Hardhat

This project demonstrates a basic Hardhat hello world contract that has state variables, a contructor and two functions. It has a HelloWorld contract, a test for the contract, deploy and interact scripts that deploys the contract to the rinkeby test network and allows interaction and reading of the contract.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
Alchemy was used as the node provider to get the smart contract from the local development into the blockchain.
MetaMask was the virtual wallet used to interact with the ethereum blockchain.
Hardhat was used to test and deploy the smart contract codes in the local development.

Successfully deployed CONTRACT_ADDRESS = "0x32F9e95D0D3A791dbaf410D8567005E10D766f5E"

Rinkeby Etherscan Url = https://rinkeby.etherscan.io/tx/0x2544cb22f17b8d4ab6347a9e110bc278736f6fdd4f5a5103c7c9d8ddffe61c0a

The contract source code was verified on Etherscan and as a result, I could interact with the contract directly via the UI.
