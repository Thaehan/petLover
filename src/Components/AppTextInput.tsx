import {
  View,
  StyleSheet,
  ViewStyle,
  TextInput,
  TextInputProps,
  Text,
  Keyboard,
} from 'react-native';
import React, {
  forwardRef,
  ReactElement,
  Ref,
  useEffect,
  useRef,
  useState,
} from 'react';

import AppIcon from './AppIcon';
import {Control, Controller, RegisterOptions} from 'react-hook-form';

type TAppTextInput = {
  containerStyle?: ViewStyle;
  left?: ReactElement;
  isSecure?: boolean;
  label?: string;
  required?: boolean;
  control: Control<any>;
  name: string;
  rules?: Omit<
    RegisterOptions<any, any>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  initialValue?: string;
  hideClearButton?: boolean;
} & TextInputProps;

function AppTextInput(
  {
    containerStyle,
    style,
    left,
    secureTextEntry,
    label,
    required,
    control,
    name,
    rules = {},
    hideClearButton,
    ...rest
  }: TAppTextInput,
  _currentRef: Ref<any>,
) {
  const ref = useRef<TextInput>(null);
  const [showPassword, setShowPassword] = useState(secureTextEntry);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    // Override the default keyboard dismissal when clicking outside TextInput
    const keyboardListener = Keyboard.addListener('keyboardWillHide', () => {});

    return () => {
      keyboardListener.remove(); // Cleanup listener on component unmount
    };
  }, []);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, onBlur, value}, fieldState: {error}}) => {
        const isEmpty = !value?.length;

        const renderSecure = () => {
          if (!secureTextEntry) {
            return null;
          }

          return (
            <AppIcon
              color={'#73777A'}
              size={24}
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              onPress={() => {
                setShowPassword(!showPassword);
              }}
              containerStyle={styles.secureIcon}
            />
          );
        };

        const renderClear = () => {
          if (isEmpty || hideClearButton) {
            return null;
          }

          return (
            <AppIcon
              color={'#73777A'}
              size={16}
              type="Octicons"
              name={'x-circle-fill'}
              onPress={() => {
                ref.current?.clear();
                onChange('');
              }}
            />
          );
        };

        const renderLabel = () => {
          return (
            <Text style={styles.label}>
              {label}
              {required && (
                <Text style={[styles.label, styles.requiredStar]}> *</Text>
              )}
            </Text>
          );
        };

        const getInputFieldStyle = () => {
          const inputStyle = {
            borderColor: containerStyle?.borderColor ?? '#44494D',
            borderWidth: 1,
          };

          if (isFocus) {
            inputStyle.borderColor = '#EF929C';
            inputStyle.borderWidth = 2;
          }

          if (error) {
            inputStyle.borderColor = '#B3261E';
          }

          return inputStyle;
        };

        return (
          <View style={styles.container}>
            {label && renderLabel()}
            <View
              style={[
                styles.textContainer,
                containerStyle,
                getInputFieldStyle(),
              ]}>
              {left && <View style={styles.left}>{left}</View>}
              <TextInput
                blurOnSubmit
                ref={ref}
                onBlur={() => {
                  setIsFocus(false);
                  onBlur?.();
                }}
                onFocus={() => {
                  setIsFocus(true);
                }}
                value={value}
                onChangeText={onChange}
                style={[styles.textInput, style]}
                secureTextEntry={showPassword}
                placeholderTextColor="#73777A"
                {...rest}
              />
              <View style={[styles.right]}>
                {renderClear()}
                {renderSecure()}
              </View>
            </View>
            {error && <Text style={styles.errorText}>{error?.message}</Text>}
          </View>
        );
      }}
    />
  );
}

export default forwardRef(AppTextInput);

const styles = StyleSheet.create({
  container: {marginTop: 8, marginHorizontal: 8},
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#44494D',
    paddingHorizontal: 12,
    marginHorizontal: 8,
    borderRadius: 6,
    borderWidth: 1,
    minHeight: 42,
  },
  textInput: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    paddingVertical: 6,
    flex: 1,
  },
  center: {},
  left: {
    marginRight: 4,
  },
  right: {
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
    // flex: 1,
  },
  label: {
    marginHorizontal: 8,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 4,
    color: '#44494D',
  },
  requiredStar: {
    color: '#EE0033',
  },
  errorText: {
    color: '#EE0033',
    marginHorizontal: 8,
    marginTop: 4,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
  },
  secureIcon: {
    marginLeft: 8,
  },
});
