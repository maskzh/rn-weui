import React, { PropTypes } from 'react'
import { View, Text, TextInput } from 'react-native'
import { create } from '../StyleSheet'
import V from '../variable'

const styles = create({
  textarea: {
    fontSize: V.weuiCellFontSize,
    height: V.weuiCellFontSize * V.baseLineHeight * 3,
    lineHeight: V.weuiCellFontSize * V.baseLineHeight,
    android: {
      lineHeight: Math.round(V.weuiCellFontSize * V.baseLineHeight),
    },
  },
  textareaCounter: {
    color: V.weuiTextColorTips,
    textAlign: 'right',
  }
})

const TextArea = ({
  value,
  onChange,
  showCounter = true,
  maxLength,
  defaultValue,
  disabled = false,
  style,
  ...others
}) =>
  <View>
    <TextInput
      multiline={!false}
      maxLength={maxLength}
      onChangeText={onChange}
      value={value}
      defaultValue={defaultValue}
      editable={!disabled}
      style={[styles.textarea, style]}
      {...others}
    />
    {showCounter ?
      <Text
        style={styles.textareaCounter}
      >{(value || defaultValue || '').length}{maxLength ? `/ ${maxLength}` : false}</Text>
    : false}
  </View>

TextArea.propTypes = {
  value: PropTypes.string,
  showCounter: PropTypes.bool,
  maxLength: PropTypes.number,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  style: TextInput.propTypes.style,
}

export default TextArea
