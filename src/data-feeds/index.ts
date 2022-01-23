import axios from "axios";

import type { ChainlinkPriceFeedApiResponse } from "../types";

const CHAINLINK_DOCS_CONSTANTS = {
  ADDRESSES_ENDPOINT: "https://cl-docs-addresses.web.app/addresses.json",
  ETHEREUM_NETWORKS: {
    MAINNET: "Ethereum Mainnet",
    KOVAN: "Kovan Testnet",
    RINKEBY: "Rinkeby Testnet",
  },
  PAYLOAD_KEYS: {
    AVALANCHE: "avalanche-price-feeds",
    ARBITRUM: "arbitrum-price-feeds",
    ETHEREUM: "ethereum-addresses",
    BSC: "binance-smart-chain-addresses-price",
    FANTOM: "fantom-price-feeds",
    MATIC: "matic-addresses",
    MOON_RIVER: "data-feeds-moonriver",
  },
};

const SUPPORTED_NETWORKS = {
  ETHEREUM: "ethereum",
  AVALANCHE: "avalanche",
  MOON_RIVER: "moon_river",
  ARBITRUM: "arbitrum",
  BSC: "bsc",
  FANTOM: "fantom",
  MATIC: "matic",
};

const mapNetworkToChainlinkIdentifiers = (network: string) => {
  switch (network) {
    case SUPPORTED_NETWORKS.ETHEREUM:
      return CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.ETHEREUM;
    case SUPPORTED_NETWORKS.ARBITRUM:
      return CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.ARBITRUM;
    case SUPPORTED_NETWORKS.BSC:
      return CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.BSC;
    case SUPPORTED_NETWORKS.FANTOM:
      return CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.FANTOM;
    case SUPPORTED_NETWORKS.MATIC:
      return CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.MATIC;
    case SUPPORTED_NETWORKS.AVALANCHE:
      return CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.AVALANCHE;
    case SUPPORTED_NETWORKS.MOON_RIVER:
      return CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.MOON_RIVER;
    default:
      throw new Error(`Unsupported network: ${network} `);
  }
};

export = {
  SUPPORTED_NETWORKS,
  getPriceFeedsForNetwork: async function getAllPriceFeeds(network: string) {
    try {
      if (!network || !(typeof network === "string")) {
        throw new Error(`Please provide a network type, received ${network}`);
      }
      const networkId = mapNetworkToChainlinkIdentifiers(network);
      const priceFeedPayload = await axios.get<any>(CHAINLINK_DOCS_CONSTANTS.ADDRESSES_ENDPOINT);
      const priceFeedData: ChainlinkPriceFeedApiResponse = priceFeedPayload.data;
      // @ts-ignore
      return priceFeedData[networkId];
    } catch (e) {
      throw new Error(`Failed to fetch ${network} price feeds...[${e}]`);
    }
  },
  getProxiesForNetwork: async function getProxiesForNetwork(network: string) {
    try {
      if (!network || !(typeof network === "string")) {
        throw new Error(`Please provide a network type, received ${network}`);
      }
      const urlForNetwork = mapNetworkToChainlinkIdentifiers(network);
      const priceFeedPayload = await axios.get<any>(CHAINLINK_DOCS_CONSTANTS.ADDRESSES_ENDPOINT);
      const priceFeedData = priceFeedPayload.data;
      const etherumPriceFeeds = priceFeedData[urlForNetwork];
      const foundNetwork = etherumPriceFeeds.networks.find((n: any) => n.name === network);
      if (foundNetwork === undefined) {
        throw new Error(`Could not find ${network} while searching networks`);
      }
      const { proxies } = foundNetwork;
      return proxies;
    } catch (e) {
      throw new Error(`Failed to fetch ${network} proxies...[${e}]`);
    }
  },
};
