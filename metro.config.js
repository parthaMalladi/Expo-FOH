const { getDefaultConfig } = require("expo/metro-config");
const { withNativewind } = require("nativewind/metro");
 
/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// 1. Pull out the current transformer and resolver from the base config
const { transformer, resolver } = config;

// 2. Configure the SVG transformer
config.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
};

// 3. Update the resolver to manage .svg extensions correctly
config.resolver = {
  ...resolver,
  assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
  sourceExts: [...resolver.sourceExts, "svg"],
};
 
// 4. Finally, wrap the fully modified config with NativeWind
module.exports = withNativewind(config);