import React, { PropTypes } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import V from '../variable'

const styles = StyleSheet.create({
  badge: {
    width: 12 * 1.8,
    height: 12 * 1.5,
    borderRadius: 18,
    backgroundColor: V.weuiColorWarn,
    alignItems: 'center',
    justifyContent: 'center'
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    textAlign: 'center',
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

const Badge = ({ dot = false, preset = 'default', style, textStyle, children, ...others }) =>
  <View
    style={[styles.badge, styles[preset], dot ? styles.dot : {}, style]}
    {...others}
  >
    <Text style={[styles.badgeText, textStyle]}>{children}</Text>
  </View>

Badge.propTypes = {
  dot: PropTypes.bool,
  preset: PropTypes.oneOf(['default', 'header', 'body', 'footer']),
  style: View.propTypes.style,
  textStyle: Text.propTypes.style,
  children: PropTypes.node,
}

export default Badge
