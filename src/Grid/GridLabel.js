import React, { PropTypes } from 'react'
import { Text, StyleSheet } from 'react-native'
import V from '../variable'

const styles = StyleSheet.create({
  gridLabel: {
    textAlign: 'center',
    fontSize: V.weuiGridFontSize,
    color: V.globalTitleColor,
    marginTop: 5
  }
})
const GridLabel = (props) => {
  const { children, style, ...others } = props
  return <Text style={[styles.gridLabel, style]} {...others}>{children}</Text>
}
GridLabel.propTypes = {
  children: PropTypes.node,
  style: Text.propTypes.style,
  others: PropTypes.object
}

export default GridLabel
