import React, { PropTypes } from 'react'
import { View, StyleSheet } from 'react-native'
import V from '../variable'

const styles = StyleSheet.create({
  previewHeader: {
    paddingTop: V.weuiCellGapV,
    paddingBottom: V.weuiCellGapV,
    paddingRight: V.weuiCellGapH,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: V.weuiCellBorderColor,
    marginLeft: V.weuiCellGapH,
  },
})

const PreviewHeader = ({ style, children, ...other }) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (child.type.name === 'PreviewItem') {
      return React.cloneElement(child, { preset: 'header' })
    }
    return child
  })

  return (
    <View style={[styles.previewHeader, style]} {...other}>{childrenWithProps}</View>
  )
}

PreviewHeader.propTypes = {
  style: View.propTypes.style,
  children: PropTypes.node,
}

export default PreviewHeader
