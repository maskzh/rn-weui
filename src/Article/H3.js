import React, { PropTypes } from 'react'
import {
  Text,
  StyleSheet,
} from 'react-native'
import $V from '../variable'

const styles = StyleSheet.create({
  h3: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 15 * $V.baseLineHeight,
  }
})

const H3 = (props) =>
  <Text style={[styles.h3, props.style]}>
    {props.children}
  </Text>

H3.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node
}

export default H3
