const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.floor(Date.now() / 1000);
  const oneYearInSeconds = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + oneYearInSeconds;

  console.log(currentTimestampInSeconds);
  console.log(oneYearInSeconds);
  console.log(unlockTime);

  const lockedAmount = hre.eth
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
