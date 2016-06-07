import React, { PropTypes } from 'react'
import { Text, StyleSheet } from 'react-native'
import $V from '../variable'

const styles = StyleSheet.create({
  cellsTitle: {
    marginTop: $V.weuiCellTipsFontSize * 0.77 + (14 * $V.baseLineHeight - 14) * 0.5,
    marginBottom: $V.weuiCellTipsFontSize * 0.3 + (14 * $V.baseLineHeight - 14) * 0.5,
    paddingLeft: $V.weuiCellGapH,
    paddingRight: $V.weuiCellGapH,
    fontSize: $V.weuiCellTipsFontSize,
    color: $V.globalTextColor,
  }
})
const CellsTitle = (props) => {
  const { children, style, ...others } = props
  return <Text style={[styles.cellsTitle, style]} {...others}>{children}</Text>
}
CellsTitle.propTypes = {
  children: PropTypes.node,
  style: Text.propTypes.style,
  others: PropTypes.object
}

export default CellsTitle
