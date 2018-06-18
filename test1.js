/*
*  Contract deployed with truffle
*/

const Web3 = require('web3');
const web3conn = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))

// JSON insterface (abi) obtained from build folder, after run truffle deploy
var abi1 = require("./build/contracts/efficientExampleCode.json").abi;
var abi2 = require("./build/contracts/exampleCode.json").abi;

//instances of the contracts
const contractEf = web3conn.eth.contract(abi1)
const contractNef = web3conn.eth.contract(abi2)

// Gas estimation for the efficient code
const address1  = "0x2b23f304375272d119a5157f85df95a623368078"
const contractInstanceEf = contractEf.at(address1)
let estimatedGasEf = contractInstanceEf.someFunction.estimateGas(1)
console.log("eficcient contract: "+estimatedGasEf);

// Gas estimation for the inefficient code
const address2  = "0x886665cf91e9e2fc3bb738013adc373ccec60295"
const contractInstanceNef = contractNef.at(address2)
let estimatedGasNef = contractInstanceNef.someFunction.estimateGas(1)
console.log("non eficcient contract: "+estimatedGasNef);
