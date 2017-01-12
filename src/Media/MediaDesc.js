import React, { PropTypes } from 'react'
import { Text } from 'react-native'
import { create } from '../StyleSheet'
import V from '../variable'

const styles = create({
  mediaDesc: {
    fontSize: 13,
    color: V.weuiTextColorGray,
    lineHeight: 13 * 1.2,
    android: {
      lineHeight: Math.round(13 * 1.2),
    },
  }
})

const MediaDesc = ({ style, children, ...others }) =>
  <Text style={[styles.mediaDesc, style]} numberOfLines={2} {...others}>
    {children}
  </Text>

MediaDesc.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node,
}

export default MediaDesc
