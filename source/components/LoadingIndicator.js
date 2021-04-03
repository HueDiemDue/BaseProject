import React from 'react'
import {
  ActivityIndicator,
  Platform
} from 'react-native'
import _ from 'lodash'
import Colors from '../styles/colors'
import CommonStyles from '../styles/styles'

export default LoadingIndicator = props => {
  const { size, animating, center } = props

  const color = _.get(props, 'color') || (Platform.OS === 'ios' ? null : Colors.green)
  const style = center ? { ...CommonStyles.position_absolute_full, alignSelf: 'center' } : { margin: 20 }

  return (
    <ActivityIndicator
      style={style}
      color={color}
      size={size}
      animating={animating}

    />
  )
}
