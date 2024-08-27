import React, {ReactNode, useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  StyleSheetProperties,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {Button, ButtonProps, Text} from 'react-native-paper';
import LottieView, {LottieViewProps} from 'lottie-react-native';

type TAppPrimaryButtonProps = Omit<ButtonProps, 'children'> & {
  children?: ReactNode;
  title: string;
};

type TAppSecondaryButtonProps = Omit<ButtonProps, 'children'> & {
  children?: ReactNode;
  title: string;
};

type TAppLottieButton = TouchableOpacityProps &
  LottieViewProps & {
    children?: ReactNode;
    initState: boolean;
    onStateTime: number;
    offStateTime: number;
    containerStyle?: StyleSheetProperties;
  };

export function AppPrimaryButton({
  title,
  style,
  ...rest
}: TAppPrimaryButtonProps) {
  return (
    <Button style={[styles.buttonContainer, style]} {...rest}>
      <Text>{title}</Text>
    </Button>
  );
}

export function AppSecondaryButton({
  title,
  style,
  ...rest
}: TAppSecondaryButtonProps) {
  return (
    <Button style={[styles.buttonContainer, style]} {...rest}>
      <Text>{title}</Text>
    </Button>
  );
}

export function AppLottieButton({
  source,
  initState,
  containerStyle,
  style,
  ...rest
}: TAppLottieButton) {
  const animationRef = useRef<LottieView>(null);
  const isRistRunRef = useRef(true);

  const [state, setState] = useState<boolean>(initState);

  useEffect(() => {
    setState(initState);
  }, [initState]);

  useEffect(() => {
    if (isRistRunRef.current) {
      if (state) {
        animationRef.current?.play(66, 66);
      } else {
        animationRef.current?.play(19, 19);
      }
      isRistRunRef.current = false;
    } else if (state) {
      animationRef.current?.play(19, 50);
    } else {
      animationRef.current?.play(0, 19);
    }
  }, [state]);

  return (
    <TouchableOpacity
      onPress={() => {
        setState(!state);
      }}
      style={[styles.lottieContainer, containerStyle]}
      {...rest}>
      <LottieView
        loop={false}
        autoPlay={false}
        ref={animationRef}
        source={source}
        style={[styles.lottieStyle, style]}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {},
  lottieContainer: {},
  lottieStyle: {},
});
