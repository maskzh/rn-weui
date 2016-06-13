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
  },
  vcodeCell: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
  },
})
const Cell = (props) => {
  const { access, vcode, error, first, children, style, ...others } = props
  const childrenWithProps = React.Children.map(children, (child) => {
    if (access && child.type.name === 'CellFooter') {
      return React.cloneElement(child, { access: true })
    }
    if (error && (child.type.name === 'CellHeader' || child.type.name === 'CellBody')) {
      return React.cloneElement(child, { error: true })
    }
    return child
  })
  return (
    <TouchableHighlight style={style} underlayColor={V.itemActiveColor} {...others} >
      <View
        style={[
          styles.cell,
          first ? styles.firstCell : null,
          vcode ? styles.vcodeCell : null
        ]}
      >{childrenWithProps}</View>
    </TouchableHighlight>
  )
}
Cell.propTypes = {
  first: PropTypes.bool,
  access: PropTypes.bool,
  vcode: PropTypes.bool,
  error: PropTypes.bool,
  children: PropTypes.node,
  style: View.propTypes.style,
  others: PropTypes.object
}

export default Cell
