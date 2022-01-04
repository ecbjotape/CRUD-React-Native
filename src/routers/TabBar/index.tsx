import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../../screens/Main';
import MenuScreen from '../../screens/Menu';
import CustomTabBar from '../../components/CustomTabBar';
import { connect } from 'react-redux';
import { StoreState } from '../../interfaces/redux/StoreState';
import { MesaState } from '../../interfaces/redux/MesaState';
import ComandasStack from '../Comandas';
import ReauthStack from '../Reauth';
import ViewMesa from '../../screens/ViewMesa';

interface TabBarRouterProps {
  mesa: MesaState;
}

const TabBar = createBottomTabNavigator();

const mapStateToProps = (state: StoreState) => ({
  mesa: state.mesa
});

const TabBarRouter: React.FC<TabBarRouterProps> = (props) => {
  const { mesa: { nPessoas, nomeCliente } } = props;

  return (
    <TabBar.Navigator
      tabBar={(props) => <CustomTabBar TabProps={props} />}
      screenOptions={{ headerShown: false }}
    >
      {
        !nPessoas && !nomeCliente ? (
          <TabBar.Screen name="Main" component={MainScreen} options={{
            tabBarStyle: {
              display: 'none',
            },
          }} />
        ) : null
      }
      <TabBar.Screen name="Menu" component={MenuScreen} />
      <TabBar.Screen name="Comandas" component={ComandasStack} />
      <TabBar.Screen name="Gerenciamento" component={ReauthStack} />
      <TabBar.Screen name="Mesa" component={ViewMesa} />
    </TabBar.Navigator>
  );
}

export default connect(mapStateToProps, null)(TabBarRouter);