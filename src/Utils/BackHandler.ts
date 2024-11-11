import {useFocusEffect} from '@react-navigation/native';
import {NativeModules, BackHandler} from 'react-native';

const {BackHandlerNative} = NativeModules;

export const useBackHandlerExit = () => {
  useFocusEffect(() => {
    const backAction = () => {
      BackHandlerNative?.handleBackPress('Bấm quay lại lần nữa để thoát');
      return true;
    };

    const onBlur = () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };

    const onFocus = () => {
      BackHandler.addEventListener('hardwareBackPress', backAction);
    };

    onFocus();
    return () => {
      onBlur();
    };
  });
};
