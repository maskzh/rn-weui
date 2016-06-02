import React, { PropTypes } from 'react'
import { Text, StyleSheet } from 'react-native'
import V from '../variable'

const styles = StyleSheet.create({
  cellsTips: {
    marginTop: V.weuiCellTipsFontSize * 0.3,
    paddingLeft: V.weuiCellGapH,
    paddingRight: V.weuiCellGapH,
    fontSize: V.weuiCellTipsFontSize,
    color: V.globalTextColor,
  }
})
const CellsTips = (props) => {
  const { children, style, ...others } = props
  return <Text style={[styles.cellsTips, style]} {...others}>{children}</Text>
}
CellsTips.propTypes = {
  children: PropTypes.node,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  others: PropTypes.object
}

export default CellsTips
