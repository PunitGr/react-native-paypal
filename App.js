import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import LoginPage from './src/components/LoginPage';
import HomePage from './src/components/HomePage';
import ForgotPassword from './src/components/ForgotPassword';

export default App = createStackNavigator({
    Login: { screen: LoginPage },
    Home: { screen: HomePage },
    ForgotPassword: { screen: ForgotPassword },
  },
  {
    initialRouteName: 'Login',
  },
);
