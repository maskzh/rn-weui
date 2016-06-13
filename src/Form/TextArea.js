import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native'
import $V from '../variable'

const styles = StyleSheet.create({
  textarea: {
    fontSize: $V.weuiCellFontSize,
    lineHeight: $V.baseLineHeight,
    height: $V.weuiCellFontSize * $V.baseLineHeight * 3,
  },
  textareaCounter: {
    color: $V.globalDescColor,
    textAlign: 'right',
  }
})

class TextArea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value,
      textCounter: props.defaultValue ? props.defaultValue.length : 0
    }
    this.handleChangeText = this.handleChangeText.bind(this)
  }

  handleChangeText(value) {
    this.setState({
      textCounter: value.length,
      value
    })
    if (this.props.onChangeText) this.props.onChangeText(value)
  }

  render() {
    const {
      style,
      showCounter = true,
      maxLength,
      ...others
    } = this.props

    return (
      <View>
        <TextInput
          multiline={!false}
          maxLength={maxLength}
          onChangeText={this.handleChangeText}
          style={[styles.textarea, style]}
          {...others}
        />
        {showCounter ?
          <Text
            style={styles.textareaCounter}
          >{this.state.textCounter}{maxLength ? `/ ${maxLength}` : false}</Text>
        : false}
      </View>
    )
  }
}

TextArea.propTypes = {
  value: PropTypes.string,
  showCounter: PropTypes.bool,
  maxLength: PropTypes.number,
  defaultValue: PropTypes.string,
  onChangeText: PropTypes.func,
  style: TextInput.propTypes.style,
}

export default TextArea
