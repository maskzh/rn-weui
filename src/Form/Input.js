import React, { PropTypes } from 'react'
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

const Input = (props) => {
  const {
    value,
    onChange,
    onChangeText,
    style,
    ...others
  } = props

  return (
    <TextInput
      style={[styles.input, style]}
      value={value}
      onChangeText={onChangeText || onChange}
      {...others}
    />
  )
}

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onChangeText: PropTypes.func,
  style: TextInput.propTypes.style,
}

export default Input
