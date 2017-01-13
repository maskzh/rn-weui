import React, { PropTypes } from 'react'
import { Picker, StyleSheet } from 'react-native'

const Item = Picker.Item

const styles = StyleSheet.create({
  pickerItem: {
    flex: 1
  }
})

const PickerSection = ({ value, onChange, options = [], style, ...others }) =>
  <Picker
    style={[styles.pickerItem, style]}
    selectedValue={value}
    onValueChange={onChange}
    {...others}
  >
    {options.map((item, idx) => <Item key={idx} label={item.label} value={item.value} />)}
  </Picker>

PickerSection.propTypes = {
  options: PropTypes.array,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  style: Picker.propTypes.style,
}

export default PickerSection
