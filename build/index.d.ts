declare const _default: {
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
    getPriceFeedsForNetwork: (network: string) => Promise<any>;
    getProxiesForNetwork: (blockchain: string, network: string) => Promise<any>;
};
export = _default;
