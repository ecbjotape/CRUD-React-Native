import React, { useEffect, useRef, useState } from 'react';
import { View, Select, Icon, Box,
} from 'native-base';
import { useField } from '@unform/core';
import { Platform } from 'react-native';
import { Text } from 'react-native-svg';

interface SelectProps {
  name: string;
  iosHeader: string;
  placeholder?: string;
  viewStyle?: any;
  label?: string;
  options: Array<{ label: string; value: any }>;
  defaultValuePicker?: any;
}

export default (props: SelectProps): React.ReactElement<SelectProps> => {
  const {
    name,
    placeholder = 'Digite aqui',
    viewStyle,
    label,
    iosHeader,
    options,
    defaultValuePicker,
  } = props;
  const selectRef = useRef<any>(null);
  const [valuePicker, setValuePicker] = useState();
  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      // path: 'props.selectedValue',
      setValue(ref, value) {
        selectRef.current.state.value = value;
      },
      getValue(ref) {
        return ref.state.value || valuePicker;
      },
      clearValue: (ref) => {
        ref.select.clearValue();
      },
    });
  }, [fieldName, registerField]);

  useEffect(() => {
    if (defaultValuePicker && options) {
      selectRef.current.state.value = defaultValuePicker;
      setValuePicker(defaultValuePicker);
    }
  }, [defaultValuePicker, options]);

  const getPickerItems = () => {
    let arrayOptions: any[] = [];
    if (Platform.OS === 'android') {
      arrayOptions = [{ label: placeholder, value: '' }];
    }
    arrayOptions = [...arrayOptions, ...options];

    return arrayOptions?.map(
      (option: any) => (
        <Select.Item
          key={option.label}
          label={option.label}
          value={option.value}
        />
      ),
    );
  };

  return (
    <View style={viewStyle}>
      <Text fontSize="xs" >
        {label}
      </Text>
      <Box>
        <Select
          style={{ width: undefined, justifyContent: 'space-between', alignSelf: 'stretch' }}
          placeholder={placeholder}
          width={100}
          ref={selectRef}
          selectedValue={valuePicker}
          onValueChange={(value: any) => {
            selectRef.current.state.value = value;
            setValuePicker(value);
          }}
        >
          {getPickerItems()}
        </Select>
      </Box>
    </View>
  );
};
