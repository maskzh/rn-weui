import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'

const getBorderStylesByDirection = ({ direction, width, height, color }) => ({
  up: {
    borderTopWidth: 0,
    borderRightWidth: width / 2.0,
    borderBottomWidth: height,
    borderLeftWidth: width / 2.0,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: color,
    borderLeftColor: 'transparent',
  },
  right: {
    borderTopWidth: height / 2.0,
    borderRightWidth: 0,
    borderBottomWidth: height / 2.0,
    borderLeftWidth: width,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: color,
  },
  down: {
    borderTopWidth: height,
    borderRightWidth: width / 2.0,
    borderBottomWidth: 0,
    borderLeftWidth: width / 2.0,
    borderTopColor: color,
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  left: {
    borderTopWidth: height / 2.0,
    borderRightWidth: width,
    borderBottomWidth: height / 2.0,
    borderLeftWidth: 0,
    borderTopColor: 'transparent',
    borderRightColor: color,
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  upLeft: {
    borderTopWidth: height,
    borderRightWidth: width,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderTopColor: color,
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  upRight: {
    borderTopWidth: 0,
    borderRightWidth: width,
    borderBottomWidth: height,
    borderLeftWidth: 0,
    borderTopColor: 'transparent',
    borderRightColor: color,
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  downLeft: {
    borderTopWidth: height,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: width,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: color,
  },
  downRight: {
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: height,
    borderLeftWidth: width,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: color,
    borderLeftColor: 'transparent',
  }
}[direction])

const styles = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
  },
})

export default class Triangle extends Component {
  static defaultProps = {
    direction: 'up',
    width: 0,
    height: 0,
    color: 'white',
  }
  render() {
    const { style, direction, width, height, color } = this.props
    const borderStyles = getBorderStylesByDirection({ direction, width, height, color })
    return (
      <View style={[styles.triangle, borderStyles, style]} / >
    )
  }
}

Triangle.propTypes = {
  direction: PropTypes.oneOf(['up', 'right', 'down', 'left', 'up-right',
  'up-left', 'down-right', 'down-left']),
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}
