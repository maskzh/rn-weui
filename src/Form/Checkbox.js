import React from 'react'
import {
  StyleSheet,
} from 'react-native'
import { Icon } from '../Icon'


const styles = StyleSheet.create({
  checkbox: {
    fontSize: 23,
    marginRight: 16 * 0.35,
  }
})

const Checkbox = (props) => {
  const {
    style,
    ...others
  } = props

  return (
    <Icon name="success" style={[styles.checkbox, style]} {...others} />
  )
}

Checkbox.propTypes = {
  style: Icon.propTypes.style,
}

export default Checkbox
