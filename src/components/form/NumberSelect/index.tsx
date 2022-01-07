/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react';
import {
  Box, View, Text, Input, Button, Container,
} from 'native-base';
import { useField } from '@unform/core';
import styles from './styles';

interface SelectProps {
  name: string;
  label: string;
  viewStyle?: any;
  interval?: number;
  defValueProp?: any;
}

export default (props: SelectProps): React.ReactElement<SelectProps> => {
  const {
    name, viewStyle, label, interval, defValueProp,
  } = props;
  const [defValue, setDefValue] = useState(1);
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
        return ref.value || defValue;
      },
    });
  }, [fieldName, registerField]);

  useEffect(() => {
    if (defValueProp) {
      setDefValue(defValueProp);
    }
  }, [defValueProp]);

  const onPressButton = (add: boolean) => {
    const intervalAmount = interval || 1;
    let defaultValue = defValue;
    if (add) {
      defaultValue += intervalAmount;
    } else if (defaultValue - intervalAmount > 0) {
      defaultValue -= intervalAmount;
    }

    inputRef.current.value = defaultValue.toString();
    setDefValue(defaultValue);
  };

  return (
    <View style={viewStyle}>
      {/* <Label style={{ fontSize: 12, paddingLeft: 2, marginVertical: 5 }}>
        {label}
      </Label> */}
      <View style={{ flexDirection: 'row' }}>
        <Button style={styles.button} onPress={() => onPressButton(false)}>
          <Text style={styles.buttonText}>-</Text>
        </Button>
        <Container style={{ flex: 1, marginLeft: 0 }}>
          <Input
            ref={inputRef}
            onChangeText={(value) => {
              inputRef.current.value = value;
            }}
            style={{ textAlign: 'center' }}
            defaultValue={defValue.toString()}
          />
        </Container>
        <Button style={styles.button} onPress={() => onPressButton(true)}>
          <Text style={styles.buttonText}>+</Text>
        </Button>
      </View>
    </View>
  );
};
