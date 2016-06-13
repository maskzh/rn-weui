import React, { Component, PropTypes } from 'react'
import {
  TextInput,
  StyleSheet,
} from 'react-native'
import $V from '../variable'

const styles = StyleSheet.create({
  input: {
    fontSize: $V.weuiCellFontSize,
    height: $V.weuiCellLineHeight,
  }
})

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value
    }
    this.handleChangeText = this.handleChangeText.bind(this)
  }

  handleChangeText(value) {
    this.setState({ value })
    if (this.props.onChangeText) this.props.onChangeText(value)
  }

  render() {
    const {
      style,
      ...others
    } = this.props

    return (
      <TextInput
        style={[styles.input, style]}
        value={this.state.value}
        onChangeText={this.handleChangeText}
        {...others}
      />
    )
  }
}

Input.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  style: TextInput.propTypes.style,
}

export default Input
