const MODULE_RESOLVER = [
  'module-resolver',
  {
    root: ['./src'],
    extensions: ['.js', '.ios.js', '.android.js', '.json', '.tsx', '.ts'],
    alias: {
      config: './src/config',
      screens: './src/screens',
      navigation: './src/navigation',
      components: './src/components',
      styles: './src/styles',
      hooks: './src/hooks',
      utils: './src/utils',
      constant: './src/constant',
    },
  },
];

const MODULE_CONFIG = [
  'module:react-native-dotenv',
  {
    moduleName: '@env',
    path: '.env',
    safe: true,
    allowUndefined: true,
  },
];

module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [MODULE_RESOLVER, MODULE_CONFIG],
  };
};
