import React, { PropTypes } from 'react'
import { TouchableHighlight, StyleSheet, View } from 'react-native'
import V from '../variable'

const underlayColor = '#ECECEC'

const styles = StyleSheet.create({
  media: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 15,
    marginLeft: 15,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    borderColor: V.weuiLineColorLight,
  },

  // appmsg
  appmsgMedia: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // small_appmsg
  small_appmsgMedia: {
    padding: 0,
    marginLeft: 0,
  },

  firstMedia: {
    borderTopWidth: 0
  }
})

const Media = ({ type, style, children, first, ...others }) =>
  <TouchableHighlight
    style={style}
    underlayColor={underlayColor}
    {...others}
  >
    <View
      style={[styles.media, styles[`${type}Media`] || {}, first ? styles.firstMedia : {}]}
    >{children}</View>
  </TouchableHighlight>

Media.propTypes = {
  type: PropTypes.oneOf(['text', 'appmsg', 'small_appmsg']),
  style: View.propTypes.style,
  children: PropTypes.node,
  first: PropTypes.bool,
}

export default Media
