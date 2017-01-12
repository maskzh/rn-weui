import React, { PropTypes } from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  mediaInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
    paddingBottom: 5,
    overflow: 'hidden',
  }
})

const MediaInfo = ({ style, children, ...others }) =>
  <View style={[styles.mediaInfo, style]} {...others}>
    {children}
  </View>

MediaInfo.propTypes = {
  style: View.propTypes.style,
  children: PropTypes.node,
}

export default MediaInfo
