import React from 'react'
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  BackHandler,
} from 'react-native'
import { useNavigationAppearEvents } from '../hooks'

export default HomeScreen = props => {
  const { componentId } = props

  useNavigationAppearEvents(componentId, {
    componentDidAppear: () => {
      BackHandler.exitApp()
    },
    componentDidDisappear: () => {

    }
  })
  
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.body}>
        <Text>HomeScreen</Text>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: 'center'
  },
})
