import React, { Component, PropTypes } from 'react'
import {
  View,
  TouchableHighlight,
  StyleSheet,
  Dimensions
} from 'react-native'
import GridIcon from './GridIcon'
import GridLabel from './GridLabel'
import V from '../variable'

const styles = StyleSheet.create({
  grid: {
    paddingTop: 20,
    paddingRight: 10,
    paddingBottom: 20,
    paddingLeft: 10,
    borderRightWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: V.weuiGridBorderColor,
    width: (Dimensions.get('window').width - 0.5) / 3
  }
})

export default class Grid extends Component {
  static defaultProps = {
    label: '',
    icon: false
  }
  render() {
    const { children, icon, label, style, ...others } = this.props
    return (
      <TouchableHighlight
        style={[styles.grid, style]}
        underlayColor={V.itemActiveColor}
        {...others}
      >
        <View>
          {icon ? <GridIcon>{icon}</GridIcon> : false}
          {children}
          {label ? <GridLabel>{label}</GridLabel> : false}
        </View>
      </TouchableHighlight>
    )
  }
}
Grid.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.any,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  children: PropTypes.node,
}
