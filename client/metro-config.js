// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig();
  return {
    ...defaultConfig,
    resolver: {
      sourceExts: [
        ...defaultConfig.resolver.sourceExts,
        "jsx",
        "js",
        "ts",
        "tsx",
      ],
    },
  };
})();
