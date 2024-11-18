require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
solidity: "0.8.26",
networks: {
    taiko: {
        url: "https://rpc.hekla.taiko.xyz",
        accounts: [process.env.YOUR_PRIVATE_KEY],
    }
},
gasPrice: 10000000000,
};