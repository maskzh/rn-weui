import React, { PropTypes } from 'react'
import { Text } from 'react-native'
import { create } from '../StyleSheet'
import V from '../variable'

const styles = create({
  h3: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 15 * V.baseLineHeight,
    android: {
      lineHeight: Math.round(15 * V.baseLineHeight),
    },
  }
})

const H3 = ({ style, children }) =>
  <Text style={[styles.h3, style]}>
    {children}
  </Text>

H3.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node
}

export default H3
