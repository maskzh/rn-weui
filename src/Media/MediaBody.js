import React, { PropTypes } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  mediaBody: {
    flex: 1
  }
})
const MediaBody = (props) => {
  const {
    style,
    children,
    ...others
  } = props

  return (
    <View style={[styles.mediaBody, style]} {...others}>
      {children}
    </View>
  )
}

MediaBody.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
  children: PropTypes.node,
}

export default MediaBody
