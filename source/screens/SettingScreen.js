import React from 'react'
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
} from 'react-native'
import { Navigation } from 'react-native-navigation'

export default SettingScreen = props => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.body}>
        <Text>SettingScreen</Text>
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
