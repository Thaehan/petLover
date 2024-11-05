import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ICON_DEFAULT_COLOR = '#000000';
const ICON_DEFAULT_SIZE = 24;
const DEFAULT_HITSLOP = {
  left: 8,
  right: 8,
  top: 8,
  bottom: 8,
};

export type TAppIcon = {
  name: string;
  size?: number;
  color?: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  type?: 'Octicons' | 'MaterialCommunityIcons' | 'Feather' | 'Ionicons';
};

export default function AppIcon({
  name,
  color = ICON_DEFAULT_COLOR,
  size = ICON_DEFAULT_SIZE,
  onPress,
  containerStyle,
  type,
}: TAppIcon) {
  const renderIcon = () => {
    if (type === 'Ionicons') {
      return (
        <Ionicons name={name} size={size} color={color} onPress={onPress} />
      );
    }

    if (type === 'Feather') {
      return (
        <Feather name={name} size={size} color={color} onPress={onPress} />
      );
    }

    if (type === 'Octicons') {
      return (
        <Octicons name={name} size={size} color={color} onPress={onPress} />
      );
    }

    return (
      <MaterialCommunityIcons
        name={name}
        size={size}
        color={color}
        onPress={onPress}
      />
    );
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={containerStyle}
      hitSlop={DEFAULT_HITSLOP}>
      {renderIcon()}
    </TouchableOpacity>
  );
}
