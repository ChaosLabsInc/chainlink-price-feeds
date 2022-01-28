declare const _default: {
    CHAINLINK_DOCS_CONSTANTS: {
        ADDRESSES_ENDPOINT: string;
        ETHEREUM_NETWORKS: {
            MAINNET: string;
            KOVAN: string;
            RINKEBY: string;
        };
        PAYLOAD_KEYS: {
            AVALANCHE: string;
            ARBITRUM: string;
            ETHEREUM: string;
            BSC: string;
            FANTOM: string;
            MATIC: string;
            MOON_RIVER: string;
        };
    };
    SUPPORTED_CHAINS: {
        ETHEREUM: string;
        AVALANCHE: string;
        MOON_RIVER: string;
        ARBITRUM: string;
        BSC: string;
        FANTOM: string;
        MATIC: string;
    };
    SUPPORTED_NETWORKS: {
        ETHEREUM_MAINNET: string;
        ETHEREUM_KOVAN: string;
        ETHEREUM_RINKEBY: string;
        BSC_MAINNET: string;
        BSC_TESTNET: string;
        POLYGON_MAINNET: string;
        POLYGON_TESTNET: string;
        AVALANCHE_MAINNET: string;
        AVALANCHE_TESTNET: string;
        FANTOM_MAINNET: string;
        FANTOM_TESTNET: string;
    };
    getPriceFeedsForNetwork: (network: string) => Promise<import("./types").FeedPayload>;
    getProxiesForNetwork: (blockchain: string, network: string) => Promise<import("./types").Proxy[]>;
};
export = _default;
