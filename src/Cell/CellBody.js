import React, { PropTypes } from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  cellBody: {},
  cellPrimay: {
    flex: 1
  }
})
const CellBody = (props) => {
  const { children, style, ...others } = props
  return <View style={[styles.cellBody, styles.cellPrimay, style]} {...others}>{children}</View>
}
CellBody.propTypes = {
  children: PropTypes.node,
  style: View.propTypes.style,
  others: PropTypes.object
}

export default CellBody
