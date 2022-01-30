![image](https://user-images.githubusercontent.com/8246234/151700529-02ad870f-8180-4c3f-9000-398118baf218.png)

# Chainlink Price Feeds

A simple package for fetching Chainlink price feeds for various networks. This package currently supports the following networks:

- Ethereum
- Avalanche
- MoonRiver
- Arbitrum
- Binance Smart Chain
- Fantom
- Matic

## Installation

`npm i @chaos-labs/chainlink-price-feeds`

## API

This module exposes 3 objects:

**SUPPORTED_NETWORKS**

```js
const SUPPORTED_NETWORKS = {
  ETHEREUM: "ethereum",
  AVALANCHE: "avalanche",
  MOON_RIVER: "moon_river",
  ARBITRUM: "arbitrum",
  BSC: "bsc",
  FANTOM: "fantom",
  MATIC: "matic",
};
```

**getPriceFeedsForNetwork(network: string)**

Returns the following values for each supported network. Please pass the network param from `SUPPORTED_NETWORKS`. Exampe payload:

```json
{
    "ethereum-addresses": {
        "title": "Ethereum Data Feeds",
        "networks": [
            {
                "name": "Ethereum Mainnet",
                "url": "https://etherscan.io/address/%s",
                "proxies": [
                    {
                        "pair": "1INCH / ETH",
                        "deviationThreshold": 2,
                        "heartbeat": "24h",
                        "decimals": 18,
                        "proxy": "0x72AFAECF99C9d9C8215fF44C77B94B99C28741e8"
                    },
                    {
                        "pair": "1INCH / USD",
                        "deviationThreshold": 1,
                        "heartbeat": "24h",
                        "decimals": 8,
                        "proxy": "0xc929ad75B72593967DE83E7F7Cda0493458261D9"
                    },
                    ...
                ]
            }
        ]
    },
    "matic-addresses": {
        "title": "Polygon (Matic) Data Feeds",
        "networks": [
            {
                "name": "Polygon Mainnet",
                "url": "https://polygonscan.com/address/%s",
                "proxies": [
                    {
                        "pair": "1INCH / ETH",
                        "deviationThreshold": 2,
                        "heartbeat": "24h",
                        "decimals": 18,
                        "proxy": "0x72AFAECF99C9d9C8215fF44C77B94B99C28741e8"
                    },
                    {
                        "pair": "1INCH / USD",
                        "deviationThreshold": 1,
                        "heartbeat": "24h",
                        "decimals": 8,
                        "proxy": "0xc929ad75B72593967DE83E7F7Cda0493458261D9"
                    },
                    ...
                ]
            },
            {
                "name": "Mumbai Testnet",
                "url": "https://mumbai.polygonscan.com/address/%s",
                "proxies": [...],
            }
        ],
    }
```

**getProxiesForNetwork()**

Returns the proxy addresses for each pair for a given network.

```json
[
    {
        "pair": "1INCH / ETH",
        "deviationThreshold": 2,
        "heartbeat": "24h",
        "decimals": 18,
        "proxy": "0x72AFAECF99C9d9C8215fF44C77B94B99C28741e8"
    },
    {
        "pair": "1INCH / USD",
        "deviationThreshold": 1,
        "heartbeat": "24h",
        "decimals": 8,
        "proxy": "0xc929ad75B72593967DE83E7F7Cda0493458261D9"
    },
    {
        "pair": "AAPL / USD",
        "deviationThreshold": 0.5,
        "heartbeat": "24h",
        "decimals": 8,
        "proxy": "0x139C8512Cde1778e9b9a8e721ce1aEbd4dD43587"
    },
    {
        "pair": "AAVE / ETH",
        "deviationThreshold": 2,
        "heartbeat": "24h",
        "decimals": 18,
        "proxy": "0x6Df09E975c830ECae5bd4eD9d90f3A95a4f88012"
    },
    ...
]
```
