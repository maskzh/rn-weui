import React, { PropTypes } from 'react'
import {
  StyleSheet,
  Text,
} from 'react-native'
import $V from '../variable'

const styles = StyleSheet.create({
  text: {
    fontSize: $V.weuiBtnFontSize,
    textAlign: 'center',
    marginTop: ($V.weuiBtnHeight - $V.weuiBtnFontSize) / 2,
    marginBottom: ($V.weuiBtnHeight - $V.weuiBtnFontSize) / 2,
  },

  miniText: {
    fontSize: $V.weuiBtnMiniFontSize,
    marginTop: ($V.weuiBtnMiniHeight * $V.weuiBtnMiniFontSize
      - $V.weuiBtnMiniFontSize) / 2,
    marginBottom: ($V.weuiBtnMiniHeight * $V.weuiBtnMiniFontSize
      - $V.weuiBtnMiniFontSize) / 2,
  },

  // primary
  primaryText: {
    color: $V.weuiBtnFontColor,
  },

  // warn
  warnText: {
    color: $V.weuiBtnFontColor,
  },

  // default
  defaultText: {
    color: $V.weuiBtnDefaultFontColor,
  },

  // primaryPlain
  primaryPlainText: {
    color: $V.weuiBtnPrimaryBg,
  },

  // defaultPlain
  defaultPlainText: {
    color: '#5A5A5A',
  },

  // disabled
  disabledText: {
    color: $V.weuiBtnDisabledFontColor
  },
  defaultDisabledText: {
    color: $V.weuiBtnDefaultDisabledFontColor
  },
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
  return config
}

const ButtonText = (props) => {
  const {
    disabled = false,
    type = 'default',
    size,
    plain = false,
    style,
    children,
  } = props

  const textStyles = getTextStyles({ type, plain, size, disabled })

  return (
    <Text style={[styles.text, ...textStyles, style]}>{children}</Text>
  )
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
