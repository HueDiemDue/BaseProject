import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  BackHandler,
  TextInput,
} from 'react-native'
import Config from 'react-native-config'
import Colors from '../styles/colors'
import { useNavigationAppearEvents } from '../hooks'
import {
  Button,
  TextInputForm,
} from '../components'

const HomeScreen = props => {
  const { componentId } = props

  const [value, setValue] = useState(0)

  useNavigationAppearEvents(componentId, {
    componentDidAppear: () => {
      BackHandler.exitApp()
    },
    componentDidDisappear: () => {

    }
  })

  onChangeBackground = () => {
    setValue(value + 1)
  }
  console.log('value', value, value % 2)

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.body}>
          <Text style={styles.text}>Environment: {Config.ENV}</Text>
          {/* <TextInputForm
            value={value}
            style={styles.textInput}
          /> */}
          <View style={{
            backgroundColor: value % 2 !== 0 ? 'red' : 'green',
            height: 100,
            width: 100,
            marginTop: 24
          }}
          />

          <Button
            text={'Counter'}
            style={styles.button}
            onPress={this.onChangeBackground} />
        </View>
      </SafeAreaView>
    </View>
  )
}
export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    justifyContent: 'center',
    // alignItems: 'center',
    padding: 24,
  },
  text: {
    fontSize: 12,
    color: Colors.black
  },
  textInput: {
    marginTop: 24,
  },
  textCounter: {

  },
  button: {
    marginTop: 24,
  },
})
