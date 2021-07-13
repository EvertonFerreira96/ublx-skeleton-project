import React from 'react';
import {Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '@/presentation/screens/authentications/sign-in';
import { OneTimePassword } from '@/presentation/screens/authentications/one-time-password';

const Stack = createStackNavigator();

export function NatureEntitiesAuthenticationRoutes() {
  return (
    <Stack.Navigator
        headerMode="none"
        initialRouteName="SignIn"
        >
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="OneTimePassword" component={OneTimePassword} />
    </Stack.Navigator>
  );
}