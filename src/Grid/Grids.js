import React, { PropTypes } from 'react'
import { View, StyleSheet } from 'react-native'
import Grid from './Grid'
import V from '../variable'

const styles = StyleSheet.create({
  grids: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'hidden',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderColor: V.weuiGridBorderColor,
  }
})

const renderData = data =>
  data.map((item, i) =>
    <Grid key={i} icon={item.icon} label={item.label} {...item} />)

const Grids = ({ children, data = [], style, ...others }) =>
  <View style={[styles.grids, style]} {...others}>
    {data.length > 0 ? renderData(data) : children}
  </View>

Grids.propTypes = {
  data: PropTypes.array,
  style: View.propTypes.style,
  children: PropTypes.node,
}

export default Grids
