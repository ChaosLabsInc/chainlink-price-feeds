import axios from "axios";

import type { ChainlinkPriceFeedApiResponse, Proxy, FeedPayload } from "../types";

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

const SUPPORTED_CHAINS = {
  ETHEREUM: "ethereum",
  AVALANCHE: "avalanche",
  MOON_RIVER: "moon_river",
  ARBITRUM: "arbitrum",
  BSC: "bsc",
  FANTOM: "fantom",
  MATIC: "matic",
};

const SUPPORTED_NETWORKS = {
  ETHEREUM_MAINNET: "Ethereum Mainnet",
  ETHEREUM_KOVAN: "Kovan Testnet",
  ETHEREUM_RINKEBY: "Rinkeby Testnet",
  BSC_MAINNET: "BSC Mainnet",
  BSC_TESTNET: "BSC Testnet",
  POLYGON_MAINNET: "Polygon Mainnet",
  POLYGON_TESTNET: "Mumbai Testnet",
  AVALANCHE_MAINNET: "Avalanche Mainnet",
  AVALANCHE_TESTNET: "Avalanche Testnet",
  FANTOM_MAINNET: "Fantom Mainnet",
  FANTOM_TESTNET: "Fantom Testnet",
};

const mapNetworkToChainlinkIdentifiers = (network: string) => {
  switch (network) {
    case SUPPORTED_CHAINS.ETHEREUM:
      return CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.ETHEREUM;
    case SUPPORTED_CHAINS.ARBITRUM:
      return CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.ARBITRUM;
    case SUPPORTED_CHAINS.BSC:
      return CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.BSC;
    case SUPPORTED_CHAINS.FANTOM:
      return CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.FANTOM;
    case SUPPORTED_CHAINS.MATIC:
      return CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.MATIC;
    case SUPPORTED_CHAINS.AVALANCHE:
      return CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.AVALANCHE;
    case SUPPORTED_CHAINS.MOON_RIVER:
      return CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.MOON_RIVER;
    default:
      throw new Error(`Unsupported network: ${network} `);
  }
};

export = {
  CHAINLINK_DOCS_CONSTANTS,
  SUPPORTED_NETWORKS,
  SUPPORTED_CHAINS,
  getPriceFeedsForNetwork: async function getAllPriceFeeds(network: string): Promise<FeedPayload> {
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
  getProxiesForNetwork: async function getProxiesForNetwork(
    blockchain: string,
    network: string
  ): Promise<Array<Proxy>> {
    try {
      if (!network || !(typeof network === "string") || !blockchain || !(typeof blockchain === "string")) {
        throw new Error(`Please provide a blockchain and network type, received ${blockchain} and network ${network}`);
      }
      const priceFeedPayload = await axios.get<any>(CHAINLINK_DOCS_CONSTANTS.ADDRESSES_ENDPOINT);
      const priceFeedData = priceFeedPayload.data;
      const priceFeeds = priceFeedData[blockchain];
      const foundNetwork = priceFeeds.networks.find((n: any) => {
        return n.name === network;
      });
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
