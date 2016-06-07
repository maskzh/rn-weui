import React, { Component, PropTypes } from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { Icon } from '../Icon'
import $V from '../variable'

const styles = StyleSheet.create({
  progress: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    backgroundColor: $V.weuiProgressBg,
    height: $V.weuiProgressHeight,
    flex: 1,
  },
  progressInnerBar: {
    width: 0,
    height: $V.weuiProgressHeight,
    backgroundColor: $V.weuiProgressColor,
  },
  progressOpr: {
    marginLeft: 15,
  }
})

class Progress extends Component {
  constructor(props) {
    super(props)
    this.state = {
      base: 1
    }
    this.onLayout = this.onLayout.bind(this)
  }
  onLayout() {
    this.refs.progressBar.measure((x, y, width) => {
      this.setState({
        base: width / 100
      })
    })
  }
  _renderOpr = (onCancel) => {
    if (!onCancel) return null
    return (
      <TouchableOpacity onPress={onCancel} style={styles.progressOpr}>
        <Icon name="cancel" />
      </TouchableOpacity>
    )
  }
  render() {
    const {
      onCancel,
      style
    } = this.props

    let { value = 0 } = this.props
    if (value < 0) value = 0
    if (value > 100) value = 100

    return (
      <View style={[styles.progress, style]}>
        <View style={styles.progressBar} ref="progressBar" onLayout={this.onLayout}>
          <View
            style={[styles.progressInnerBar, { width: value * this.state.base }]}
          />
        </View>
        {this._renderOpr(onCancel)}
      </View>
    )
  }
}

Progress.propTypes = {
  value: PropTypes.number,
  onCancel: PropTypes.func,
  style: View.propTypes.style,
}

export default Progress
