import React, { PropTypes } from 'react'
import {
  StyleSheet,
  Text,
} from 'react-native'
import $V from '../variable'

const styles = StyleSheet.create({
  h2: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 16 * 0.3,
    lineHeight: 16 * $V.baseLineHeight,
  }
})

const H2 = (props) =>
  <Text style={[styles.h2, props.style]}>
    {props.children}
  </Text>

H2.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node
}

export default H2
