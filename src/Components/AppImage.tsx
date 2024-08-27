import React from 'react';
import FastImage, {FastImageProps, ResizeMode} from 'react-native-fast-image';

type TAppImageProps = FastImageProps & {};

export const RESIZE_MODE: Record<ResizeMode, ResizeMode> = {
  center: 'center',
  contain: 'contain',
  cover: 'cover',
  stretch: 'stretch',
};

export function AppImage({...rest}: TAppImageProps) {
  return <FastImage {...rest} />;
}
