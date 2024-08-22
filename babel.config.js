module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-paper/babel',
    'react-native-reanimated/plugin',
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
          '@Assets': './src/assets',
        },
      },
    ],
  ],
};
