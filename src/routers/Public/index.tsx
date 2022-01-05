import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import MainScreen from '../../screens/Main';

const PublicStack = createStackNavigator();

export default (): React.ReactElement => {
  return (
    <PublicStack.Navigator>
      <PublicStack.Screen
        options={{headerShown: false}}
        name="Main"
        component={MainScreen}
      />
    </PublicStack.Navigator>
  );
};
