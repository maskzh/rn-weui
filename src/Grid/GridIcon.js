import React, { PropTypes } from 'react'
import { View, StyleSheet } from 'react-native'
import V from '../variable'

const styles = StyleSheet.create({
  gridIcon: {
    width: V.weuiGridIconSize,
    height: V.weuiGridIconSize,
    alignSelf: 'center'
  }
})

const GridIcon = ({ children, style, ...others }) =>
  <View style={[styles.gridIcon, style]} {...others}>{children}</View>

GridIcon.propTypes = {
  children: PropTypes.node,
  style: View.propTypes.style,
}

export default GridIcon
