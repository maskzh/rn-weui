import React, { PropTypes } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import V from '../variable'

const styles = StyleSheet.create({
  cells: {
    marginTop: V.weuiCellssMarginTop,
    backgroundColor: V.weuiCellBg,
    overflow: 'hidden',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: V.weuiCellBorderColor
  }
})
const Cells = (props) => {
  const { children, style, ...others } = props
  const childrenWithProps = React.Children.map(children, (child, idx) => {
    if (idx === 0) {
      return React.cloneElement(child, { first: true })
    }
    return child
  })
  return (
    <View style={[styles.cells, style]} {...others}>
      {childrenWithProps}
    </View>
  )
}
Cells.propTypes = {
  children: PropTypes.node,
  style: View.propTypes.style,
  others: PropTypes.object
}

export default Cells
