import React, { PropTypes } from 'react'
import { View, Text } from 'react-native'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { create } from '../StyleSheet'
import V from '../variable'

const styles = create({
  msg: {
    paddingTop: V.weuiMsgPaddingTop,
  },
  iconArea: {
    marginBottom: V.weuiMsgIconGap,
  },
  textArea: {
    marginBottom: V.weuiMsgTextGap,
    paddingLeft: 20,
    paddingRight: 20,
  },
  msgTitle: {
    marginBottom: V.weuiMsgTitleGap,
    fontWeight: '400',
    fontSize: 20,
    textAlign: 'center',
  },
  msgDesc: {
    fontSize: 14,
    color: V.weuiTextColorGray,
    textAlign: 'center',
    lineHeight: 14 * V.baseLineHeight,
    android: {
      lineHeight: Math.round(14 * V.baseLineHeight),
    },
  },
  oprArea: {
    marginTop: 0 - V.weuiBtnDefaultGap,
    marginBottom: V.weuiMsgOprGap,
    paddingLeft: V.weuiBtnDefaultGap,
    paddingRight: V.weuiBtnDefaultGap,
  },
  oprAreaButton: {
    marginTop: V.weuiBtnDefaultGap,
  },
  extraArea: {
    marginBottom: V.weuiMsgExtraAreaGap,
    fontSize: 14,
    color: V.weuiTextColorGray,
    textAlign: 'center',
    lineHeight: 14 * V.baseLineHeight,
    android: {
      lineHeight: Math.round(14 * V.baseLineHeight),
    },
  },
})

const _renderButtons = buttons =>
  buttons.map((button, idx) => {
    const { type, label, style, ...others } = button
    return (
      <Button
        key={idx}
        type={type}
        style={[styles.oprAreaButton, style]}
        {...others}
      >{label}</Button>
    )
  })

const Msg = ({ type = 'success', buttons = [], title, description, extraText }) =>
  <View style={styles.msg}>
    <View style={styles.iconArea}>
      <Icon name={type} msg />
    </View>
    <View style={styles.textArea}>
      <Text style={styles.msgTitle}>{title}</Text>
      <Text style={styles.msgDesc}>{description}</Text>
    </View>
    <View style={styles.oprArea}>
      {_renderButtons(buttons)}
    </View>
    <Text style={styles.extraArea}>{extraText}</Text>
  </View>

Msg.propTypes = {
  type: PropTypes.string,
  buttons: PropTypes.array,
  title: PropTypes.string,
  description: PropTypes.string,
  extraText: PropTypes.node,
}

export default Msg
