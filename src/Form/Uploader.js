import React from 'react'
import {
  TextInput,
  StyleSheet,
} from 'react-native'
import $V from '../variable'

const styles = StyleSheet.create({
  input: {
    fontSize: $V.weuiCellFontSize,
    color: '#000',
    height: $V.weuiCellLineHeight,
    lineHeight: $V.weuiCellLineHeight,
    alignSelf: 'center'
  }
})

const Input = (props) => {
  const {
    style,
    ...others
  } = props

  return (
    <TextInput style={[styles.input, style]} {...others} />
  )
}

Input.propTypes = {
  style: TextInput.propTypes.style,
}

export default Input
