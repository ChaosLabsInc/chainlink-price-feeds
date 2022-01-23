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
const { SUPPORTED_NETWORKS, getPriceFeedsForNetwork } = data_feeds_1.default;
jest.setTimeout(30000);
test("Ethereum Data Feeds", () => __awaiter(void 0, void 0, void 0, function* () {
    const priceFeeds = yield getPriceFeedsForNetwork(SUPPORTED_NETWORKS.ETHEREUM);
    expect(priceFeeds).toBeDefined();
    const { title, networks } = priceFeeds;
    expect(title).toBeDefined();
    expect(networks).toBeDefined();
    expect(networks.length).toBeGreaterThanOrEqual(0);
}));
test("Arbitrum Data Feeds", () => __awaiter(void 0, void 0, void 0, function* () {
    const priceFeeds = yield getPriceFeedsForNetwork(SUPPORTED_NETWORKS.ARBITRUM);
    expect(priceFeeds).toBeDefined();
    const { title, networks } = priceFeeds;
    expect(title).toBeDefined();
    expect(networks).toBeDefined();
    expect(networks.length).toBeGreaterThanOrEqual(0);
}));
test("BSC Data Feeds", () => __awaiter(void 0, void 0, void 0, function* () {
    const priceFeeds = yield getPriceFeedsForNetwork(SUPPORTED_NETWORKS.BSC);
    expect(priceFeeds).toBeDefined();
    const { title, networks } = priceFeeds;
    expect(title).toBeDefined();
    expect(networks).toBeDefined();
    expect(networks.length).toBeGreaterThanOrEqual(0);
}));
test("Fantom Data Feeds", () => __awaiter(void 0, void 0, void 0, function* () {
    const priceFeeds = yield getPriceFeedsForNetwork(SUPPORTED_NETWORKS.FANTOM);
    expect(priceFeeds).toBeDefined();
    const { title, networks } = priceFeeds;
    expect(title).toBeDefined();
    expect(networks).toBeDefined();
    expect(networks.length).toBeGreaterThanOrEqual(0);
}));
test("Matic Data Feeds", () => __awaiter(void 0, void 0, void 0, function* () {
    const priceFeeds = yield getPriceFeedsForNetwork(SUPPORTED_NETWORKS.MATIC);
    expect(priceFeeds).toBeDefined();
    const { title, networks } = priceFeeds;
    expect(title).toBeDefined();
    expect(networks).toBeDefined();
    expect(networks.length).toBeGreaterThanOrEqual(0);
}));
test("Avalanche Data Feeds", () => __awaiter(void 0, void 0, void 0, function* () {
    const priceFeeds = yield getPriceFeedsForNetwork(SUPPORTED_NETWORKS.AVALANCHE);
    expect(priceFeeds).toBeDefined();
    const { title, networks } = priceFeeds;
    expect(title).toBeDefined();
    expect(networks).toBeDefined();
    expect(networks.length).toBeGreaterThanOrEqual(0);
}));
test("MoonRiver Data Feeds", () => __awaiter(void 0, void 0, void 0, function* () {
    const priceFeeds = yield getPriceFeedsForNetwork(SUPPORTED_NETWORKS.MOON_RIVER);
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
//# sourceMappingURL=chainlinkapi.test.js.map