// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "../node_modules/hardhat/console.sol";


contract  MyContract{
    uint256 public unlockedTime;
    address payable public  owner;

    event Withdrawl(uint256 amount, uint256 time);

    constructor(uint256 _unlockedTime) payable{
        require(block.timestamp < _unlockedTime, "Unlocked time should be future");
        unlockedTime = _unlockedTime;
        owner = payable(msg.sender);
    }

    function withdraw() public{
        require(block.timestamp >= unlockedTime, "Not yet unlocked");
        require(msg.sender == owner, "Not a owner");
        emit Withdrawl(address(this).balance, block.timestamp);
        owner.transfer(address(this).balance);
    }

}