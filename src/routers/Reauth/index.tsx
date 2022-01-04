import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'native-base';
import React from 'react';
import { connect } from 'react-redux';
import { AuthState } from '../../interfaces/redux/AuthState';
import { StoreState } from '../../interfaces/redux/StoreState';
import ComandasManager from '../../screens/ComandasManager';
import ReauthScreen from '../../screens/Reauth';

const ReauthStack = createStackNavigator();

interface ReauthProps {
  auth: AuthState;
}

const mapStateToProps = (state: StoreState) => ({
  auth: state.auth,
});

const Reauth: React.FC<ReauthProps> = (props) => {
  const { auth: { reauth } } = props;

  return (
    <ReauthStack.Navigator>
      {
        !reauth ? (
          <ReauthStack.Screen
            options={{ headerShown: false }}
            name="Reauth"
            component={ReauthScreen}
          />
        ) : (
          <ReauthStack.Screen
            options={{ headerShown: false }}
            name="ComandasManager"
            component={ComandasManager}
          />
        )
      }
    </ReauthStack.Navigator>
  );
};

export default connect(mapStateToProps, null)(Reauth);
