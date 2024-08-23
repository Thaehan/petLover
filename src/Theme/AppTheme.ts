import {MD3LightTheme as DefaultTheme} from 'react-native-paper';
import {ThemeProp} from 'react-native-paper/lib/typescript/types';

export const APP_THEME: ThemeProp = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};
