"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const axios_1 = __importDefault(require("axios"));
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
const mapNetworkToChainlinkIdentifiers = (network) => {
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
module.exports = {
    SUPPORTED_NETWORKS,
    getPriceFeedsForNetwork: function getAllPriceFeeds(network) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!network || !(typeof network === "string")) {
                    throw new Error(`Please provide a network type, received ${network}`);
                }
                const networkId = mapNetworkToChainlinkIdentifiers(network);
                const priceFeedPayload = yield axios_1.default.get(CHAINLINK_DOCS_CONSTANTS.ADDRESSES_ENDPOINT);
                const priceFeedData = priceFeedPayload.data;
                // @ts-ignore
                return priceFeedData[networkId];
            }
            catch (e) {
                throw new Error(`Failed to fetch ${network} price feeds...[${e}]`);
            }
        });
    },
    getProxiesForNetwork: function getProxiesForNetwork(network) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!network || !(typeof network === "string")) {
                    throw new Error(`Please provide a network type, received ${network}`);
                }
                const urlForNetwork = mapNetworkToChainlinkIdentifiers(network);
                const priceFeedPayload = yield axios_1.default.get(CHAINLINK_DOCS_CONSTANTS.ADDRESSES_ENDPOINT);
                const priceFeedData = priceFeedPayload.data;
                const etherumPriceFeeds = priceFeedData[urlForNetwork];
                const foundNetwork = etherumPriceFeeds.networks.find((n) => n.name === network);
                if (foundNetwork === undefined) {
                    throw new Error(`Could not find ${network} while searching networks`);
                }
                const { proxies } = foundNetwork;
                return proxies;
            }
            catch (e) {
                throw new Error(`Failed to fetch ${network} proxies...[${e}]`);
            }
        });
    },
};
//# sourceMappingURL=index.js.map