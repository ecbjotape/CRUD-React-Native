import React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import PublicRouter from '../Public';
import PrivateRouter from '../Private';
import { StoreState } from '../../interfaces/redux/StoreState';
import { AuthState } from '../../interfaces/redux/AuthState';

interface MainRouterProps {
  auth: AuthState;
}

const mapStateToProps = (state: StoreState) => ({
  auth: state.auth,
})

const MainRouter: React.FC<MainRouterProps> = (props): React.ReactElement => {
  const { auth: { login, senha, token } } = props;

  return (
    <NavigationContainer>
      {
        login && senha && token ? (
          <PrivateRouter />
          // <PublicRouter />
        ) : (
          <PublicRouter />
        )
      }
    </NavigationContainer>
  );
};

export default connect(mapStateToProps, null)(MainRouter);
