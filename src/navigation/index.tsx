import React, {createRef} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from '../routes';
import Home from '../home';
import LoginNavigation from './LoginNavigation'; 

export const navigationRef = createRef();

export function navigate(name: Routes, params: any) {
  navigationRef.current?.navigate(name, params);
}
export function reset(name: Routes) {
  navigationRef.current?.reset({
    index: 0,
    routes: [{name}],
  });
}

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Login}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={Routes.Home}
        options={{headerShown: false}}
        component={Home}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={Routes.Login}
        component={LoginNavigation}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;