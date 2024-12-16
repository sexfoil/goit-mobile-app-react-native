const { getDefaultConfig } = require("@expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.sourceExts.push("js", "json", "ts", "tsx", "cjs");

module.exports = defaultConfig;
