import React, { PropTypes } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import V from '../variable'

const styles = StyleSheet.create({
  input: {
    fontSize: V.weuiCellFontSize,
    height: V.weuiCellLineHeight,
  },
})

const Input = ({ value, onChange, disabled = false, style, ...others }) =>
  <TextInput
    style={[styles.input, style]}
    value={value}
    onChangeText={onChange}
    editable={!disabled}
    {...others}
  />

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  style: TextInput.propTypes.style,
}

export default Input
