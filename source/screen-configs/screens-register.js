import { Navigation } from 'react-native-navigation'
import ScreenName from './screens-name'

import HomeScreen from '../screens/HomeScreen'
import SettingScreen from '../screens/SettingScreen'
import SplashScreen from '../screens/SplashScreen'

export function registerScreens() {
  //registerComponent
  registerComponent(ScreenName.splash, SplashScreen)
  registerComponent(ScreenName.home, HomeScreen)
  registerComponent(ScreenName.setting, SettingScreen)
}

const registerComponent = (screenName, ReduxScreen) => {
  Navigation.registerComponent(screenName, () => ReduxScreen)
}