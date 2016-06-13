import React, { PropTypes } from 'react'
import { Text, StyleSheet } from 'react-native'
import $V from '../variable'

const styles = StyleSheet.create({
  cellText: {
    fontSize: $V.weuiCellFontSize,
    marginTop: ($V.weuiCellLineHeight - $V.weuiCellFontSize) / 2,
    marginBottom: ($V.weuiCellLineHeight - $V.weuiCellFontSize) / 2,
  }
})
const CellText = (props) => {
  const { children, style, ...others } = props
  return <Text style={[styles.cellText, style]} {...others}>{children}</Text>
}
CellText.propTypes = {
  children: PropTypes.node,
  style: Text.propTypes.style,
  others: PropTypes.object
}

export default CellText
