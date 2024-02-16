export const MarketFactoryAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_market",
        type: "address",
      },
      {
        internalType: "address",
        name: "_arbitrator",
        type: "address",
      },
      {
        internalType: "contract IRealityETH_v3_0",
        name: "_realitio",
        type: "address",
      },
      {
        internalType: "contract Wrapped1155Factory",
        name: "_wrapped1155Factory",
        type: "address",
      },
      {
        internalType: "contract IConditionalTokens",
        name: "_conditionalTokens",
        type: "address",
      },
      {
        internalType: "address",
        name: "_collateralToken",
        type: "address",
      },
      {
        internalType: "contract IRealityProxy",
        name: "_categoricalOracle",
        type: "address",
      },
      {
        internalType: "contract IRealityScalarAdapter",
        name: "_scalarOracle",
        type: "address",
      },
      {
        internalType: "contract IMavFactory",
        name: "_mavFactory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_governor",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ERC1167FailedCreateClone",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "market",
        type: "address",
      },
    ],
    name: "NewMarket",
    type: "event",
  },
  {
    inputs: [],
    name: "QUESTION_TIMEOUT",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "allMarkets",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "arbitrator",
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
    name: "categoricalOracle",
    outputs: [
      {
        internalType: "contract IRealityProxy",
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
        internalType: "address",
        name: "_governor",
        type: "address",
      },
    ],
    name: "changeGovernor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_market",
        type: "address",
      },
    ],
    name: "changeMarket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "collateralToken",
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
    name: "conditionalTokens",
    outputs: [
      {
        internalType: "contract IConditionalTokens",
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
            internalType: "string",
            name: "marketName",
            type: "string",
          },
          {
            internalType: "string",
            name: "encodedQuestion",
            type: "string",
          },
          {
            internalType: "string[]",
            name: "outcomes",
            type: "string[]",
          },
          {
            internalType: "uint256",
            name: "lowerBound",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "upperBound",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minBond",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "openingTime",
            type: "uint32",
          },
        ],
        internalType: "struct MarketFactory.CreateMarketParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "createCategoricalMarket",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "marketName",
            type: "string",
          },
          {
            internalType: "string",
            name: "encodedQuestion",
            type: "string",
          },
          {
            internalType: "string[]",
            name: "outcomes",
            type: "string[]",
          },
          {
            internalType: "uint256",
            name: "lowerBound",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "upperBound",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minBond",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "openingTime",
            type: "uint32",
          },
        ],
        internalType: "struct MarketFactory.CreateMarketParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "createScalarMarket",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "governor",
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
    name: "market",
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
    name: "marketCount",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "markets",
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
    name: "mavFactory",
    outputs: [
      {
        internalType: "contract IMavFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "realitio",
    outputs: [
      {
        internalType: "contract IRealityETH_v3_0",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "scalarOracle",
    outputs: [
      {
        internalType: "contract IRealityScalarAdapter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wrapped1155Factory",
    outputs: [
      {
        internalType: "contract Wrapped1155Factory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
