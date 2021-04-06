import React from 'react'
import {
  View,
  StyleSheet,
  Text,
} from 'react-native'
import { setRootHomeScreen } from '../../navigator'
import { useNavigationAppearEvents } from '../../hooks'
import { LoadingIndicator } from '../../components'
import Colors from '../../styles/colors'

const SplashScreen = props => {

  const { componentId } = props

  useNavigationAppearEvents(componentId, {
    componentDidAppear: () => {
      setTimeout(() => {
        setRootHomeScreen()
      }, 2000)
    },
    componentDidDisappear: () => {

    }
  })

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <LoadingIndicator
          size={'large'}
        />
        <Text style={styles.text}>Hello</Text>
      </View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue_1
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.black
  }
})
