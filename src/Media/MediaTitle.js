import React, { PropTypes } from 'react'
import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  mediaTitle: {
    fontSize: 17,
    fontWeight: '400',
    marginBottom: 5,
  }
})

const MediaTitle = ({ style, children, ...others }) =>
  <Text style={[styles.mediaTitle, style]} numberOfLines={1} {...others}>
    {children}
  </Text>

MediaTitle.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node,
}

export default MediaTitle
