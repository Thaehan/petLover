import {useEffect, useRef, useCallback, useState} from 'react';
import {AppState, AppStateStatus} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import {DEFAULT_DEBOUNCE_TIME} from '@Constants/commons';
import {AppDispatch, RootState} from '@Store/index';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useAppDispatch() {
  return useDispatch<AppDispatch>();
}

export function useDebounceValue<T>(value: T, delay?: number) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Set up a timeout to call the callback after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay ?? DEFAULT_DEBOUNCE_TIME);

    // Cleanup function to clear the timeout if the dependencies change
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return {
    debouncedValue,
  };
}

export function useDebounceCallback() {
  const timeoutRef = useRef<NodeJS.Timeout>();

  const debounce = (callback: Function, delay?: number) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      callback();
    }, delay ?? DEFAULT_DEBOUNCE_TIME);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return {debounce};
}

export function useQueryFocus<T>(
  refetch: () => Promise<T> | void,
  timeout?: number,
) {
  const isMountedRef = useRef(false);

  useFocusEffect(
    useCallback(() => {
      // do not refetch when query is initially mounted
      if (isMountedRef.current) {
        isMountedRef.current = false;
        return;
      }
      if (timeout) {
        const newTimeout = setTimeout(() => {
          refetch();
        }, timeout);
        return () => clearTimeout(newTimeout);
      }
      refetch();
    }, [refetch]),
  );

  useEffect(() => {
    const handleAppStateChange = (appState: AppStateStatus) => {
      if (appState === 'active' && isMountedRef.current) {
        refetch();
      }
    };

    const register = AppState.addEventListener('change', handleAppStateChange);
    isMountedRef.current = true;
    return () => {
      register?.remove?.();
    };
  }, []);
}
