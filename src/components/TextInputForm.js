import React from 'react'
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native'
import _ from 'lodash'
import Colors from '../styles/colors'

const TextInputForm = props => {
  const { value, style, onChangeText } = props

  return (
    <View style={[styles.container, style]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        underlineColorAndroid={false}
        
      />
    </View>
  )
}

TextInputForm.defaultProps = {
  value: '',
  style: null,
  onChangeText: null,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    borderColor: Colors.green,
    borderWidth: 1,
  },
  text: {
    fontSize: 12,
    color: Colors.white
  }
})

export default TextInputForm