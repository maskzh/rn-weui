import React, { PropTypes } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  mediaInfoMeta: {
    paddingRight: 13 * 1,
  },
  mediaInfoMetaExtra: {
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    borderColor: '#CECECE',
    paddingLeft: 13 * 1,
  },
  mediaInfoMetaText: {
    fontSize: 13,
    color: '#CECECE',
  }
})
const MediaInfoMeta = (props) => {
  const {
    extra,
    style,
    children,
    ...others
  } = props

  return (
    <View style={[styles.mediaInfoMeta, extra ? styles.mediaInfoMetaExtra : {}]}>
      <Text style={[styles.mediaInfoMetaText, style]} {...others}>
        {children}
      </Text>
    </View>
  )
}

MediaInfoMeta.propTypes = {
  extra: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
  children: PropTypes.node,
}

export default MediaInfoMeta
