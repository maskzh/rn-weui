import React, { PropTypes } from 'react'
import { Text, StyleSheet } from 'react-native'
import V from '../variable'

const styles = StyleSheet.create({
  gridLabel: {
    textAlign: 'center',
    fontSize: V.weuiGridFontSize,
    color: V.weuiTextColorTitle,
    marginTop: 5,
  }
})

const GridLabel = ({ children, style, ...others }) =>
  <Text style={[styles.gridLabel, style]} {...others}>{children}</Text>

GridLabel.propTypes = {
  children: PropTypes.node,
  style: Text.propTypes.style,
}

export default GridLabel
