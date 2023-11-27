// contracts/SiwaOasisBeacon.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {UpgradeableBeacon} from "@openzeppelin/contracts/proxy/beacon/UpgradeableBeacon.sol";

contract ContractBeacon is UpgradeableBeacon {
    constructor(
        address implementation
    ) UpgradeableBeacon(implementation, msg.sender) {}
}
