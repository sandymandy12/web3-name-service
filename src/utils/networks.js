// usign contract addresses here with useState
const networks = {
  "0x1": {
    name: "Mainnet",
    address: "0x0000000000000000000000",
    rpc: "https://etherscan.io/",
  },
  "0x3": {
    name: "Ropsten",
    address: "0x4505CC17F874C10fA05cF2f64A5A7CD7bafBA3Ce",
    rpc: "https://ropsten.etherscan.io/",
  },
  "0x2a": {
    name: "Kovan",
    address: "0x0000000000000000000000",
    rpc: "https://kovan.etherscan.io/",
  },
  "0x4": {
    name: "Rinkeby",
    address: "0x0000000000000000000000",
    rpc: "https://rinkeby.etherscan.io/",
  },
  "0x5": { name: "Goerli", address: "0x0000000000000000000000", rpc: "" },
  "0x61": { name: "BSC Testnet", address: "0x0000000000000000000000", rpc: "" },
  "0x38": { name: "BSC Mainnet", address: "0x0000000000000000000000", rpc: "" },
  "0x89": {
    name: "Polygon Mainnet",
    address: "",
    rpc: "https://polygonscan.com/",
  },
  "0x13881": {
    name: "Polygon Mumbai Testnet",
    address: "0xcE5781BB8a0a9F9693518739d26f489e471cabF8",
    rpc: "https://mumbai.polygonscan.com/",
  },
  "0xa86a": {
    name: "AVAX Mainnet",
    address: "0x0000000000000000000000",
    rpc: "",
  },
};

export { networks };
