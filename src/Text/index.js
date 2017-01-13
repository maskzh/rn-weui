import React, { PropTypes } from 'react'
import { StyleSheet, Text as RNText } from 'react-native'
import V from '../variable'

const Text = ({ style, children, ...others, }) => {
  const styleObj = StyleSheet.flatten(style)
  const fontSize = styleObj.fontSize || V.baseFontSize
  const lineHeight = styleObj.lineHeight || fontSize * V.baseLineHeight

  return (
    <RNText style={[style, { fontSize, lineHeight }]} {...others}>{children}</RNText>
  )
}

Text.propTypes = {
  style: RNText.propTypes.style,
  children: PropTypes.node
}

export default Text
