import React, { PropTypes } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import V from '../variable'

const styles = StyleSheet.create({
  input: {
    fontSize: V.weuiCellFontSize,
    height: V.weuiCellLineHeight,
  }
})

const Input = ({ value, onChange, style, ...others }) =>
  <TextInput
    style={[styles.input, style]}
    value={value}
    onChangeText={onChange}
    {...others}
  />

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  style: TextInput.propTypes.style,
}

export default Input
