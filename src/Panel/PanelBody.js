import React, { PropTypes } from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  panelBody: {},
})
const PanelBody = (props) => {
  const { children, style, ...others } = props
  return <View style={[styles.panelBody, styles.cellPrimay, style]} {...others}>{children}</View>
}
PanelBody.propTypes = {
  children: PropTypes.node,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
  others: PropTypes.object
}

export default PanelBody
