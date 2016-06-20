import React, { PropTypes } from 'react'
import {
  View,
  Text,
  Dimensions
} from 'react-native'
import { Button, ButtonArea } from '../Button'
import { Icon } from '../Icon'
import StyleSheet from '../StyleSheet'
import $V from '../variable'

const styles = StyleSheet.create({
  msg: {
    paddingTop: $V.weuiMsgPaddingTop,
    height: Dimensions.get('window').height - 64,
  },
  iconArea: {
    marginBottom: $V.weuiMsgIconGap,
  },
  textArea: {
    marginBottom: $V.weuiMsgTextGap,
    paddingLeft: 20,
    paddingRight: 20,
  },
  msgTitle: {
    marginBottom: $V.weuiMsgTitleGap,
    fontWeight: '400',
    fontSize: 20,
    textAlign: 'center',
  },
  msgDesc: {
    fontSize: 14,
    color: $V.globalTextColor,
    textAlign: 'center',
    lineHeight: 14 * $V.baseLineHeight,
    android: {
      lineHeight: Math.round(14 * $V.baseLineHeight),
    },
  },
  oprArea: {
    marginTop: - $V.weuiBtnDefaultGap,
    marginBottom: $V.weuiMsgOprGap,
  },
  oprAreaButton: {
    marginTop: $V.weuiBtnDefaultGap,
  },
  extraArea: {
    marginBottom: $V.weuiMsgExtraAreaGap,
    fontSize: 14,
    color: $V.globalTextColor,
    textAlign: 'center',
    lineHeight: 14 * $V.baseLineHeight,
    android: {
      lineHeight: Math.round(14 * $V.baseLineHeight),
    },
  },
})

const _renderButtons = (buttons) =>
  buttons.map((button, idx) => {
    const { type, label, style, ...others } = button
    return (
      <Button
        key={idx}
        type={type}
        style={[styles.oprAreaButton, style]}{...others}
      >{label}</Button>
    )
  })

const Msg = (props) => {
  const {
    type = 'success',
    buttons = [],
    title,
    description,
    extraText
  } = props
  return (
    <View style={styles.msg}>
      <View style={styles.iconArea}>
        <Icon name={type} msg />
      </View>
      <View style={styles.textArea}>
        <Text style={styles.msgTitle}>{title}</Text>
        <Text style={styles.msgDesc}>{description}</Text>
      </View>
      <View style={styles.oprArea}>
        <ButtonArea>
          {_renderButtons(buttons)}
        </ButtonArea>
      </View>
      <Text style={styles.extraArea}>{extraText}</Text>
    </View>
  )
}

Msg.propTypes = {
  type: PropTypes.string,
  buttons: PropTypes.array,
  title: PropTypes.string,
  description: PropTypes.string,
  extraText: PropTypes.node,
}

export default Msg
