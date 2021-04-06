import React from 'react'
import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import _ from 'lodash'
import Colors from '../styles/colors'

const Button = props => {
  const { title, style, onPress } = props

  const onPressButton = () => {
    onPress && onPress()
  }

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPressButton}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

Button.defaultProps = {
  value: '',
  style: null,
  title: 'Press me',
  onPress: null
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.green,
    padding: 24,
    alignItems: 'center'
  },
  // text: {
  //   fontSize: 12,
  //   color: Colors.white,
  //   textAlign: 'center'
  // }
})

export default Button