import React, { PropTypes } from 'react'
import {
  Text,
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  mediaDesc: {
    fontSize: 13,
    lineHeight: 13 * 1.2,
    color: '#999999'
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
