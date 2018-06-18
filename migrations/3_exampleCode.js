var exampleCode = artifacts.require("./exampleCode.sol");

module.exports = function(deployer) {
  deployer.deploy(exampleCode);
};
