import React, { PropTypes } from 'react'
import {
  Switch as RNSwitch,
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  switch: {}
})

const Switch = (props) => {
  const {
    value,
    onChange,
    onValueChange,
    style,
    ...others
  } = props

  return (
    <RNSwitch
      style={[styles.switch, style]}
      onValueChange={onValueChange || onChange}
      value={value}
      {...others}
    />
  )
}

Switch.propTypes = {
  value: PropTypes.bool,
  style: RNSwitch.propTypes.style,
  onChange: PropTypes.func,
  onValueChange: PropTypes.func,
}

export default Switch
