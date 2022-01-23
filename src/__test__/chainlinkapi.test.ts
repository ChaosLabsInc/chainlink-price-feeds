import DataFeedObj from "../data-feeds";
import { FeedPayload } from "../types";
const { SUPPORTED_NETWORKS, getPriceFeedsForNetwork } = DataFeedObj;
jest.setTimeout(30000);

test("Ethereum Data Feeds", async () => {
  const priceFeeds: FeedPayload = await getPriceFeedsForNetwork(SUPPORTED_NETWORKS.ETHEREUM);
  expect(priceFeeds).toBeDefined();
  const { title, networks } = priceFeeds;
  expect(title).toBeDefined();
  expect(networks).toBeDefined();
  expect(networks.length).toBeGreaterThanOrEqual(0);
});

test("Arbitrum Data Feeds", async () => {
  const priceFeeds: FeedPayload = await getPriceFeedsForNetwork(SUPPORTED_NETWORKS.ARBITRUM);
  expect(priceFeeds).toBeDefined();
  const { title, networks } = priceFeeds;
  expect(title).toBeDefined();
  expect(networks).toBeDefined();
  expect(networks.length).toBeGreaterThanOrEqual(0);
});

test("BSC Data Feeds", async () => {
  const priceFeeds: FeedPayload = await getPriceFeedsForNetwork(SUPPORTED_NETWORKS.BSC);
  expect(priceFeeds).toBeDefined();
  const { title, networks } = priceFeeds;
  expect(title).toBeDefined();
  expect(networks).toBeDefined();
  expect(networks.length).toBeGreaterThanOrEqual(0);
});

test("Fantom Data Feeds", async () => {
  const priceFeeds: FeedPayload = await getPriceFeedsForNetwork(SUPPORTED_NETWORKS.FANTOM);
  expect(priceFeeds).toBeDefined();
  const { title, networks } = priceFeeds;
  expect(title).toBeDefined();
  expect(networks).toBeDefined();
  expect(networks.length).toBeGreaterThanOrEqual(0);
});

test("Matic Data Feeds", async () => {
  const priceFeeds: FeedPayload = await getPriceFeedsForNetwork(SUPPORTED_NETWORKS.MATIC);
  expect(priceFeeds).toBeDefined();
  const { title, networks } = priceFeeds;
  expect(title).toBeDefined();
  expect(networks).toBeDefined();
  expect(networks.length).toBeGreaterThanOrEqual(0);
});

test("Avalanche Data Feeds", async () => {
  const priceFeeds: FeedPayload = await getPriceFeedsForNetwork(SUPPORTED_NETWORKS.AVALANCHE);
  expect(priceFeeds).toBeDefined();
  const { title, networks } = priceFeeds;
  expect(title).toBeDefined();
  expect(networks).toBeDefined();
  expect(networks.length).toBeGreaterThanOrEqual(0);
});

test("MoonRiver Data Feeds", async () => {
  const priceFeeds: FeedPayload = await getPriceFeedsForNetwork(SUPPORTED_NETWORKS.MOON_RIVER);
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
