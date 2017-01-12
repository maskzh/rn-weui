import React, { PropTypes } from 'react'
import { View, StyleSheet } from 'react-native'
import V from '../variable'

const styles = StyleSheet.create({
  previewFooter: {
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: V.weuiDialogLineColor,
  },
})

const PreviewFooter = ({ style, children, ...other }) =>
  <View style={[styles.previewFooter, style]} {...other}>{children}</View>

PreviewFooter.propTypes = {
  style: View.propTypes.style,
  children: PropTypes.node,
}

export default PreviewFooter
