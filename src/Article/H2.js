import React, { PropTypes } from 'react'
import { Text } from 'react-native'
import { create } from '../StyleSheet'
import V from '../variable'

const styles = create({
  h2: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 16 * 0.34,
    lineHeight: 16 * V.baseLineHeight,
    android: {
      lineHeight: Math.round(16 * V.baseLineHeight),
    },
  }
})

const H2 = ({ style, children }) =>
  <Text style={[styles.h2, style]}>
    {children}
  </Text>

H2.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node
}

export default H2
