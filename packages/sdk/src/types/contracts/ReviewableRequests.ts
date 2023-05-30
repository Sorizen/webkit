/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface ReviewableRequestsInterface extends utils.Interface {
  functions: {
    "acceptRequest(uint256)": FunctionFragment;
    "createRequest(address,bytes,bytes,string,string)": FunctionFragment;
    "dropRequest(uint256)": FunctionFragment;
    "getInjector()": FunctionFragment;
    "nextRequestId()": FunctionFragment;
    "rejectRequest(uint256,string)": FunctionFragment;
    "requests(uint256)": FunctionFragment;
    "setDependencies(address)": FunctionFragment;
    "setInjector(address)": FunctionFragment;
    "updateRequest(uint256,address,bytes,bytes,string,string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "acceptRequest"
      | "createRequest"
      | "dropRequest"
      | "getInjector"
      | "nextRequestId"
      | "rejectRequest"
      | "requests"
      | "setDependencies"
      | "setInjector"
      | "updateRequest"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "acceptRequest",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createRequest",
    values: [string, BytesLike, BytesLike, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "dropRequest",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getInjector",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nextRequestId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rejectRequest",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "requests",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setDependencies",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setInjector", values: [string]): string;
  encodeFunctionData(
    functionFragment: "updateRequest",
    values: [BigNumberish, string, BytesLike, BytesLike, string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dropRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInjector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextRequestId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rejectRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "requests", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setDependencies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setInjector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateRequest",
    data: BytesLike
  ): Result;

  events: {
    "RequestAccepted(uint256)": EventFragment;
    "RequestCreated(uint256,address,address,bytes,bytes,string,string)": EventFragment;
    "RequestDropped(uint256)": EventFragment;
    "RequestRejected(uint256,string)": EventFragment;
    "RequestUpdated(uint256,uint256,address,bytes,bytes,string,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RequestAccepted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequestCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequestDropped"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequestRejected"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequestUpdated"): EventFragment;
}

export interface RequestAcceptedEventObject {
  requestId: BigNumber;
}
export type RequestAcceptedEvent = TypedEvent<
  [BigNumber],
  RequestAcceptedEventObject
>;

export type RequestAcceptedEventFilter = TypedEventFilter<RequestAcceptedEvent>;

export interface RequestCreatedEventObject {
  requestId: BigNumber;
  creator: string;
  executor: string;
  acceptData: string;
  rejectData: string;
  misc: string;
  description: string;
}
export type RequestCreatedEvent = TypedEvent<
  [BigNumber, string, string, string, string, string, string],
  RequestCreatedEventObject
>;

export type RequestCreatedEventFilter = TypedEventFilter<RequestCreatedEvent>;

export interface RequestDroppedEventObject {
  requestId: BigNumber;
}
export type RequestDroppedEvent = TypedEvent<
  [BigNumber],
  RequestDroppedEventObject
>;

export type RequestDroppedEventFilter = TypedEventFilter<RequestDroppedEvent>;

export interface RequestRejectedEventObject {
  requestId: BigNumber;
  reason: string;
}
export type RequestRejectedEvent = TypedEvent<
  [BigNumber, string],
  RequestRejectedEventObject
>;

export type RequestRejectedEventFilter = TypedEventFilter<RequestRejectedEvent>;

export interface RequestUpdatedEventObject {
  requestId: BigNumber;
  newRequestId: BigNumber;
  executor: string;
  acceptData: string;
  rejectData: string;
  misc: string;
  description: string;
}
export type RequestUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber, string, string, string, string, string],
  RequestUpdatedEventObject
>;

export type RequestUpdatedEventFilter = TypedEventFilter<RequestUpdatedEvent>;

export interface ReviewableRequests extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ReviewableRequestsInterface;

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
    acceptRequest(
      requestId_: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    createRequest(
      executor_: string,
      acceptData_: BytesLike,
      rejectData_: BytesLike,
      misc_: string,
      description_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    dropRequest(
      requestId_: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    getInjector(
      overrides?: CallOverrides
    ): Promise<[string] & { _injector: string }>;

    nextRequestId(overrides?: CallOverrides): Promise<[BigNumber]>;

    rejectRequest(
      requestId_: BigNumberish,
      reason_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    requests(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [number, string, string, string, string, string] & {
        status: number;
        creator: string;
        executor: string;
        acceptData: string;
        rejectData: string;
        misc: string;
      }
    >;

    setDependencies(
      registryAddress_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setInjector(
      _injector: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    updateRequest(
      requestId_: BigNumberish,
      executor_: string,
      acceptData_: BytesLike,
      rejectData_: BytesLike,
      misc_: string,
      description_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  acceptRequest(
    requestId_: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  createRequest(
    executor_: string,
    acceptData_: BytesLike,
    rejectData_: BytesLike,
    misc_: string,
    description_: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  dropRequest(
    requestId_: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  getInjector(overrides?: CallOverrides): Promise<string>;

  nextRequestId(overrides?: CallOverrides): Promise<BigNumber>;

  rejectRequest(
    requestId_: BigNumberish,
    reason_: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  requests(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [number, string, string, string, string, string] & {
      status: number;
      creator: string;
      executor: string;
      acceptData: string;
      rejectData: string;
      misc: string;
    }
  >;

  setDependencies(
    registryAddress_: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setInjector(
    _injector: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  updateRequest(
    requestId_: BigNumberish,
    executor_: string,
    acceptData_: BytesLike,
    rejectData_: BytesLike,
    misc_: string,
    description_: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptRequest(
      requestId_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    createRequest(
      executor_: string,
      acceptData_: BytesLike,
      rejectData_: BytesLike,
      misc_: string,
      description_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    dropRequest(
      requestId_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getInjector(overrides?: CallOverrides): Promise<string>;

    nextRequestId(overrides?: CallOverrides): Promise<BigNumber>;

    rejectRequest(
      requestId_: BigNumberish,
      reason_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    requests(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [number, string, string, string, string, string] & {
        status: number;
        creator: string;
        executor: string;
        acceptData: string;
        rejectData: string;
        misc: string;
      }
    >;

    setDependencies(
      registryAddress_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setInjector(_injector: string, overrides?: CallOverrides): Promise<void>;

    updateRequest(
      requestId_: BigNumberish,
      executor_: string,
      acceptData_: BytesLike,
      rejectData_: BytesLike,
      misc_: string,
      description_: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "RequestAccepted(uint256)"(requestId?: null): RequestAcceptedEventFilter;
    RequestAccepted(requestId?: null): RequestAcceptedEventFilter;

    "RequestCreated(uint256,address,address,bytes,bytes,string,string)"(
      requestId?: null,
      creator?: null,
      executor?: null,
      acceptData?: null,
      rejectData?: null,
      misc?: null,
      description?: null
    ): RequestCreatedEventFilter;
    RequestCreated(
      requestId?: null,
      creator?: null,
      executor?: null,
      acceptData?: null,
      rejectData?: null,
      misc?: null,
      description?: null
    ): RequestCreatedEventFilter;

    "RequestDropped(uint256)"(requestId?: null): RequestDroppedEventFilter;
    RequestDropped(requestId?: null): RequestDroppedEventFilter;

    "RequestRejected(uint256,string)"(
      requestId?: null,
      reason?: null
    ): RequestRejectedEventFilter;
    RequestRejected(
      requestId?: null,
      reason?: null
    ): RequestRejectedEventFilter;

    "RequestUpdated(uint256,uint256,address,bytes,bytes,string,string)"(
      requestId?: null,
      newRequestId?: null,
      executor?: null,
      acceptData?: null,
      rejectData?: null,
      misc?: null,
      description?: null
    ): RequestUpdatedEventFilter;
    RequestUpdated(
      requestId?: null,
      newRequestId?: null,
      executor?: null,
      acceptData?: null,
      rejectData?: null,
      misc?: null,
      description?: null
    ): RequestUpdatedEventFilter;
  };

  estimateGas: {
    acceptRequest(
      requestId_: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    createRequest(
      executor_: string,
      acceptData_: BytesLike,
      rejectData_: BytesLike,
      misc_: string,
      description_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    dropRequest(
      requestId_: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    getInjector(overrides?: CallOverrides): Promise<BigNumber>;

    nextRequestId(overrides?: CallOverrides): Promise<BigNumber>;

    rejectRequest(
      requestId_: BigNumberish,
      reason_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    requests(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    setDependencies(
      registryAddress_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setInjector(
      _injector: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    updateRequest(
      requestId_: BigNumberish,
      executor_: string,
      acceptData_: BytesLike,
      rejectData_: BytesLike,
      misc_: string,
      description_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptRequest(
      requestId_: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    createRequest(
      executor_: string,
      acceptData_: BytesLike,
      rejectData_: BytesLike,
      misc_: string,
      description_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    dropRequest(
      requestId_: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getInjector(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nextRequestId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rejectRequest(
      requestId_: BigNumberish,
      reason_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    requests(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setDependencies(
      registryAddress_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setInjector(
      _injector: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    updateRequest(
      requestId_: BigNumberish,
      executor_: string,
      acceptData_: BytesLike,
      rejectData_: BytesLike,
      misc_: string,
      description_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
