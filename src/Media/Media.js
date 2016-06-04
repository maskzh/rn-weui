import React, { PropTypes } from 'react'
import {
  TouchableHighlight,
  StyleSheet,
  View,
} from 'react-native'

const lineColor = '#E5E5E5'
const underlayColor = '#ECECEC'

const styles = StyleSheet.create({
  media: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 15,
    marginLeft: 15,
    borderTopWidth: 0.5,
    borderStyle: 'solid',
    borderColor: lineColor,
  },

  // appmsg
  appmsgMedia: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // small_appmsg
  small_appmsgMedia: {
    padding: 0,
  },
})

const Media = (props) => {
  const {
    type,
    style,
    children,
    ...others
  } = props

  return (
    <TouchableHighlight
      underlayColor={underlayColor}
      {...others}
    >
      <View style={[styles.media, styles[`${type}Media`] || {}, style]}>{children}</View>
    </TouchableHighlight>
  )
}

Media.propTypes = {
  type: PropTypes.oneOf(['text', 'appmsg', 'small_appmsg']),
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
  children: PropTypes.node
}

export default Media
