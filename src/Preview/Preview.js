import React, { PropTypes } from 'react'
import { View, StyleSheet } from 'react-native'
import V from '../variable'

const styles = StyleSheet.create({
  preview: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: V.weuiCellBorderColor
  },
})

const Preview = ({ style, children, ...other }) =>
  <View style={[styles.preview, style]} {...other}>{children}</View>

Preview.propTypes = {
  style: View.propTypes.style,
  children: PropTypes.node,
}

export default Preview
