import React, { PropTypes } from 'react'
import {
  StyleSheet
} from 'react-native'
import Text from '../Text'

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
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
  children: PropTypes.node,
}

export default MediaDesc
