/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface IOpsProxyFactoryInterface extends utils.Interface {
  functions: {
    "getProxyOf(address)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "getProxyOf"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getProxyOf",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "getProxyOf", data: BytesLike): Result;

  events: {};
}

export interface IOpsProxyFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IOpsProxyFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getProxyOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string, boolean]>;
  };

  getProxyOf(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[string, boolean]>;

  callStatic: {
    getProxyOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string, boolean]>;
  };

  filters: {};

  estimateGas: {
    getProxyOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getProxyOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
