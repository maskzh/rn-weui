import React, { PropTypes } from 'react'
import { Text } from 'react-native'
import { create } from '../StyleSheet'
import V from '../variable'

const styles = create({
  h1: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 18 * 0.9,
    lineHeight: 18 * V.baseLineHeight,
    android: {
      lineHeight: Math.round(18 * V.baseLineHeight),
    },
  }
})

const H1 = ({ style, children }) =>
  <Text style={[styles.h1, style]}>
    {children}
  </Text>

H1.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node
}

export default H1
