import React, { PropTypes } from 'react'
import { Text, StyleSheet } from 'react-native'
import $V from '../variable'

const styles = StyleSheet.create({
  cellsTips: {
    paddingLeft: $V.weuiCellGapH,
    paddingRight: $V.weuiCellGapH,
    fontSize: $V.weuiCellTipsFontSize,
    color: $V.globalTextColor,
    lineHeight: $V.weuiCellTipsFontSize * $V.baseLineHeight,
    marginBottom: $V.weuiCellTipsFontSize * 0.3,
  }
})
const CellsTips = (props) => {
  const { children, style, ...others } = props
  return <Text style={[styles.cellsTips, style]} {...others}>{children}</Text>
}
CellsTips.propTypes = {
  children: PropTypes.node,
  style: Text.propTypes.style,
  others: PropTypes.object
}

export default CellsTips
