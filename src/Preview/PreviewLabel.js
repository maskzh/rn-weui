import React, { PropTypes } from 'react'
import { StyleSheet, Text } from 'react-native'
import V from '../variable'

const styles = StyleSheet.create({
  formPreviewLabel: {
    textAlign: 'justify',
    color: V.weuiTextColorGray,
  },
})

const PreviewLabel = ({ style, children, ...others }) =>
  <Text style={[styles.formPreviewLabel, style]} {...others}>{children}</Text>

PreviewLabel.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node,
}

export default PreviewLabel
