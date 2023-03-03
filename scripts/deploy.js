const hre = require('hardhat')

async function main() {
  const contract = await hre.ethers.getContractFactory('MyContract')
  const contractInstance = await contract.deploy();
  await contractInstance.deployed();
  console.log('Contract deployed to ---> ', contractInstance.address);
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
