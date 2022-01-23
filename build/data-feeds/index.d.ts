declare const _default: {
    SUPPORTED_NETWORKS: {
        ETHEREUM: string;
        AVALANCHE: string;
        MOON_RIVER: string;
        ARBITRUM: string;
        BSC: string;
        FANTOM: string;
        MATIC: string;
    };
    getPriceFeedsForNetwork: (network: string) => Promise<any>;
    getProxiesForNetwork: (network: string) => Promise<any>;
};
export = _default;
