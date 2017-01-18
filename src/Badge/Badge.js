import React, { PropTypes } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import V from '../variable'

const styles = StyleSheet.create({
  badge: {
    color: '#FFFFFF',
    fontSize: 12,
    paddingLeft: 3.5,
    paddingRight: 3.5,
    lineHeight: 14,
    paddingTop: 1,
    textAlign: 'center',
    backgroundColor: V.weuiColorWarn,
    borderWidth: 1.5,
    borderColor: 'transparent',
    borderRadius: 8.5,
    overflow: 'hidden',
  },

  default: {},
  header: {
    position: 'absolute',
    top: 0 - (12 * 0.4),
    right: 0 - (12 * 0.4),
  },
  body: {
    marginLeft: 5,
  },
  footer: {
    marginLeft: 5,
    marginRight: 5,
  },

  dot: {
    width: 12 * 0.6,
    height: 12 * 0.6,
  },
})

const Badge = ({ dot = false, preset = 'default', style, children, ...others }) =>
  <Text
    style={[styles.badge, styles[preset], dot ? styles.dot : {}, style]}
    {...others}
  >
    {children}
  </Text>

Badge.propTypes = {
  dot: PropTypes.bool,
  preset: PropTypes.oneOf(['default', 'header', 'body', 'footer']),
  style: View.propTypes.style,
  children: PropTypes.node,
}

export default Badge
