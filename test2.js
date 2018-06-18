const Web3 = require('web3');
const web3ins = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))

var abi1 = require("./build/contracts/efficientExampleCode.json").abi;
var abi2 = require("./build/contracts/exampleCode.json").abi;

var bytecode1 = require("./build/contracts/efficientExampleCode.json").bytecode;
var bytecode2= require("./build/contracts/exampleCode.json").bytecode;

const contractEf = new web3ins.eth.Contract(abi1)
const contractNef = new web3ins.eth.Contract(abi2)

let contractInstanceEf = async() => { await contractEf.deploy({data: bytecode1})}
let estimatedGasEf = async() =>  {
  let deployed = await contractInstanceEf()
  deployed.methods.someFunction(1).estimateGas().then(console.log)
}

let contractInstanceNef = async() => { await contractNef.deploy({data: bytecode2})}
let estimatedGasNef = async() =>  {
  let deployed = await contractInstanceEf()
  deployed.methods.someFunction(1).estimateGas().then(console.log)
}
estimatedGasEf()
estimatedGasNef()
