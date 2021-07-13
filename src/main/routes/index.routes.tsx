import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthenticationRoutes } from './authentications/index.routes';

const Routes: React.FC = () => {
  return (
      <NavigationContainer>
          <AuthenticationRoutes />
      </NavigationContainer>
  );
}

export default Routes;