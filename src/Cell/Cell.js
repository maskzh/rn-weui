import React, { PropTypes } from 'react'
import {
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native'
import V from '../variable'

const styles = StyleSheet.create({
  cell: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: V.weuiCellGapH,
    paddingTop: V.weuiCellGapV,
    paddingBottom: V.weuiCellGapV,
    paddingRight: V.weuiCellGapH,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: V.weuiCellBorderColor,
  },
  firstCell: {
    borderTopWidth: 0,
  }
})
const Cell = (props) => {
  const { first, children, style, ...others } = props
  return (
    <TouchableHighlight style={style} underlayColor={V.itemActiveColor} {...others} >
      <View style={[styles.cell, first ? styles.firstCell : {}]}>{children}</View>
    </TouchableHighlight>
  )
}
Cell.propTypes = {
  first: PropTypes.bool,
  children: PropTypes.node,
  style: View.propTypes.style,
  others: PropTypes.object
}

export default Cell
