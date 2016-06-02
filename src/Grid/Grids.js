import React, { Component, PropTypes } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import Grid from './Grid'
import V from '../variable'

const styles = StyleSheet.create({
  grids: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'hidden',
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderColor: V.weuiGridBorderColor,
  }
})

export default class Grids extends Component {
  static defaultProps = {
    data: []
  }

  renderData(data) {
    return data.map((item, i) =>
      <Grid
        key={i}
        icon={item.icon}
        label={item.label}
        {...item}
      />)
  }

  render() {
    const { children, data, style, ...others } = this.props
    return (
      <View style={[styles.grids, style]} {...others}>
        {data.length > 0 ? this.renderData(data) : children}
      </View>
    )
  }
}

Grids.propTypes = {
  data: PropTypes.array,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  children: PropTypes.node,
}
