import React, { PropTypes } from 'react'
import { Text, StyleSheet } from 'react-native'
import V from '../variable'

const styles = StyleSheet.create({
  cellText: {
    fontSize: V.weuiCellFontSize,
    marginTop: (V.weuiCellLineHeight - V.weuiCellFontSize) / 2,
    marginBottom: (V.weuiCellLineHeight - V.weuiCellFontSize) / 2,
  }
})

const CellText = ({ children, style, ...others }) =>
  <Text style={[styles.cellText, style]} {...others}>{children}</Text>

CellText.propTypes = {
  children: PropTypes.node,
  style: Text.propTypes.style,
}

export default CellText
