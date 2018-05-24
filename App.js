// @flow
import { createStackNavigator } from 'react-navigation';

import LoginPage from './src/components/LoginPage';
import HomePage from './src/components/HomePage';
import ForgotPassword from './src/components/ForgotPassword';
import BalanceScreen from './src/components/BalanceScreen';

const App = createStackNavigator(
  {
    Login: { screen: LoginPage },
    Home: { screen: HomePage },
    ForgotPassword: { screen: ForgotPassword },
    BalanceScreen: { screen: BalanceScreen },
  },
  {
    initialRouteName: 'Login',
  },
);

export default App;
