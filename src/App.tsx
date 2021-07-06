import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import store from './store';
import Login from './login';
import MainNavigation from './navigation';
import {navigationRef} from './navigation';
const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef} independent={true}>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
