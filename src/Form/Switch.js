import React, { Component, PropTypes } from 'react'
import {
  Switch as RNSwitch,
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  switch: {}
})

class Switch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value || false,
    }
    this.handleValueChange = this.handleValueChange.bind(this)
  }

  handleValueChange(value) {
    this.setState({ value })
    if (this.onValueChange) this.onValueChange(value)
  }

  render() {
    const {
      style,
      ...others
    } = this.props

    return (
      <RNSwitch
        style={[styles.switch, style]}
        onValueChange={this.handleValueChange}
        value={this.state.value}
        {...others}
      />
    )
  }
}

Switch.propTypes = {
  value: PropTypes.string,
  style: RNSwitch.propTypes.style,
  onValueChange: PropTypes.func,
}

export default Switch
