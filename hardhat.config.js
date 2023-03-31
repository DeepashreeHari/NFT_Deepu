//require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const {API_URL, PRIVATE_KEY} = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  defaultNetwork : "sepolia",
  networks: {
    hardhat : {},
    sepolia : {
      url : "https://eth-sepolia.g.alchemy.com/v2/YQt...8Zm",
      accounts : ["033...5e",],
    },
    },
  };


