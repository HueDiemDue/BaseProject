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
import Colors from '../../styles/colors'
import { useNavigationAppearEvents } from '../../hooks'
import {
  Button,
} from '../../components'
import { getBackgroundColor } from '../../utils/Helper'
import { getValue, saveValue } from '../../stores/DataManager'

const BACKGROUND_COLOR = 'BACKGROUND_COLOR'

const HomeScreen = props => {
  const { componentId } = props

  const [value, setValue] = useState(0)
  const backgroundColor = getBackgroundColor(value)

  useNavigationAppearEvents(componentId, {
    componentDidAppear: () => {
      BackHandler.exitApp()
    },
    componentDidDisappear: () => {

    }
  })

  onChangeBackground = () => {
    setValue(value + 1)
    // saveValue(backgroundColor, BACKGROUND_COLOR)
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.body}>
          {/* <Text style={styles.text}>Environment: {Config.ENV}</Text> */}

          <View style={{ alignItems: 'center' }}>
            <View style={{
              backgroundColor,
              height: 100,
              width: 100,
              marginTop: 24
            }}
            />
          </View>

          <Button
            text={'Change background'}
            style={styles.button}
            onPress={onChangeBackground} />
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
