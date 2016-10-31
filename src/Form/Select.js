import React, { Component, PropTypes } from 'react'
import {
  Text,
  View,
  StyleSheet,
} from 'react-native'
import Picker from './Picker'
import $V from '../variable'

const styles = StyleSheet.create({
  text: {
    fontSize: $V.weuiCellFontSize,
    marginTop: ($V.weuiCellLineHeight - $V.weuiCellFontSize) / 2,
    marginBottom: ($V.weuiCellLineHeight - $V.weuiCellFontSize) / 2,
  },
  placeholder: {
    color: $V.globalTextColor
  }
})

const getLabel = (data, valueArr) => {
  if (data.filter((item) => item.children).length) {
    let firstPickedObj
    let secondPickedObj
    return valueArr.map((value, index) => {
      if (index === 0) {
        firstPickedObj = data.filter((item) => item.value === value)[0]
        return firstPickedObj.label
      }
      if (index === 1) {
        secondPickedObj = firstPickedObj.children.filter((item) => item.value === value)[0]
        return secondPickedObj.label
      }
      if (index === 2) {
        return secondPickedObj.children.filter((item) => item.value === value)[0].label
      }
      return false
    }).join('')
  }
  return valueArr.join('')
}


class Select extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      label: this.initLabel(props)
    }
    this.handlePickerDone = this.handlePickerDone.bind(this)
    this.handleRequestClose = this.handleRequestClose.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ label: this.initLabel(nextProps) })
  }

  initLabel(props) {
    let {
      pickerData,
      value,
      placeholder,
    } = props

    if (!Array.isArray(pickerData)) pickerData = [pickerData]
    if (!Array.isArray(value)) value = [value]

    if (value.length) {
      if (pickerData.indexOf(value) === -1) {
        value = []
      } else {
        value = [value]
      }
      return getLabel(pickerData, value)
    }
    return <Text style={[styles.text, styles.placeholder]}>{placeholder}</Text>
  }

  handlePickerDone(value) {
    if (this.props.onChange) this.props.onChange(value)
    this.setState({ visible: false })
  }

  handleRequestClose() {
    this.setState({ visible: false })
  }

  render() {
    const {
      value,
      style,
      pickerData,
      pickerStyle,
      ...others
    } = this.props

    return (
      <View>
        <Text
          style={[styles.text, style]}
          onPress={() => this.setState({ visible: true })}
        >{this.state.label}</Text>
        <Picker
          style={pickerStyle}
          visible={this.state.visible}
          pickerData={pickerData}
          selectedValue={value}
          onPickerDone={this.handlePickerDone}
          onRequestClose={this.handleRequestClose}
          {...others}
        />
      </View>
    )
  }
}

Select.propTypes = {
  value: PropTypes.any,
  style: Text.propTypes.style,
  pickerData: PropTypes.array,
  pickerStyle: View.propTypes.style,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
}

export default Select
