
import { Navigation } from 'react-native-navigation'
import { AppState } from 'react-native'
import { registerScreens } from './configs/screens-register'
import { defaultOptions } from './navigator/options'
import { setRootSplashScreen, setRootHomeScreen } from './navigator'

registerScreens()

Navigation.events().registerAppLaunchedListener(async () => {
  await Navigation.setDefaultOptions(defaultOptions)

  setRootSplashScreen()
})

Navigation.events().registerComponentDidAppearListener(({ componentId, componentName }) => {
  console.log('registerComponentDidAppearListener: ' + componentId + " " + componentName)
});

Navigation.events().registerComponentDidDisappearListener(({ componentId, componentName }) => {
  console.log('registerComponentDidAppearListener: ' + componentId + " " + componentName)
});