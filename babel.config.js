module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // keep reanimated plugin at the end.
    'react-native-reanimated/plugin',
  ],
};
