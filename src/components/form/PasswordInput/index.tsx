/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  FormControl,
  Icon,
  Input, Stack, View, WarningOutlineIcon,
} from 'native-base';
import { useField } from '@unform/core';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../../../screens/public/Login/styles';

interface PasswordInputProps {
  name: string;
  placeholder?: string;
  style?: any;
  viewStyle?: any;
  label?: string;
}

export default (props: PasswordInputProps):
  React.ReactElement<PasswordInputProps> => {
  const {
    name, placeholder = 'Digite aqui', style, viewStyle, label,
  } = props;
  const inputRef = useRef<any>(null);
  const { fieldName, registerField } = useField(name);
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

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

  return (
    <View style={viewStyle}>
      <FormControl >
        <Stack>
          <FormControl.Label>{label}</FormControl.Label>
          <Input
            type={show ? "text" : "password"}
            placeholder={placeholder}
            isFullWidth
            ref={inputRef}
            onChangeText={(value) => {
              inputRef.current.value = value;
            }}
            style={style}
            InputRightElement={
              <Button style={style} size="xs" w="1/6" bg="#0000000B" h="full" onPress={handleClick}>
                {show ? (<>
                  <Icon
                    as={<MaterialIcons name="visibility" />}
                    size={5}
                    mr="2"
                  />
                </>)
                  :
                  (<>
                    <Icon
                      as={<MaterialIcons name="visibility-off" />}
                      size={5}
                      mr="2"
                    />
                  </>)}
              </Button>
            }
          />
        </Stack>
      </FormControl>
    </View>
  );
};
