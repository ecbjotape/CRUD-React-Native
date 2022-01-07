import React, { useEffect, useRef } from 'react';
import {
  Box, Input, View, Icon, Text, Container, FormControl, Stack, WarningOutlineIcon,
} from 'native-base';
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
  showIcon?: boolean;
  nameIcon?: string;
  typeIcon?: any;
}

export default (props: TextInputProps): React.ReactElement<TextInputProps> => {
  const {
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
      <FormControl >
        <Stack>
          <FormControl.Label>{label}</FormControl.Label>
          <Input
            isDisabled={disabled}
            placeholder={placeholder}
            maxLength={maxLength}
            isFullWidth
            ref={inputRef}
            onChangeText={(value) => {
              inputRef.current.value = value;
            }}
            keyboardType={keyboardType}
            style={style}
          />
          {renderIcon()}
        </Stack>
      </FormControl>
    </View>
  );
};
