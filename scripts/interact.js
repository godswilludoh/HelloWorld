const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const { ethers } = require('hardhat');
const contract = require('../artifacts/contracts/HelloWorld.sol/HelloWorld.json');

//provider = Alchemy
const alchemyProvider = new ethers.providers.AlchemyProvider(
	((network = 'rinkeby'), API_KEY)
);

//signer = Me
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

//contract instance
const helloWorldContract = new ethers.Contract(
	CONTRACT_ADDRESS,
	contract.abi,
	signer
);

async function main() {
	const firstMessage = await helloWorldContract.message();
	console.log('The message is: ' + firstMessage);

	console.log('Updating the message...');
	const tx = await helloWorldContract.update();
	await tx.wait();

	const update = await helloWorldContract.message();
	console.log('The new message is: ' + update);

	//contract.update('Goodbye world')
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
