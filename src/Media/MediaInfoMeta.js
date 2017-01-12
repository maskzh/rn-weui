import React, { PropTypes } from 'react'
import { View, Text, StyleSheet } from 'react-native'

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

const MediaInfoMeta = ({ extra, style, textStyle, children, ...others }) =>
  <View style={[styles.mediaInfoMeta, extra ? styles.mediaInfoMetaExtra : {}, style]}>
    <Text style={[styles.mediaInfoMetaText, textStyle]} {...others}>
      {children}
    </Text>
  </View>

MediaInfoMeta.propTypes = {
  extra: PropTypes.bool,
  style: View.propTypes.style,
  textStyle: Text.propTypes.style,
  children: PropTypes.node,
}

export default MediaInfoMeta
