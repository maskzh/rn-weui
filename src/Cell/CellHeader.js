import React, { PropTypes } from 'react'
import { View } from 'react-native'

const CellHeader = (props) => {
  const { children, style, ...others } = props
  return <View style={style} {...others}>{children}</View>
}
CellHeader.propTypes = {
  children: PropTypes.node,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  others: PropTypes.object
}

export default CellHeader
