const { expect } = require("chai");
const { ethers } = require("hardhat");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("MyContract", () => {

    async function deployMyContract(){
        let contractFactory = await ethers.getContractFactory("MyContract");
        let contract = await contractFactory.deploy();
        await contract.deployed();

        const [owner, otherAccount] = await ethers.getSigners();
        return {contract, owner, otherAccount}
    }
    deployMyContract();

    it("should add value to balance", async () => {
        const contract = await loadFixture(deployMyContract);
        await contract.add(50);
        const balance = await contract.balance();
        expect(balance.toNumber()).to.equal(150);
    })
})