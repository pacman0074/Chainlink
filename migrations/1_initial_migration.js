const Migrations = artifacts.require("Migrations");
const PriceConsumer = artifacts.require("PriceConsumerV3")

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(PriceConsumer);
};
