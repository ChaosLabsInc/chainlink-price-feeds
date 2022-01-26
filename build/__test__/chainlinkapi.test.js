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
Object.defineProperty(exports, "__esModule", { value: true });
const data_feeds_1 = __importDefault(require("../data-feeds"));
const { CHAINLINK_DOCS_CONSTANTS, SUPPORTED_NETWORKS, SUPPORTED_CHAINS, getPriceFeedsForNetwork, getProxiesForNetwork, } = data_feeds_1.default;
jest.setTimeout(30000);
/**
 * PRICE FEEDS FOR NETWORKS
 */
test("Ethereum Data Feeds", () => __awaiter(void 0, void 0, void 0, function* () {
    const priceFeeds = yield getPriceFeedsForNetwork(SUPPORTED_CHAINS.ETHEREUM);
    expect(priceFeeds).toBeDefined();
    const { title, networks } = priceFeeds;
    expect(title).toBeDefined();
    expect(networks).toBeDefined();
    expect(networks.length).toBeGreaterThanOrEqual(0);
}));
test("Arbitrum Data Feeds", () => __awaiter(void 0, void 0, void 0, function* () {
    const priceFeeds = yield getPriceFeedsForNetwork(SUPPORTED_CHAINS.ARBITRUM);
    expect(priceFeeds).toBeDefined();
    const { title, networks } = priceFeeds;
    expect(title).toBeDefined();
    expect(networks).toBeDefined();
    expect(networks.length).toBeGreaterThanOrEqual(0);
}));
test("BSC Data Feeds", () => __awaiter(void 0, void 0, void 0, function* () {
    const priceFeeds = yield getPriceFeedsForNetwork(SUPPORTED_CHAINS.BSC);
    expect(priceFeeds).toBeDefined();
    const { title, networks } = priceFeeds;
    expect(title).toBeDefined();
    expect(networks).toBeDefined();
    expect(networks.length).toBeGreaterThanOrEqual(0);
}));
test("Fantom Data Feeds", () => __awaiter(void 0, void 0, void 0, function* () {
    const priceFeeds = yield getPriceFeedsForNetwork(SUPPORTED_CHAINS.FANTOM);
    expect(priceFeeds).toBeDefined();
    const { title, networks } = priceFeeds;
    expect(title).toBeDefined();
    expect(networks).toBeDefined();
    expect(networks.length).toBeGreaterThanOrEqual(0);
}));
test("Matic Data Feeds", () => __awaiter(void 0, void 0, void 0, function* () {
    const priceFeeds = yield getPriceFeedsForNetwork(SUPPORTED_CHAINS.MATIC);
    expect(priceFeeds).toBeDefined();
    const { title, networks } = priceFeeds;
    expect(title).toBeDefined();
    expect(networks).toBeDefined();
    expect(networks.length).toBeGreaterThanOrEqual(0);
}));
test("Avalanche Data Feeds", () => __awaiter(void 0, void 0, void 0, function* () {
    const priceFeeds = yield getPriceFeedsForNetwork(SUPPORTED_CHAINS.AVALANCHE);
    expect(priceFeeds).toBeDefined();
    const { title, networks } = priceFeeds;
    expect(title).toBeDefined();
    expect(networks).toBeDefined();
    expect(networks.length).toBeGreaterThanOrEqual(0);
}));
test("MoonRiver Data Feeds", () => __awaiter(void 0, void 0, void 0, function* () {
    const priceFeeds = yield getPriceFeedsForNetwork(SUPPORTED_CHAINS.MOON_RIVER);
    expect(priceFeeds).toBeDefined();
    const { title, networks } = priceFeeds;
    expect(title).toBeDefined();
    expect(networks).toBeDefined();
    expect(networks.length).toBeGreaterThanOrEqual(0);
}));
test("Unsupported Data Feeds", () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const priceFeeds = yield getPriceFeedsForNetwork("hey there");
        expect(priceFeeds).toBeDefined();
        const { title, networks } = priceFeeds;
        expect(title).toBeDefined();
        expect(networks).toBeDefined();
        expect(networks.length).toBeGreaterThanOrEqual(0);
    }
    catch (e) {
        let err = e;
        expect(err.message).toContain("Unsupported network");
    }
}));
/**
 * PROXIES FOR NETWORKS
 */
test("Ethereum Mainnet Proxies", () => __awaiter(void 0, void 0, void 0, function* () {
    const proxies = yield getProxiesForNetwork(CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.ETHEREUM, SUPPORTED_NETWORKS.ETHEREUM_MAINNET);
    expect(proxies).toBeDefined();
    expect(proxies.length).toBeGreaterThanOrEqual(0);
}));
test("Ethereum Kovan Proxies", () => __awaiter(void 0, void 0, void 0, function* () {
    const proxies = yield getProxiesForNetwork(CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.ETHEREUM, SUPPORTED_NETWORKS.ETHEREUM_KOVAN);
    expect(proxies).toBeDefined();
    expect(proxies.length).toBeGreaterThanOrEqual(0);
}));
test("Ethereum Rinkeby Proxies", () => __awaiter(void 0, void 0, void 0, function* () {
    const proxies = yield getProxiesForNetwork(CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.ETHEREUM, SUPPORTED_NETWORKS.ETHEREUM_KOVAN);
    expect(proxies).toBeDefined();
    expect(proxies.length).toBeGreaterThanOrEqual(0);
}));
test("BSC Mainnet Proxies", () => __awaiter(void 0, void 0, void 0, function* () {
    const proxies = yield getProxiesForNetwork(CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.BSC, SUPPORTED_NETWORKS.BSC_MAINNET);
    expect(proxies).toBeDefined();
    expect(proxies.length).toBeGreaterThanOrEqual(0);
}));
test("BSC Testnet Proxies", () => __awaiter(void 0, void 0, void 0, function* () {
    const proxies = yield getProxiesForNetwork(CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.BSC, SUPPORTED_NETWORKS.BSC_TESTNET);
    expect(proxies).toBeDefined();
    expect(proxies.length).toBeGreaterThanOrEqual(0);
}));
test("Polygon Mainnet Proxies", () => __awaiter(void 0, void 0, void 0, function* () {
    const proxies = yield getProxiesForNetwork(CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.MATIC, SUPPORTED_NETWORKS.POLYGON_MAINNET);
    expect(proxies).toBeDefined();
    expect(proxies.length).toBeGreaterThanOrEqual(0);
}));
test("Polygon Testnet Proxies", () => __awaiter(void 0, void 0, void 0, function* () {
    const proxies = yield getProxiesForNetwork(CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.MATIC, SUPPORTED_NETWORKS.POLYGON_TESTNET);
    expect(proxies).toBeDefined();
    expect(proxies.length).toBeGreaterThanOrEqual(0);
}));
test("Avalanche Mainnet Proxies", () => __awaiter(void 0, void 0, void 0, function* () {
    const proxies = yield getProxiesForNetwork(CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.AVALANCHE, SUPPORTED_NETWORKS.AVALANCHE_MAINNET);
    expect(proxies).toBeDefined();
    expect(proxies.length).toBeGreaterThanOrEqual(0);
}));
test("Avalanche Testnet Proxies", () => __awaiter(void 0, void 0, void 0, function* () {
    const proxies = yield getProxiesForNetwork(CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.AVALANCHE, SUPPORTED_NETWORKS.AVALANCHE_TESTNET);
    expect(proxies).toBeDefined();
    expect(proxies.length).toBeGreaterThanOrEqual(0);
}));
test("Fantom Mainnet Proxies", () => __awaiter(void 0, void 0, void 0, function* () {
    const proxies = yield getProxiesForNetwork(CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.FANTOM, SUPPORTED_NETWORKS.FANTOM_MAINNET);
    expect(proxies).toBeDefined();
    expect(proxies.length).toBeGreaterThanOrEqual(0);
}));
test("Fantom Testnet Proxies", () => __awaiter(void 0, void 0, void 0, function* () {
    const proxies = yield getProxiesForNetwork(CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.FANTOM, SUPPORTED_NETWORKS.FANTOM_TESTNET);
    expect(proxies).toBeDefined();
    expect(proxies.length).toBeGreaterThanOrEqual(0);
}));
//# sourceMappingURL=chainlinkapi.test.js.map