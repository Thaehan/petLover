import {useEffect} from 'react';
import {NativeEventEmitter, NativeModules} from 'react-native';

const {DeviceSetting} = NativeModules;

const COMPASS_EVENT = 'COMPASS_EVENT';

const startListeningCompass = async () => {
  try {
    await DeviceSetting.startListeningCompass();
  } catch (error) {
    console.error(error);
  }
};

const stopListeningCompass = async () => {
  try {
    await DeviceSetting.stopListeningCompass();
  } catch (error) {
    console.error(error);
  }
};

const useCompassListener = (callback: (data: any) => void) => {
  const eventEmitter = new NativeEventEmitter(DeviceSetting);

  useEffect(() => {
    const subscription = eventEmitter.addListener(COMPASS_EVENT, callback);

    return () => {
      subscription.remove();
      eventEmitter.removeAllListeners(COMPASS_EVENT);
    };
  }, []);
};

const DeviceSettingModule = {
  startListeningCompass,
  stopListeningCompass,
  useCompassListener,
};

export default DeviceSettingModule;
