import React from 'react'
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
} from 'react-native'
import { Navigation } from 'react-native-navigation'

const SettingScreen = props => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.body}>
        <Text>SettingScreen</Text>
      </SafeAreaView>
    </View>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: 'center'
  },
})
