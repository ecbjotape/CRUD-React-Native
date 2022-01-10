import { Button } from 'native-base';
import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Task = (props: any) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      
    </View>
  )
}



export default Task;