const { withNxMetro } = require('@nx/expo');
const { getDefaultConfig } = require('@expo/metro-config');
const { mergeConfig } = require('metro-config');
const { withNativeWind } = require('nativewind/metro');

module.exports = Promise.resolve(getDefaultConfig(__dirname))
  .then((defaultConfig) => {
    const { assetExts, sourceExts } = defaultConfig.resolver;

    /**
     * Metro configuration
     * https://reactnative.dev/docs/metro
     *
     * @type {import('metro-config').MetroConfig}
     */
    const customConfig = {
      cacheVersion: 'monorepo-nx',
      transformer: {
        babelTransformerPath: require.resolve('react-native-svg-transformer'),
      },
      resolver: {
        assetExts: assetExts.filter((ext) => ext !== 'svg'),
        sourceExts: [...sourceExts, 'cjs', 'mjs', 'svg'],
      },
    };

    return withNxMetro(mergeConfig(defaultConfig, customConfig), {
      // Change this to true to see debugging info.
      // Useful if you have issues resolving modules
      debug: false,
      // all the file extensions used for imports other than 'ts', 'tsx', 'js', 'jsx', 'json'
      extensions: [],
      // Specify folders to watch, in addition to Nx defaults (workspace libraries and node_modules)
      watchFolders: [],
    });
  })
  .then((withNx) => {
    const finalConfig = withNativeWind(withNx, { input: './global.css' });

    return finalConfig;
  });
