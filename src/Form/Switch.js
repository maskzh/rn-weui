import React, { PropTypes } from 'react'
import { Switch as RNSwitch } from 'react-native'

const Switch = ({ value, onChange, disabled, style, ...others }) =>
  <RNSwitch
    style={style}
    onValueChange={onChange}
    value={value}
    disabled={disabled}
    {...others}
  />

Switch.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  style: RNSwitch.propTypes.style,
}

export default Switch
