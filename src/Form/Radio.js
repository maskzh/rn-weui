import React from 'react'
import {
  StyleSheet,
} from 'react-native'
import { Icon } from '../Icon'

const styles = StyleSheet.create({
  radio: {
    fontSize: 16,
  }
})

const Radio = (props) => {
  const {
    style,
    ...others
  } = props

  return (
    <Icon name="success_no_circle" style={[styles.radio, style]} {...others} />
  )
}

Radio.propTypes = {
  style: Icon.propTypes.style,
}

export default Radio
