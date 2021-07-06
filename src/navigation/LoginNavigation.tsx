import { createStackNavigator } from '@react-navigation/stack';
import Routes from '../routes';
import Login from '../login';
import Home from '../home';
import React from 'react';

const Stack = createStackNavigator();
const LoginNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.Login}>
      <Stack.Screen
        name={Routes.Login}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.Home}
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default LoginNavigation;
