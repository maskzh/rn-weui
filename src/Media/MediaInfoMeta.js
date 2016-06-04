import React, { PropTypes } from 'react'
import {
  Text,
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  mediaInfoMeta: {
    fontSize: 13,
    color: '#CECECE',
    paddingRight: 13 * 1,
  }
})
const MediaInfoMeta = (props) => {
  const {
    style,
    children,
    ...others
  } = props

  return (
    <Text style={[styles.mediaInfoMeta, style]} {...others}>
      {children}
    </Text>
  )
}

MediaInfoMeta.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
  children: PropTypes.node,
}

export default MediaInfoMeta
