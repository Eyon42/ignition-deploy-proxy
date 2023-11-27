import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { parseUnits } from "ethers";

export default buildModule("Contract", (m) => {
  const contractImplementationV1 = m.contract("Contract");

  const contractBeacon = m.contract("ContractBeacon", [
    contractImplementationV1,
  ]);

  m.call(contractBeacon, "__Contract_init", [
    3600
  ]);

  return { contractImplementationV1, contractBeacon };
});
