import React, { PropTypes } from 'react'
import {
  View,
  Text,
  TextInput,
} from 'react-native'
import StyleSheet from '../StyleSheet'
import $V from '../variable'

const styles = StyleSheet.create({
  textarea: {
    fontSize: $V.weuiCellFontSize,
    height: $V.weuiCellFontSize * $V.baseLineHeight * 3,
    lineHeight: $V.weuiCellFontSize * $V.baseLineHeight,
    android: {
      lineHeight: Math.round($V.weuiCellFontSize * $V.baseLineHeight),
    },
  },
  textareaCounter: {
    color: $V.globalDescColor,
    textAlign: 'right',
  }
})

const TextArea = (props) => {
  const {
    style,
    value,
    onChange,
    onChangeText,
    showCounter = true,
    maxLength,
    defaultValue,
    ...others
  } = props

  return (
    <View>
      <TextInput
        multiline={!false}
        maxLength={maxLength}
        onChangeText={onChangeText || onChange}
        value={value}
        defaultValue={defaultValue}
        style={[styles.textarea, style]}
        {...others}
      />
      {showCounter ?
        <Text
          style={styles.textareaCounter}
        >{(value || defaultValue || '').length}{maxLength ? `/ ${maxLength}` : false}</Text>
      : false}
    </View>
  )
}

TextArea.propTypes = {
  value: PropTypes.string,
  showCounter: PropTypes.bool,
  maxLength: PropTypes.number,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onChangeText: PropTypes.func,
  style: TextInput.propTypes.style,
}

export default TextArea
