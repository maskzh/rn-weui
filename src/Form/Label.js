import React, { PropTypes } from 'react'
import { Text, StyleSheet } from 'react-native'
import V from '../variable'

const styles = StyleSheet.create({
  label: {
    width: V.weuiCellLabelWidth,
    fontSize: V.weuiCellFontSize,
    marginTop: (V.weuiCellLineHeight - V.weuiCellFontSize) / 2,
    marginBottom: (V.weuiCellLineHeight - V.weuiCellFontSize) / 2,
  },
})

const Label = ({ style, children, ...others }) =>
  <Text
    style={[styles.label, style]}
    numberOfLines={1}
    {...others}
  >
    {children}
  </Text>

Label.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node,
}

export default Label
