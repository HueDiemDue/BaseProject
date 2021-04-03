import React from 'react'
import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import _ from 'lodash'
import Colors from '../styles/colors'

const Button = props => {
  const { text, style, onPress } = props

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

Button.defaultProps = {
  value: '',
  style: null,
  text: 'Press me',
  onPress: null
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.green,
    padding: 24,
    alignItems: 'center'
  },
  text: {
    fontSize: 12,
    color: Colors.white,
    textAlign: 'center'
  }
})

export default Button