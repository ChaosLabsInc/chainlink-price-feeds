export declare type Proxy = {
    pair: string;
    deviationThreshold: number;
    heartbeat: string;
    decimals: number;
    proxy: string;
};
export declare type Network = {
    name: string;
    url: string;
    proxies: Array<Proxy>;
};
export declare type FeedPayload = {
    title: string;
    networks: Array<Network>;
};
export declare type ChainlinkPriceFeedApiResponse = {
    "ethereum-addresses": FeedPayload;
    "binance-smart-chain-addresses-price": FeedPayload;
    "matic-addresses": FeedPayload;
    "avalanche-price-feeds": FeedPayload;
    "fantom-price-feeds": FeedPayload;
    "arbitrum-price-feeds": FeedPayload;
    "data-feeds-moonriver": FeedPayload;
};
export declare type EthereumNetworkType = "Mainnet" | "Kovan" | "Rinkeby";
