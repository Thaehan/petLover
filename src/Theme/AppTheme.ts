import {MD3LightTheme as DefaultTheme} from 'react-native-paper';
import {ThemeProp} from 'react-native-paper/lib/typescript/types';

import {DIMENSION_OFFSET} from '@Constants/commons';

export const getCurrentSize = (px: number) => {
  return px * DIMENSION_OFFSET;
};

export const APP_THEME: ThemeProp = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

export const FONT_SIZE = {
  // 8
  xss: getCurrentSize(8),
  // 10
  xs: getCurrentSize(10),
  // 1
  sm: getCurrentSize(11),
  // 12
  md: getCurrentSize(12),
  // 14
  lg: getCurrentSize(14),
  // 16
  xl: getCurrentSize(16),
  // 20
  xxl: getCurrentSize(20),
};

export const PADDING_SIZE = {
  // 2
  xs: getCurrentSize(2),
  // 4
  sm: getCurrentSize(4),
  // 8
  md: getCurrentSize(8),
  // 12
  lg: getCurrentSize(12),
  // 16
  xl: getCurrentSize(16),
};

export const BORDER = {
  default: getCurrentSize(8),
  circle: getCurrentSize(100),
  width: getCurrentSize(1),
};
