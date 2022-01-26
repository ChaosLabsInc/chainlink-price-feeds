import DataFeedObj from "../data-feeds";
import { FeedPayload, Proxy } from "../types";
const {
  CHAINLINK_DOCS_CONSTANTS,
  SUPPORTED_NETWORKS,
  SUPPORTED_CHAINS,
  getPriceFeedsForNetwork,
  getProxiesForNetwork,
} = DataFeedObj;
jest.setTimeout(30000);

/**
 * PRICE FEEDS FOR NETWORKS
 */

test("Ethereum Data Feeds", async () => {
  const priceFeeds: FeedPayload = await getPriceFeedsForNetwork(SUPPORTED_CHAINS.ETHEREUM);
  expect(priceFeeds).toBeDefined();
  const { title, networks } = priceFeeds;
  expect(title).toBeDefined();
  expect(networks).toBeDefined();
  expect(networks.length).toBeGreaterThanOrEqual(0);
});

test("Arbitrum Data Feeds", async () => {
  const priceFeeds: FeedPayload = await getPriceFeedsForNetwork(SUPPORTED_CHAINS.ARBITRUM);
  expect(priceFeeds).toBeDefined();
  const { title, networks } = priceFeeds;
  expect(title).toBeDefined();
  expect(networks).toBeDefined();
  expect(networks.length).toBeGreaterThanOrEqual(0);
});

test("BSC Data Feeds", async () => {
  const priceFeeds: FeedPayload = await getPriceFeedsForNetwork(SUPPORTED_CHAINS.BSC);
  expect(priceFeeds).toBeDefined();
  const { title, networks } = priceFeeds;
  expect(title).toBeDefined();
  expect(networks).toBeDefined();
  expect(networks.length).toBeGreaterThanOrEqual(0);
});

test("Fantom Data Feeds", async () => {
  const priceFeeds: FeedPayload = await getPriceFeedsForNetwork(SUPPORTED_CHAINS.FANTOM);
  expect(priceFeeds).toBeDefined();
  const { title, networks } = priceFeeds;
  expect(title).toBeDefined();
  expect(networks).toBeDefined();
  expect(networks.length).toBeGreaterThanOrEqual(0);
});

test("Matic Data Feeds", async () => {
  const priceFeeds: FeedPayload = await getPriceFeedsForNetwork(SUPPORTED_CHAINS.MATIC);
  expect(priceFeeds).toBeDefined();
  const { title, networks } = priceFeeds;
  expect(title).toBeDefined();
  expect(networks).toBeDefined();
  expect(networks.length).toBeGreaterThanOrEqual(0);
});

test("Avalanche Data Feeds", async () => {
  const priceFeeds: FeedPayload = await getPriceFeedsForNetwork(SUPPORTED_CHAINS.AVALANCHE);
  expect(priceFeeds).toBeDefined();
  const { title, networks } = priceFeeds;
  expect(title).toBeDefined();
  expect(networks).toBeDefined();
  expect(networks.length).toBeGreaterThanOrEqual(0);
});

test("MoonRiver Data Feeds", async () => {
  const priceFeeds: FeedPayload = await getPriceFeedsForNetwork(SUPPORTED_CHAINS.MOON_RIVER);
  expect(priceFeeds).toBeDefined();
  const { title, networks } = priceFeeds;
  expect(title).toBeDefined();
  expect(networks).toBeDefined();
  expect(networks.length).toBeGreaterThanOrEqual(0);
});

test("Unsupported Data Feeds", async () => {
  try {
    const priceFeeds: FeedPayload = await getPriceFeedsForNetwork("hey there");
    expect(priceFeeds).toBeDefined();
    const { title, networks } = priceFeeds;
    expect(title).toBeDefined();
    expect(networks).toBeDefined();
    expect(networks.length).toBeGreaterThanOrEqual(0);
  } catch (e) {
    let err = e as Error;
    expect(err.message).toContain("Unsupported network");
  }
});

/**
 * PROXIES FOR NETWORKS
 */

test("Ethereum Mainnet Proxies", async () => {
  const proxies: Array<Proxy> = await getProxiesForNetwork(
    CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.ETHEREUM,
    SUPPORTED_NETWORKS.ETHEREUM_MAINNET
  );
  expect(proxies).toBeDefined();
  expect(proxies.length).toBeGreaterThanOrEqual(0);
});

test("Ethereum Kovan Proxies", async () => {
  const proxies: Array<Proxy> = await getProxiesForNetwork(
    CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.ETHEREUM,
    SUPPORTED_NETWORKS.ETHEREUM_KOVAN
  );
  expect(proxies).toBeDefined();
  expect(proxies.length).toBeGreaterThanOrEqual(0);
});

test("Ethereum Rinkeby Proxies", async () => {
  const proxies: Array<Proxy> = await getProxiesForNetwork(
    CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.ETHEREUM,
    SUPPORTED_NETWORKS.ETHEREUM_KOVAN
  );
  expect(proxies).toBeDefined();
  expect(proxies.length).toBeGreaterThanOrEqual(0);
});

test("BSC Mainnet Proxies", async () => {
  const proxies: Array<Proxy> = await getProxiesForNetwork(
    CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.BSC,
    SUPPORTED_NETWORKS.BSC_MAINNET
  );
  expect(proxies).toBeDefined();
  expect(proxies.length).toBeGreaterThanOrEqual(0);
});

test("BSC Testnet Proxies", async () => {
  const proxies: Array<Proxy> = await getProxiesForNetwork(
    CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.BSC,
    SUPPORTED_NETWORKS.BSC_TESTNET
  );
  expect(proxies).toBeDefined();
  expect(proxies.length).toBeGreaterThanOrEqual(0);
});

test("Polygon Mainnet Proxies", async () => {
  const proxies: Array<Proxy> = await getProxiesForNetwork(
    CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.MATIC,
    SUPPORTED_NETWORKS.POLYGON_MAINNET
  );
  expect(proxies).toBeDefined();
  expect(proxies.length).toBeGreaterThanOrEqual(0);
});

test("Polygon Testnet Proxies", async () => {
  const proxies: Array<Proxy> = await getProxiesForNetwork(
    CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.MATIC,
    SUPPORTED_NETWORKS.POLYGON_TESTNET
  );
  expect(proxies).toBeDefined();
  expect(proxies.length).toBeGreaterThanOrEqual(0);
});

test("Avalanche Mainnet Proxies", async () => {
  const proxies: Array<Proxy> = await getProxiesForNetwork(
    CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.AVALANCHE,
    SUPPORTED_NETWORKS.AVALANCHE_MAINNET
  );
  expect(proxies).toBeDefined();
  expect(proxies.length).toBeGreaterThanOrEqual(0);
});

test("Avalanche Testnet Proxies", async () => {
  const proxies: Array<Proxy> = await getProxiesForNetwork(
    CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.AVALANCHE,
    SUPPORTED_NETWORKS.AVALANCHE_TESTNET
  );
  expect(proxies).toBeDefined();
  expect(proxies.length).toBeGreaterThanOrEqual(0);
});

test("Fantom Mainnet Proxies", async () => {
  const proxies: Array<Proxy> = await getProxiesForNetwork(
    CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.FANTOM,
    SUPPORTED_NETWORKS.FANTOM_MAINNET
  );
  expect(proxies).toBeDefined();
  expect(proxies.length).toBeGreaterThanOrEqual(0);
});

test("Fantom Testnet Proxies", async () => {
  const proxies: Array<Proxy> = await getProxiesForNetwork(
    CHAINLINK_DOCS_CONSTANTS.PAYLOAD_KEYS.FANTOM,
    SUPPORTED_NETWORKS.FANTOM_TESTNET
  );
  expect(proxies).toBeDefined();
  expect(proxies.length).toBeGreaterThanOrEqual(0);
});
