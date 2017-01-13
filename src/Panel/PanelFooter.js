import React, { PropTypes } from 'react'
import { Image, Text, View, TouchableHighlight, StyleSheet } from 'react-native'
import V from '../variable'

const styles = StyleSheet.create({
  PanelFooter: {
    paddingTop: 12, // 10
    paddingRight: 15,
    paddingBottom: 12,
    marginLeft: 15,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    borderColor: V.weuiLineColorLight,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  PanelFooterText: {
    flex: 1,
    color: V.weuiTextColorGray,
    fontSize: 14
  }
})

const PanelFooter = ({ children, style, textStyle, access, ...others }) =>
  <TouchableHighlight style={style} underlayColor={V.weuiBgColorActive} {...others}>
    <View style={styles.PanelFooter}>
      <Text style={[styles.PanelFooterText, textStyle]}>
        {children}
      </Text>
      {access ?
        <Image
          style={{ width: 7.5, height: 12, marginLeft: 5 }}
          source={require('../../assets/back_arrow.png')}
        /> : false}
    </View>
  </TouchableHighlight>

PanelFooter.propTypes = {
  access: PropTypes.bool,
  children: PropTypes.node,
  style: TouchableHighlight.propTypes.style,
  textStyle: Text.propTypes.style,
}

export default PanelFooter
