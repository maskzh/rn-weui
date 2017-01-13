import React, { PropTypes } from 'react'
import { Text } from 'react-native'
import { create } from '../StyleSheet'
import V from '../variable'

const styles = create({
  cellsTips: {
    paddingLeft: V.weuiCellGapH,
    paddingRight: V.weuiCellGapH,
    fontSize: V.weuiCellTipsFontSize,
    color: V.weuiTextColorGray,
    marginTop: V.weuiCellTipsFontSize * 0.3,
    lineHeight: V.weuiCellTipsFontSize * V.baseLineHeight,
    android: {
      lineHeight: Math.round(V.weuiCellTipsFontSize * V.baseLineHeight),
    },
  }
})

const CellsTips = ({ children, style, ...others }) =>
  <Text style={[styles.cellsTips, style]} {...others}>{children}</Text>

CellsTips.propTypes = {
  children: PropTypes.node,
  style: Text.propTypes.style,
}

export default CellsTips
