export const MaverickPoolAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint128",
            name: "deltaA",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "deltaB",
            type: "uint128",
          },
          {
            internalType: "uint256",
            name: "deltaLpBalance",
            type: "uint256",
          },
          {
            internalType: "uint128",
            name: "binId",
            type: "uint128",
          },
          {
            internalType: "uint8",
            name: "kind",
            type: "uint8",
          },
          {
            internalType: "int32",
            name: "lowerTick",
            type: "int32",
          },
          {
            internalType: "bool",
            name: "isActive",
            type: "bool",
          },
        ],
        indexed: false,
        internalType: "struct IPool.BinDelta[]",
        name: "binDeltas",
        type: "tuple[]",
      },
    ],
    name: "AddLiquidity",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint128",
        name: "binId",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "reserveA",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "reserveB",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "mergeId",
        type: "uint128",
      },
    ],
    name: "BinMerged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint128",
        name: "binId",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "int128",
        name: "previousTick",
        type: "int128",
      },
      {
        indexed: false,
        internalType: "int128",
        name: "newTick",
        type: "int128",
      },
    ],
    name: "BinMoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "binId",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "maxRecursion",
        type: "uint32",
      },
    ],
    name: "MigrateBinsUpStack",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "protocolFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isTokenA",
        type: "bool",
      },
    ],
    name: "ProtocolFeeCollected",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint128",
            name: "deltaA",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "deltaB",
            type: "uint128",
          },
          {
            internalType: "uint256",
            name: "deltaLpBalance",
            type: "uint256",
          },
          {
            internalType: "uint128",
            name: "binId",
            type: "uint128",
          },
          {
            internalType: "uint8",
            name: "kind",
            type: "uint8",
          },
          {
            internalType: "int32",
            name: "lowerTick",
            type: "int32",
          },
          {
            internalType: "bool",
            name: "isActive",
            type: "bool",
          },
        ],
        indexed: false,
        internalType: "struct IPool.BinDelta[]",
        name: "binDeltas",
        type: "tuple[]",
      },
    ],
    name: "RemoveLiquidity",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "protocolFee",
        type: "uint256",
      },
    ],
    name: "SetProtocolFeeRatio",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "tokenAIn",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "exactOutput",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "int32",
        name: "activeTick",
        type: "int32",
      },
    ],
    name: "Swap",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "toTokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint128",
            name: "binId",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "amount",
            type: "uint128",
          },
        ],
        indexed: false,
        internalType: "struct IPool.RemoveLiquidityParams[]",
        name: "params",
        type: "tuple[]",
      },
    ],
    name: "TransferLiquidity",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "kind",
            type: "uint8",
          },
          {
            internalType: "int32",
            name: "pos",
            type: "int32",
          },
          {
            internalType: "bool",
            name: "isDelta",
            type: "bool",
          },
          {
            internalType: "uint128",
            name: "deltaA",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "deltaB",
            type: "uint128",
          },
        ],
        internalType: "struct IPool.AddLiquidityParams[]",
        name: "params",
        type: "tuple[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "addLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenAAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenBAmount",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint128",
            name: "deltaA",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "deltaB",
            type: "uint128",
          },
          {
            internalType: "uint256",
            name: "deltaLpBalance",
            type: "uint256",
          },
          {
            internalType: "uint128",
            name: "binId",
            type: "uint128",
          },
          {
            internalType: "uint8",
            name: "kind",
            type: "uint8",
          },
          {
            internalType: "int32",
            name: "lowerTick",
            type: "int32",
          },
          {
            internalType: "bool",
            name: "isActive",
            type: "bool",
          },
        ],
        internalType: "struct IPool.BinDelta[]",
        name: "binDeltas",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint128",
        name: "binId",
        type: "uint128",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "lpToken",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "binBalanceA",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "binBalanceB",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int32",
        name: "tick",
        type: "int32",
      },
    ],
    name: "binMap",
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
        internalType: "int32",
        name: "tick",
        type: "int32",
      },
      {
        internalType: "uint256",
        name: "kind",
        type: "uint256",
      },
    ],
    name: "binPositions",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "contract IFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fee",
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
    name: "lookback",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "binId",
        type: "uint128",
      },
    ],
    name: "getBin",
    outputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "reserveA",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "reserveB",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "mergeBinBalance",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "mergeId",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "totalSupply",
            type: "uint128",
          },
          {
            internalType: "uint8",
            name: "kind",
            type: "uint8",
          },
          {
            internalType: "int32",
            name: "lowerTick",
            type: "int32",
          },
        ],
        internalType: "struct IPool.BinState",
        name: "bin",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentTwa",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getState",
    outputs: [
      {
        components: [
          {
            internalType: "int32",
            name: "activeTick",
            type: "int32",
          },
          {
            internalType: "uint8",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "uint128",
            name: "binCounter",
            type: "uint128",
          },
          {
            internalType: "uint64",
            name: "protocolFeeRatio",
            type: "uint64",
          },
        ],
        internalType: "struct IPool.State",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTwa",
    outputs: [
      {
        components: [
          {
            internalType: "int96",
            name: "twa",
            type: "int96",
          },
          {
            internalType: "int96",
            name: "value",
            type: "int96",
          },
          {
            internalType: "uint64",
            name: "lastTimestamp",
            type: "uint64",
          },
        ],
        internalType: "struct IPool.TwaState",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "binId",
        type: "uint128",
      },
      {
        internalType: "uint32",
        name: "maxRecursion",
        type: "uint32",
      },
    ],
    name: "migrateBinUpStack",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint128",
            name: "binId",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "amount",
            type: "uint128",
          },
        ],
        internalType: "struct IPool.RemoveLiquidityParams[]",
        name: "params",
        type: "tuple[]",
      },
    ],
    name: "removeLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenAOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenBOut",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint128",
            name: "deltaA",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "deltaB",
            type: "uint128",
          },
          {
            internalType: "uint256",
            name: "deltaLpBalance",
            type: "uint256",
          },
          {
            internalType: "uint128",
            name: "binId",
            type: "uint128",
          },
          {
            internalType: "uint8",
            name: "kind",
            type: "uint8",
          },
          {
            internalType: "int32",
            name: "lowerTick",
            type: "int32",
          },
          {
            internalType: "bool",
            name: "isActive",
            type: "bool",
          },
        ],
        internalType: "struct IPool.BinDelta[]",
        name: "binDeltas",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "tokenAIn",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "exactOutput",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "sqrtPriceLimit",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tickSpacing",
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
    name: "tokenA",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenAScale",
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
    name: "tokenB",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenBScale",
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
        internalType: "uint256",
        name: "fromTokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "toTokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint128",
            name: "binId",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "amount",
            type: "uint128",
          },
        ],
        internalType: "struct IPool.RemoveLiquidityParams[]",
        name: "params",
        type: "tuple[]",
      },
    ],
    name: "transferLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
