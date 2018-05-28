// @flow
import React from "react";
import { createStackNavigator } from 'react-navigation';
import { AppLoading, Font } from 'expo';

import LoginPage from './src/components/LoginPage';
import HomePage from './src/components/HomePage';
import ForgotPassword from './src/components/ForgotPassword';
import BalanceScreen from './src/components/BalanceScreen';

import HKGroteskBold from './src/assets/fonts/HKGrotesk-Bold.ttf';
import HKGroteskLight from './src/assets/fonts/HKGrotesk-Light.ttf';
import HKGroteskMedium from './src/assets/fonts/HKGrotesk-Medium.ttf';
import HKGroteskRegular from './src/assets/fonts/HKGrotesk-Regular.ttf';
import HKGroteskSemiBold from './src/assets/fonts/HKGrotesk-SemiBold.ttf';

type Props = {};
type State = {
  fontLoaded: boolean,
};

class App extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
    };
  }

  state: State;

  componentDidMount() {
    this.loadAssets();
  }

  loadAssets = async () => {
    await Font.loadAsync({
      'HKGrotesk-bold': HKGroteskBold,
      'HKGrotesk-light': HKGroteskLight,
      'HKGrotesk-medium': HKGroteskMedium,
      'HKGrotesk-regular': HKGroteskRegular,
      'HKGrotesk-semi-bold': HKGroteskSemiBold,
    });
    this.setState({ fontLoaded: true });
  };

  render() {
    const { fontLoaded } = this.state;

    const Routes = createStackNavigator(
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

    return fontLoaded ? <Routes /> : <AppLoading />;
  }
}

export default App;
