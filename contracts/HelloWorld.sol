// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract HelloWorld {
    string public greet;

    address public owner;
    uint256 public createdAt;

    constructor(string memory initMessage) {
        greet = initMessage;

        owner = msg.sender;
        createdAt = block.timestamp;
    }

    function message(string memory firstMessage) public {
        greet = firstMessage;
    }

    function updateMessage(string memory update) public {
        greet = update;
    }
}
