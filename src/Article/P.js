import React, { PropTypes } from 'react'
import { Text } from 'react-native'
import { create } from '../StyleSheet'
import V from '../variable'

const styles = create({
  p: {
    fontSize: 15,
    marginBottom: 15 * 0.8,
    lineHeight: 15 * V.baseLineHeight,
    android: {
      lineHeight: Math.round(15 * V.baseLineHeight),
    },
  }
})

const P = ({ style, children }) =>
  <Text style={[styles.p, style]}>
    {children}
  </Text>

P.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node
}

export default P
