import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '../../screens/Main';
import PostDetails from '../../screens/PostDetails';
import PostCreate from '../../screens/PostCreate';

const PublicStack = createStackNavigator();

export default (): React.ReactElement => {
  return (
    <PublicStack.Navigator>
      <PublicStack.Screen
        options={{ headerShown: false }}
        name="Main"
        component={MainScreen}
      />
      <PublicStack.Screen
        name="PostDetails"
        component={PostDetails}
        options={{
          title: 'Visualizar post',
        }}
      />
      <PublicStack.Screen
        name="PostCreate"
        component={PostCreate}
        options={{
          title: 'Criar novo post',
        }}
      />
    </PublicStack.Navigator>
  );
};
