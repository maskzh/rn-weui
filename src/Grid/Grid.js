import React, { PropTypes } from 'react'
import { View, TouchableHighlight, StyleSheet, Dimensions } from 'react-native'
import GridIcon from './GridIcon'
import GridLabel from './GridLabel'
import V from '../variable'

const styles = StyleSheet.create({
  grid: {
    paddingTop: 20,
    paddingRight: 10,
    paddingBottom: 20,
    paddingLeft: 10,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: V.weuiGridBorderColor,
    width: (Dimensions.get('window').width - StyleSheet.hairlineWidth) / 3,
    height: 87
  }
})

const Grid = ({ children, icon = false, label = '', style, ...others }) =>
  <TouchableHighlight
    style={[styles.grid, style]}
    underlayColor={V.weuiBgColorActive}
    {...others}
  >
    <View>
      {icon ? <GridIcon>{icon}</GridIcon> : false}
      {children}
      {label ? <GridLabel>{label}</GridLabel> : false}
    </View>
  </TouchableHighlight>

Grid.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.any,
  style: TouchableHighlight.propTypes.style,
  children: PropTypes.node,
}

export default Grid
