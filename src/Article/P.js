import React, { PropTypes } from 'react'
import {
  Text,
} from 'react-native'
import StyleSheet from '../StyleSheet'
import $V from '../variable'

const styles = StyleSheet.create({
  p: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
    lineHeight: 15 * $V.baseLineHeight,
    android: {
      lineHeight: Math.round(15 * $V.baseLineHeight),
    },
  }
})

const P = (props) =>
  <Text style={[styles.p, props.style]}>
    {props.children}
  </Text>

P.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node
}

export default P
