import React, { PropTypes } from 'react'
import { StyleSheet, Text } from 'react-native'
import V from '../variable'

const styles = StyleSheet.create({
  text: {
    fontSize: V.weuiBtnFontSize,
    textAlign: 'center',
    marginTop: (V.weuiBtnHeight - V.weuiBtnFontSize) / 2,
    marginBottom: (V.weuiBtnHeight - V.weuiBtnFontSize) / 2,
  },

  miniText: {
    fontSize: V.weuiBtnMiniFontSize,
    marginTop: ((V.weuiBtnMiniHeight * V.weuiBtnMiniFontSize) - V.weuiBtnMiniFontSize) / 2,
    marginBottom: ((V.weuiBtnMiniHeight * V.weuiBtnMiniFontSize) - V.weuiBtnMiniFontSize) / 2,
  },

  // primary
  primaryText: {
    color: V.weuiBtnFontColor,
  },

  // warn
  warnText: {
    color: V.weuiBtnFontColor,
  },

  // default
  defaultText: {
    color: V.weuiBtnDefaultFontColor,
  },

  // primaryPlain
  primaryPlainText: {
    color: V.weuiBtnPlainPrimaryColor,
  },

  // defaultPlain
  defaultPlainText: {
    color: V.weuiBtnPlainDefaultColor,
  },

  // disabled
  disabledText: {
    color: V.weuiBtnDisabledFontColor
  },

  defaultDisabledText: {
    color: V.weuiBtnDefaultDisabledFontColor
  },

  plainDisabledText: {
    color: 'rgba(0,0,0,.2)'
  }
})

const getTextStyles = ({ type, plain, size, disabled }) => {
  const config = [styles[`${type}Text`]]
  if (plain) config.push(styles[`${type}PlainText`])
  if (size === 'small') config.push(styles.miniText)
  if (disabled) {
    if (type === 'default') {
      config.push(styles.defaultDisabledText)
    } else {
      config.push(styles.disabledText)
    }
  }
  if (disabled && plain) config.push(styles.plainDisabledText)
  return config
}

const ButtonText = ({ disabled = false, type = 'default', size, plain = false, style, children, }) => {
  const textStyles = getTextStyles({ type, plain, size, disabled })

  return <Text style={[styles.text, ...textStyles, style]}>{children}</Text>
}

ButtonText.propTypes = {
  type: PropTypes.oneOf(['default', 'primary', 'warn']),
  size: PropTypes.oneOf(['small']),
  plain: PropTypes.bool,
  disabled: PropTypes.bool,
  style: Text.propTypes.style,
  children: PropTypes.node,
}

export default ButtonText
