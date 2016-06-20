import React, { PropTypes } from 'react'
import { Text } from 'react-native'
import StyleSheet from '../StyleSheet'
import $V from '../variable'

const styles = StyleSheet.create({
  cellsTips: {
    paddingLeft: $V.weuiCellGapH,
    paddingRight: $V.weuiCellGapH,
    fontSize: $V.weuiCellTipsFontSize,
    color: $V.globalTextColor,
    marginBottom: $V.weuiCellTipsFontSize * 0.3,
    lineHeight: $V.weuiCellTipsFontSize * $V.baseLineHeight,
    android: {
      lineHeight: Math.round($V.weuiCellTipsFontSize * $V.baseLineHeight),
    },
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
