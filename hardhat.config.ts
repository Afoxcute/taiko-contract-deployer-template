require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
solidity: "0.8.26",
networks: {
    mantle: {
        url: "https://rpc.sepolia.mantle.xyz/",
        accounts: [process.env.YOUR_PRIVATE_KEY],
        chainId: 5000
    }
},
gasPrice: 10000000000,
};