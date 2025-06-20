/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  ProofOfPlay,
  ProofOfPlayInterface,
} from "../../contracts/ProofOfPlay";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "xpGained",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockTime",
        type: "uint256",
      },
    ],
    name: "MatchLogged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "rewardXP",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50336040518060400160405280601181526020017f467261637475726520506f696e742058500000000000000000000000000000008152506040518060400160405280600481526020017f4650585000000000000000000000000000000000000000000000000000000000815250816003908162000090919062000472565b508060049081620000a2919062000472565b505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036200011a5760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016200011191906200059e565b60405180910390fd5b6200012b816200013260201b60201c565b50620005bb565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200027a57607f821691505b60208210810362000290576200028f62000232565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620002fa7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620002bb565b620003068683620002bb565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620003536200034d62000347846200031e565b62000328565b6200031e565b9050919050565b6000819050919050565b6200036f8362000332565b620003876200037e826200035a565b848454620002c8565b825550505050565b600090565b6200039e6200038f565b620003ab81848462000364565b505050565b5b81811015620003d357620003c760008262000394565b600181019050620003b1565b5050565b601f8211156200042257620003ec8162000296565b620003f784620002ab565b8101602085101562000407578190505b6200041f6200041685620002ab565b830182620003b0565b50505b505050565b600082821c905092915050565b6000620004476000198460080262000427565b1980831691505092915050565b600062000462838362000434565b9150826002028217905092915050565b6200047d82620001f8565b67ffffffffffffffff81111562000499576200049862000203565b5b620004a5825462000261565b620004b2828285620003d7565b600060209050601f831160018114620004ea5760008415620004d5578287015190505b620004e1858262000454565b86555062000551565b601f198416620004fa8662000296565b60005b828110156200052457848901518255600182019150602085019450602081019050620004fd565b8683101562000544578489015162000540601f89168262000434565b8355505b6001600288020188555050505b505050505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620005868262000559565b9050919050565b620005988162000579565b82525050565b6000602082019050620005b560008301846200058d565b92915050565b61121480620005cb6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806370a082311161008c57806395d89b411161006657806395d89b4114610202578063a9059cbb14610220578063dd62ed3e14610250578063f2fde38b14610280576100cf565b806370a08231146101aa578063715018a6146101da5780638da5cb5b146101e4576100cf565b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461012257806323b872dd14610140578063313ce5671461017057806337eee9df1461018e575b600080fd5b6100dc61029c565b6040516100e99190610e3f565b60405180910390f35b61010c60048036038101906101079190610efa565b61032e565b6040516101199190610f55565b60405180910390f35b61012a610351565b6040516101379190610f7f565b60405180910390f35b61015a60048036038101906101559190610f9a565b61035b565b6040516101679190610f55565b60405180910390f35b61017861038a565b6040516101859190611009565b60405180910390f35b6101a860048036038101906101a39190610efa565b610393565b005b6101c460048036038101906101bf9190611024565b6103f9565b6040516101d19190610f7f565b60405180910390f35b6101e2610441565b005b6101ec610455565b6040516101f99190611060565b60405180910390f35b61020a61047f565b6040516102179190610e3f565b60405180910390f35b61023a60048036038101906102359190610efa565b610511565b6040516102479190610f55565b60405180910390f35b61026a6004803603810190610265919061107b565b610534565b6040516102779190610f7f565b60405180910390f35b61029a60048036038101906102959190611024565b6105bb565b005b6060600380546102ab906110ea565b80601f01602080910402602001604051908101604052809291908181526020018280546102d7906110ea565b80156103245780601f106102f957610100808354040283529160200191610324565b820191906000526020600020905b81548152906001019060200180831161030757829003601f168201915b5050505050905090565b600080610339610641565b9050610346818585610649565b600191505092915050565b6000600254905090565b600080610366610641565b905061037385828561065b565b61037e8585856106f0565b60019150509392505050565b60006012905090565b61039b6107e4565b6103a5828261086b565b8173ffffffffffffffffffffffffffffffffffffffff167fa399252bc9d9838874d5745239275184da0f4aff4d7385e2afb5c3ab534a184b82426040516103ed92919061111b565b60405180910390a25050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6104496107e4565b61045360006108ed565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606004805461048e906110ea565b80601f01602080910402602001604051908101604052809291908181526020018280546104ba906110ea565b80156105075780601f106104dc57610100808354040283529160200191610507565b820191906000526020600020905b8154815290600101906020018083116104ea57829003601f168201915b5050505050905090565b60008061051c610641565b90506105298185856106f0565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6105c36107e4565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036106355760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161062c9190611060565b60405180910390fd5b61063e816108ed565b50565b600033905090565b61065683838360016109b3565b505050565b60006106678484610534565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8110156106ea57818110156106da578281836040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526004016106d193929190611144565b60405180910390fd5b6106e9848484840360006109b3565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036107625760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016107599190611060565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107d45760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016107cb9190611060565b60405180910390fd5b6107df838383610b8a565b505050565b6107ec610641565b73ffffffffffffffffffffffffffffffffffffffff1661080a610455565b73ffffffffffffffffffffffffffffffffffffffff16146108695761082d610641565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016108609190611060565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108dd5760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016108d49190611060565b60405180910390fd5b6108e960008383610b8a565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610a255760006040517fe602df05000000000000000000000000000000000000000000000000000000008152600401610a1c9190611060565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610a975760006040517f94280d62000000000000000000000000000000000000000000000000000000008152600401610a8e9190611060565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508015610b84578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610b7b9190610f7f565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610bdc578060026000828254610bd091906111aa565b92505081905550610caf565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610c68578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610c5f93929190611144565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610cf85780600260008282540392505081905550610d45565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610da29190610f7f565b60405180910390a3505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610de9578082015181840152602081019050610dce565b60008484015250505050565b6000601f19601f8301169050919050565b6000610e1182610daf565b610e1b8185610dba565b9350610e2b818560208601610dcb565b610e3481610df5565b840191505092915050565b60006020820190508181036000830152610e598184610e06565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610e9182610e66565b9050919050565b610ea181610e86565b8114610eac57600080fd5b50565b600081359050610ebe81610e98565b92915050565b6000819050919050565b610ed781610ec4565b8114610ee257600080fd5b50565b600081359050610ef481610ece565b92915050565b60008060408385031215610f1157610f10610e61565b5b6000610f1f85828601610eaf565b9250506020610f3085828601610ee5565b9150509250929050565b60008115159050919050565b610f4f81610f3a565b82525050565b6000602082019050610f6a6000830184610f46565b92915050565b610f7981610ec4565b82525050565b6000602082019050610f946000830184610f70565b92915050565b600080600060608486031215610fb357610fb2610e61565b5b6000610fc186828701610eaf565b9350506020610fd286828701610eaf565b9250506040610fe386828701610ee5565b9150509250925092565b600060ff82169050919050565b61100381610fed565b82525050565b600060208201905061101e6000830184610ffa565b92915050565b60006020828403121561103a57611039610e61565b5b600061104884828501610eaf565b91505092915050565b61105a81610e86565b82525050565b60006020820190506110756000830184611051565b92915050565b6000806040838503121561109257611091610e61565b5b60006110a085828601610eaf565b92505060206110b185828601610eaf565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061110257607f821691505b602082108103611115576111146110bb565b5b50919050565b60006040820190506111306000830185610f70565b61113d6020830184610f70565b9392505050565b60006060820190506111596000830186611051565b6111666020830185610f70565b6111736040830184610f70565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006111b582610ec4565b91506111c083610ec4565b92508282019050808211156111d8576111d761117b565b5b9291505056fea26469706673582212207ec4def597c633166f5ba79d3b5445b79412e49e4819091e7e5d0a721865fdd064736f6c63430008180033";

type ProofOfPlayConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProofOfPlayConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProofOfPlay__factory extends ContractFactory {
  constructor(...args: ProofOfPlayConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      ProofOfPlay & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ProofOfPlay__factory {
    return super.connect(runner) as ProofOfPlay__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProofOfPlayInterface {
    return new Interface(_abi) as ProofOfPlayInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ProofOfPlay {
    return new Contract(address, _abi, runner) as unknown as ProofOfPlay;
  }
}
