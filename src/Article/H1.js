import React, { PropTypes } from 'react'
import {
  Text,
} from 'react-native'
import StyleSheet from '../StyleSheet'
import $V from '../variable'

const styles = StyleSheet.create({
  h1: {
    fontSize: 17,
    fontWeight: '400',
    marginBottom: 17 * 0.75,
    lineHeight: 17 * $V.baseLineHeight,
    android: {
      lineHeight: Math.round(17 * $V.baseLineHeight),
    },
  }
})

const H1 = (props) =>
  <Text style={[styles.h1, props.style]}>
    {props.children}
  </Text>

H1.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node
}

export default H1
