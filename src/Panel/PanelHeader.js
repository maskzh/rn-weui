import React, { PropTypes } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import V from '../variable'

const styles = StyleSheet.create({
  panelHeader: {
    paddingTop: 14,
    paddingRight: 15,
    paddingBottom: 10,
    marginLeft: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    borderColor: V.weuiLineColorLight,
  },
  panelHeaderText: {
    color: V.weuiTextColorGray,
    fontSize: 13,
  }
})

const PanelHeader = ({ children, style, textStyle, ...others }) =>
  <View style={[styles.panelHeader, style]} {...others}>
    <Text style={[styles.panelHeaderText, textStyle]}>{children}</Text>
  </View>

PanelHeader.propTypes = {
  children: PropTypes.node,
  style: View.propTypes.style,
  textStyle: Text.propTypes.style,
}

export default PanelHeader
