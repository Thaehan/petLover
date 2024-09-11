import {useEffect} from 'react';
import {NativeEventEmitter, NativeModules} from 'react-native';

const {DeviceSetting} = NativeModules;

const COMPASS_EVENT = 'COMPASS_EVENT';
const eventEmitter = new NativeEventEmitter(DeviceSetting);

const startListeningCompass = async () => {
  try {
    await DeviceSetting.startListeningCompass();
    console.log('send');
  } catch (error) {
    console.error(error);
  }
};

const stopListeningCompass = async () => {
  try {
    await DeviceSetting.stopListeningCompass();
    console.log('send');
  } catch (error) {
    console.error(error);
  }
};

const useCompassListener = (callback: (data: any) => void) => {
  useEffect(() => {
    const subscription = eventEmitter.addListener(COMPASS_EVENT, callback);

    return () => {
      eventEmitter.removeAllListeners(COMPASS_EVENT);
      subscription.remove();
    };
  }, []);
};

const DeviceSettingModule = {
  startListeningCompass,
  stopListeningCompass,
  useCompassListener,
};

export default DeviceSettingModule;
