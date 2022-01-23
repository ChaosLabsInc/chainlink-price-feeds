export type Proxy = {
  pair: string;
  deviationThreshold: number;
  heartbeat: string;
  decimals: number;
  proxy: string;
};

export type Network = {
  name: string;
  url: string;
  proxies: Array<Proxy>;
};

export type FeedPayload = {
  title: string;
  networks: Array<Network>;
};

export type ChainlinkPriceFeedApiResponse = {
  "ethereum-addresses": FeedPayload;
  "binance-smart-chain-addresses-price": FeedPayload;
  "matic-addresses": FeedPayload;
  "avalanche-price-feeds": FeedPayload;
  "fantom-price-feeds": FeedPayload;
  "arbitrum-price-feeds": FeedPayload;
  "data-feeds-moonriver": FeedPayload;
};

export type EthereumNetworkType = "Mainnet" | "Kovan" | "Rinkeby";
