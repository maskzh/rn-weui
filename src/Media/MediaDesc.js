import React, { PropTypes } from 'react'
import {
  Text,
} from 'react-native'
import StyleSheet from '../StyleSheet'

const styles = StyleSheet.create({
  mediaDesc: {
    fontSize: 13,
    color: '#999999',
    lineHeight: 13 * 1.2,
    android: {
      lineHeight: Math.round(13 * 1.2),
    },
  }
})
const MediaDesc = (props) => {
  const {
    style,
    children,
    ...others
  } = props

  return (
    <Text style={[styles.mediaDesc, style]} numberOfLines={2} {...others}>
      {children}
    </Text>
  )
}

MediaDesc.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node,
}

export default MediaDesc
