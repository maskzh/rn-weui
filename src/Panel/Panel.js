import React, { PropTypes } from 'react'
import { View, StyleSheet } from 'react-native'
import V from '../variable'

const styles = StyleSheet.create({
  panel: {
    backgroundColor: '#fff',
    marginTop: 10,
    overflow: 'hidden',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    borderColor: V.weuiLineColorLight,
  }
})

const Panel = ({ children, style, ...others }) =>
  <View style={[styles.panel, style]} {...others} >
    {children}
  </View>

Panel.propTypes = {
  children: PropTypes.node,
  style: View.propTypes.style,
}

export default Panel
