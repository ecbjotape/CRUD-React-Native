import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import PublicRouter from '../Public';

const MainRouter: React.FC = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <PublicRouter />
    </NavigationContainer>
  );
};

export default MainRouter;
