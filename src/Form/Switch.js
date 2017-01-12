import React, { PropTypes } from 'react'
import { Switch as RNSwitch } from 'react-native'

const Switch = ({ value, onChange, style, ...others }) =>
  <RNSwitch
    style={style}
    onValueChange={onChange}
    value={value}
    {...others}
  />

Switch.propTypes = {
  value: PropTypes.bool,
  style: RNSwitch.propTypes.style,
  onChange: PropTypes.func,
  onValueChange: PropTypes.func,
}

export default Switch
