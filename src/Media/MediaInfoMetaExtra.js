import React, { PropTypes } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  mediaInfoMetaExtra: {
    paddingLeft: 13 * 1,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    borderColor: '#CECECE',
  },
  mediaInfoMetaExtraText: {
    fontSize: 13,
    color: '#CECECE',
  }
})
const MediaInfoMetaExtra = (props) => {
  const {
    style,
    children,
    ...others
  } = props

  return (
    <View style={[styles.mediaInfoMetaExtra]}>
      <Text style={[styles.mediaInfoMetaExtraText, style]} {...others}>
        {children}
      </Text>
    </View>
  )
}

MediaInfoMetaExtra.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
  children: PropTypes.node,
}

export default MediaInfoMetaExtra
