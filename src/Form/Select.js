import React, { Component, PropTypes } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Picker } from '../Picker'
import V from '../variable'

const styles = StyleSheet.create({
  text: {
    fontSize: V.weuiCellFontSize,
    marginTop: (V.weuiCellLineHeight - V.weuiCellFontSize) / 2,
    marginBottom: (V.weuiCellLineHeight - V.weuiCellFontSize) / 2,
  },
  placeholder: {
    color: V.weuiTextColorGray
  }
})

const valueToOptions = (value, options) => {
  let tmp = options
  return value.map((val, idx) => {
    if (idx === 0) return options
    tmp = (tmp.filter(option => option.value === value[idx - 1])[0] || tmp[0] || {}).children || []
    return tmp
  })
}

const getLabel = (value, options) => {
  const cascade = options.filter(item => item.children).length
  const _options = cascade ? valueToOptions(value, options) : options

  if (cascade) {
    return value.map((val, idx) =>
      (_options[idx].filter(option => option.value === val)[0] || {}).label
    ).join(' ')
  }
  return value.join(' ')
}

const initLabel = (arg) => {
  let _value = arg.value

  if (!Array.isArray(arg.value)) _value = [arg.value]

  if (_value.length && _value.every(item => item)) return getLabel(_value, arg.options)

  return <Text style={[styles.text, styles.placeholder]}>{arg.placeholder}</Text>
}

class Select extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      label: initLabel(props)
    }
    this.onChange = this.onChange.bind(this)
    this.onClose = this.onClose.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ label: initLabel(nextProps) })
  }

  onChange(value) {
    if (this.props.onChange) this.props.onChange(value)
    this.onClose()
  }

  onClose() {
    this.setState({ visible: false })
  }

  render() {
    const { value, options, pickerStyle, style, ...others } = this.props

    return (
      <View>
        <Text
          style={[styles.text, style]}
          onPress={() => this.setState({ visible: true })}
        >{this.state.label}</Text>
        <Picker
          style={pickerStyle}
          options={options}
          value={value}
          {...others}
          visible={this.state.visible}
          onClose={this.onClose}
          onChange={this.onChange}
        />
      </View>
    )
  }
}

Select.propTypes = {
  value: PropTypes.any,
  options: PropTypes.array,
  onChange: PropTypes.func,
  style: Text.propTypes.style,
  pickerStyle: View.propTypes.style,
  placeholder: PropTypes.string,
}

export default Select
