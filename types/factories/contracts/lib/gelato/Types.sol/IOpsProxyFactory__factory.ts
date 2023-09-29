/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  IOpsProxyFactory,
  IOpsProxyFactoryInterface,
} from "../../../../../contracts/lib/gelato/Types.sol/IOpsProxyFactory";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getProxyOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IOpsProxyFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IOpsProxyFactoryInterface {
    return new utils.Interface(_abi) as IOpsProxyFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOpsProxyFactory {
    return new Contract(address, _abi, signerOrProvider) as IOpsProxyFactory;
  }
}
