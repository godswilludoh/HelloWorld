/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('dotenv').config();
require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-etherscan');

const { API_URL, PRIVATE_KEY } = process.env;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

//api key of alchemy
//wallet password
module.exports = {
	solidity: '0.8.4',
	defaultNetwork: 'rinkeby',
	networks: {
		hardhat: {},
		rinkeby: {
			url: API_URL,
			accounts: [`0x${PRIVATE_KEY}`],
		},
	},
	etherscan: {
		apiKey: ETHERSCAN_API_KEY,
	},
};
