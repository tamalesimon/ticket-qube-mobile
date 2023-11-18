module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "module:react-native-dotenv",
      "react-native-reanimated/plugin",
      ["babel-plugin-root-import", {
        "rootPathSuffix": "./",
        "rootPathPrefix": "~/"
      }],
      require.resolve("expo-router/babel"),
    ],
  };
};
