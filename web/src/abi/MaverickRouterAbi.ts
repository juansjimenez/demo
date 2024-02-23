export const MaverickRouterAbi = [
  {
    inputs: [
      {
        internalType: "contract IPool",
        name: "pool",
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
        internalType: "uint256",
        name: "minTokenAAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minTokenBAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "addLiquidityToPool",
    outputs: [
      {
        internalType: "uint256",
        name: "receivingTokenId",
        type: "uint256",
      },
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
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPool",
        name: "pool",
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
        internalType: "uint256",
        name: "minTokenAAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minTokenBAmount",
        type: "uint256",
      },
      {
        internalType: "int32",
        name: "minActiveTick",
        type: "int32",
      },
      {
        internalType: "int32",
        name: "maxActiveTick",
        type: "int32",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "addLiquidityWTickLimits",
    outputs: [
      {
        internalType: "uint256",
        name: "receivingTokenId",
        type: "uint256",
      },
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
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "path",
            type: "bytes",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountIn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountOutMinimum",
            type: "uint256",
          },
        ],
        internalType: "struct IRouter.ExactInputParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "exactInput",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "tokenIn",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenOut",
            type: "address",
          },
          {
            internalType: "contract IPool",
            name: "pool",
            type: "address",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountIn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountOutMinimum",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "sqrtPriceLimitD18",
            type: "uint256",
          },
        ],
        internalType: "struct ISlimRouter.ExactInputSingleParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "exactInputSingle",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "path",
            type: "bytes",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountOut",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountInMaximum",
            type: "uint256",
          },
        ],
        internalType: "struct IRouter.ExactOutputParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "exactOutput",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "tokenIn",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenOut",
            type: "address",
          },
          {
            internalType: "contract IPool",
            name: "pool",
            type: "address",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountOut",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountInMaximum",
            type: "uint256",
          },
        ],
        internalType: "struct ISlimRouter.ExactOutputSingleParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "exactOutputSingle",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
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
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "fee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tickSpacing",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "lookback",
            type: "int256",
          },
          {
            internalType: "int32",
            name: "activeTick",
            type: "int32",
          },
          {
            internalType: "contract IERC20",
            name: "tokenA",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "tokenB",
            type: "address",
          },
        ],
        internalType: "struct IRouter.PoolParams",
        name: "poolParams",
        type: "tuple",
      },
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
        name: "addParams",
        type: "tuple[]",
      },
      {
        internalType: "uint256",
        name: "minTokenAAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minTokenBAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "getOrCreatePoolAndAddLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "receivingTokenId",
        type: "uint256",
      },
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
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPool",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint128[]",
        name: "binIds",
        type: "uint128[]",
      },
      {
        internalType: "uint32",
        name: "maxRecursion",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "migrateBinsUpStack",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "multicall",
    outputs: [
      {
        internalType: "bytes[]",
        name: "results",
        type: "bytes[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "position",
    outputs: [
      {
        internalType: "contract IPosition",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "refundETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPool",
        name: "pool",
        type: "address",
      },
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
      {
        internalType: "uint256",
        name: "minTokenAAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minTokenBAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "removeLiquidity",
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
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "swapCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountMinimum",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "sweepToken",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountMinimum",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "unwrapWETH9",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;
