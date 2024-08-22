import {MMKVLoader} from 'react-native-mmkv-storage';

const MMKV_ID = 'REDUX-STORAGE';

const mmkvStorage = new MMKVLoader().withInstanceID(MMKV_ID).initialize();

export default mmkvStorage;
