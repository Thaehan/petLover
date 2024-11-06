import {useEffect, useRef, useState} from 'react';
import Toast from 'react-native-toast-message';
import {StackActions, useNavigation} from '@react-navigation/native';

export default function useEditEmailConfirm() {
  const navigation = useNavigation();
  const userEmail = 'trangnt1234@viettel.com.vn';
  const [] = useState();

  const onSubmitEditPassword = (data: any) => {
    console.log({data});
    navigation.dispatch(StackActions.pop());
    navigation.dispatch(StackActions.pop());
    Toast.show({
      type: 'success',
      text1: 'Cập nhật Email thành công!',
    });
  };

  return {
    onSubmitEditPassword,
    userEmail,
  };
}

export function useCountdown(initialSeconds: number) {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const start = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setSecondsLeft(initialSeconds);

    timerRef.current = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const resetCountdown = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setSecondsLeft(0);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const formattedTime = () => {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0',
    )}`;
  };

  return {secondsLeft, formattedTime, start, resetCountdown};
}
