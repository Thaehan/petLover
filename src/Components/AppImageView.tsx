import {
  View,
  StyleSheet,
  Image,
  Modal,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import React, {forwardRef, useImperativeHandle, useState} from 'react';

import AppIcon from './AppIcon';

export type TAppImageViewProps = {
  image: ImageSourcePropType;
};

export type TAppImageViewRef = {
  openImage: (imageUri?: string) => void;
  closeImage: () => void;
};

export default forwardRef<TAppImageViewRef, TAppImageViewProps>(
  function AppImageView({image}, ref) {
    const [isVisible, setIsVisible] = useState(false);

    const openImage = () => {
      if (!image) {
        setIsVisible(true);
        return;
      }
      setIsVisible(true);
    };

    const closeImage = () => {
      setIsVisible(false);
    };

    useImperativeHandle(ref, () => {
      return {
        openImage,
        closeImage,
      };
    });

    return (
      <View style={styles.container}>
        <Modal visible={isVisible} transparent={true} animationType="fade">
          <TouchableOpacity
            style={styles.modalContainer}
            onPress={closeImage}
            activeOpacity={1}
          />
          <View style={styles.absoluteView}>
            <Image
              source={image}
              style={styles.fullscreenImage}
              resizeMode="contain"
            />
            <AppIcon
              color={'white'}
              size={24}
              onPress={closeImage}
              type="Octicons"
              name={'x'}
              containerStyle={styles.closeButton}
            />
          </View>
        </Modal>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {},
  thumbnail: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 8,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  absoluteView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: '100%',
    width: '100%',
  },
  closeButton: {
    position: 'absolute',
    right: '8%',
    top: '32%',
    backgroundColor: '#73777A',
    borderRadius: 100,
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullscreenImage: {
    width: '90%',
    height: '40%',
    position: 'relative',
  },
});
