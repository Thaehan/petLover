module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-paper/babel',
    'react-native-reanimated/plugin',
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        blacklist: null, // DEPRECATED
        whitelist: null, // DEPRECATED
        safe: false,
        allowUndefined: false,
        verbose: false,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@Components': './src/Components',
          '@Constants': './src/Constants',
          '@Store': './src/Store',
          '@Screens': './src/Screens',
          '@Theme': './src/Theme',
          '@Utils': './src/Utils',
          '@Api': './src/Api',
          '@Assets': './src/Assets',
          '@Navigations': './src/Navigations',
          '@Translations': './src/Translations',
          '@Hooks': './src/Hooks',
        },
      },
    ],
  ],
};
