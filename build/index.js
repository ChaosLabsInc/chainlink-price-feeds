"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const data_feeds_1 = __importDefault(require("./data-feeds"));
module.exports = {
    SUPPORTED_NETWORKS: data_feeds_1.default.SUPPORTED_NETWORKS,
    getPriceFeedsForNetwork: data_feeds_1.default.getPriceFeedsForNetwork,
    getProxiesForNetwork: data_feeds_1.default.getProxiesForNetwork,
};
//# sourceMappingURL=index.js.map