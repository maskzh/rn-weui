import React, { PropTypes } from 'react'
import { StyleSheet, TouchableHighlight, Text } from 'react-native'
import V from '../variable'

const styles = StyleSheet.create({
  previewBtn: {
    flex: 1,
    alignSelf: 'center',
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderColor: V.weuiDialogLineColor,
  },

  previewBtnText: {
    textAlign: 'center',
    color: V.weuiDialogLinkColor,
    lineHeight: 50,
    fontSize: V.baseFontSize,
  },
  previewBtnDefaultText: {
    color: V.weuiTextColorGray,
  },
  previewBtnPrimaryText: {
    color: '#0BB20C',
  },
})

const ButtonPreview = ({ primary, style, textStyle, children, ...others }) =>
  <TouchableHighlight underlayColor={V.weuiDialogLinkActiveBc} style={[styles.previewBtn, style]}>
    <Text style={[
      styles.previewBtnText,
      primary ? styles.previewBtnPrimaryText : styles.previewBtnDefaultText,
      textStyle
    ]} {...others}
    >{children}</Text>
  </TouchableHighlight>

ButtonPreview.propTypes = {
  primary: PropTypes.bool,
  style: TouchableHighlight.propTypes.style,
  textStyle: Text.propTypes.style,
  children: PropTypes.node,
}

export default ButtonPreview
