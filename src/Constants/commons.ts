import {Dimensions, Platform} from 'react-native';

const {height, width} = Dimensions.get('screen');

export const DATE_FORMAT = 'DD/MM/YYYY';
export const DATE_WITH_TIME_FORMAT = 'DD/MM/YYYY';

export const DEFAULT_DEBOUNCE_TIME = 500;
export const DEFAULT_INTERVAL_TIME = 1000;

export const DEVICE_PLATFORM = Platform.OS;
export const DEVICE_WIDTH = width;
export const DEVICE_HEIGHT = height;
export const DESIGN_WIDTH = 428;
export const DESIGN_HEIGHT = 926;
export const DIMENSION_OFFSET =
  (height / DESIGN_HEIGHT + width / DESIGN_WIDTH) / 2;
