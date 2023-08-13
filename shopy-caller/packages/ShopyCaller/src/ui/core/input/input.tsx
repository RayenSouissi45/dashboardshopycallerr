import { styled } from 'nativewind';
import * as React from 'react';
import type { TextInput, TextInputProps } from 'react-native';
import { StyleSheet } from 'react-native';
import { TextInput as NTextInput } from 'react-native';

import { isRTL } from '@/core';

import colors from '../../theme/colors';
import { Text } from '../text';
import { View } from '../view';

const STextInput = styled(NTextInput);

export interface NInputProps extends TextInputProps {
  label?: string;
  disabled?: boolean;
  error?: string;
}

export const Input = React.forwardRef<TextInput, NInputProps>((props, ref) => {
  const { label, error, value, ...inputProps } = props;

  const [isFocussed, setIsFocussed] = React.useState(false);
  const onBlur = React.useCallback(() => setIsFocussed(false), []);
  const onFocus = React.useCallback(() => setIsFocussed(true), []);

  const borderColor = error
    ? 'border-danger-600'
    : isFocussed
    ? 'border-green-10'
    : 'border-neutral-400';

  const bgColor = error ? 'bg-danger-50' : 'bg-neutral-200';
  const textDirection = isRTL ? 'text-right' : 'text-left';
  return (
    <View className="mb-4 relative">
      <STextInput
        testID="STextInput"
        ref={ref}
        placeholderTextColor={colors.grey[10]}
        className={`mt-0 border-[1px] p-4 ${borderColor} rounded-md ${bgColor} bg-neutral-200 text-white text-[16px] ${textDirection}`}
        onBlur={onBlur}
        onFocus={onFocus}
        value={value}
        {...inputProps}
        style={StyleSheet.flatten([
          { writingDirection: isRTL ? 'rtl' : 'ltr' },
        ])}
      />
      {label && (
        <Text
          variant="md"
          className={`absolute left-4   ${
            value || isFocussed
              ? 'top-0 text-green-10 text-[12px]'
              : 'top-4 text-grey-10 text-[16px]'
          }`}
        >
          {label}
        </Text>
      )}
      {error && <Text variant="error">{error}</Text>}
    </View>
  );
});
