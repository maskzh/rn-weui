import React, { PropTypes } from 'react'
import {
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native'
import V from '../variable'

const styles = StyleSheet.create({
  cell: {
    borderTopWidth: 0.5,
    borderColor: V.weuiCellBorderColor,
    paddingTop: V.weuiCellGapV,
    paddingBottom: V.weuiCellGapV,
    paddingRight: V.weuiCellGapH,
    marginLeft: V.weuiCellGapH,
    flexDirection: 'row',
    alignItems: 'center',
  }
})
const Cell = (props) => {
  const { children, style, ...others } = props
  return (
    <TouchableHighlight underlayColor={V.itemActiveColor} {...others} >
      <View style={[styles.cell, style]}>{children}</View>
    </TouchableHighlight>
  )
}
Cell.propTypes = {
  children: PropTypes.node,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  others: PropTypes.object
}

export default Cell
