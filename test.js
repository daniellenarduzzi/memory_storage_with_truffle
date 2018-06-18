var abi1 = require("./build/contracts/efficientExampleCode.json").abi;
var abi2 = require("./build/contracts/exampleCode.json").abi;
const Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var efficientExampleCodeInstance = async () => {
  let  res =  await web3.eth.contract(abi1).at("0x2b23f304375272d119a5157f85df95a623368078")
  return res
};
var exampleCodeInstance = async () => {
  let res=  await web3.eth.contract(abi2).at("0x886665cf91e9e2fc3bb738013adc373ccec60295")
  return res
};
var gasEstimation1 = async () => {
  let res=  await efficientExampleCodeInstance.Methods.someFunction.estimateGas();
};
console.log(gasEstimation1().then(console.log));
