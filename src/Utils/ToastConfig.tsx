// toastConfig.ts
import React from 'react';
import {StyleSheet} from 'react-native';
import {
  BaseToast,
  ErrorToast,
  ToastConfig,
  ToastProps,
} from 'react-native-toast-message';

// Custom success toast style
const CustomSuccessToast = (props: ToastProps) => (
  <BaseToast
    {...props}
    style={styles.successToast}
    contentContainerStyle={styles.contentContainer}
    text1Style={styles.text1}
    text2Style={styles.text2}
  />
);

// Custom error toast style
const CustomErrorToast = (props: ToastProps) => (
  <ErrorToast
    {...props}
    style={styles.errorToast}
    contentContainerStyle={styles.contentContainer}
    text1Style={styles.text1}
    text2Style={styles.text2}
  />
);

const CustomInfoToast = (props: ToastProps) => (
  <ErrorToast
    {...props}
    style={styles.infoToast}
    contentContainerStyle={styles.contentContainer}
    text1Style={styles.text1}
    text2Style={styles.text2}
  />
);

const TOAST_CONFIG: ToastConfig = {
  success: props => <CustomSuccessToast {...props} />,
  error: props => <CustomErrorToast {...props} />,
  info: props => <CustomInfoToast {...props} />,
};

const styles = StyleSheet.create({
  infoToast: {
    backgroundColor: '#00000080',
    borderRadius: 10,
    borderLeftWidth: 0,
    elevation: 0,
    bottom: 20,
  },
  successToast: {
    backgroundColor: '#00000080',
    borderRadius: 10,
    borderLeftWidth: 0,
    shadowOpacity: 0,
    elevation: 0,
    bottom: 20,
  },
  errorToast: {
    backgroundColor: '#00000080',
    borderRadius: 10,
    borderLeftWidth: 0,
    elevation: 0,
    bottom: 20,
  },
  contentContainer: {
    paddingHorizontal: 15,
    borderLeftWidth: 0,
    elevation: 0,
  },
  text1: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
  text2: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
});

export default TOAST_CONFIG;
