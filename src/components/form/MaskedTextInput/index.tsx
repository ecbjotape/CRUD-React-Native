/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  useEffect, useRef, useState, useCallback,
} from 'react';
import {
  Input, View, Icon, Box,
} from 'native-base';
import { TextInputMask } from 'react-native-masked-text';
import { useField } from '@unform/core';
import { KeyboardTypeOptions } from 'react-native';

interface TextInputProps {
  name: string;
  maxLength?: number;
  placeholder?: string;
  style?: any;
  viewStyle?: any;
  label?: string;
  keyboardType?: KeyboardTypeOptions;
  disabled?: boolean;
  type: any;
  showIcon?: boolean;
  nameIcon?: string;
  typeIcon?: any;
}

export default (props: TextInputProps): React.ReactElement<TextInputProps> => {
  const {
    type,
    name,
    maxLength = 30,
    placeholder = 'Digite aqui',
    style,
    viewStyle,
    label,
    keyboardType,
    disabled,
    showIcon,
    nameIcon,
    typeIcon,
  } = props;
  const inputRef = useRef<any>(null);
  const { fieldName, registerField } = useField(name);
  const [value, setValue] = useState('');
  const [rawValue, setRawValue] = useState('');

  const handleOnChangeText = useCallback((maskedValue, unmaskedValue) => {
    setValue(maskedValue);
    setRawValue(unmaskedValue);
    inputRef.current = maskedValue;
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      setValue(ref, value) {
        inputRef.current.setNativeProps({ text: value });
        inputRef.current.value = value;
      },
      getValue(ref) {
        return ref.value;
      },
    });
  }, [fieldName, registerField]);

  const renderIcon = () => {
    if (!showIcon) return null;

    return <Icon name={nameIcon} />;
  };

  return (
    <View style={viewStyle}>
      <Box >
        <TextInputMask
          includeRawValueInChangeText
          value={value}
          onChangeText={handleOnChangeText}
          customTextInput={Input}
          customTextInputProps={{
            rawValue,
            type,
            maxLength,
            placeholder,
            style,
            label,
            keyboardType,
            disabled,
            ref: inputRef,
          }}
          type={type}
          maxLength={maxLength}
          placeholder={placeholder}
          style={style}
          keyboardType={keyboardType}
          placeholderTextColor="#cbcbcb"
        />
        {renderIcon()}
      </Box>
    </View>
  );
};
