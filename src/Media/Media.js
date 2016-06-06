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
    borderTopWidth: StyleSheet.hairlineWidth,
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
    marginLeft: 0,
  },
})

const Media = (props) => {
  const {
    type,
    style,
    children,
    ...others
  } = props

  const childrenWithProps = React.Children.map(children, child => {
    if (child.type.name === 'MediaTitle') {
      return React.cloneElement(child, { style: { marginBottom: 8 } })
    }
    return child
  })

  return (
    <TouchableHighlight
      underlayColor={underlayColor}
      {...others}
    >
      <View style={[styles.media, styles[`${type}Media`] || {}, style]}>{childrenWithProps}</View>
    </TouchableHighlight>
  )
}

Media.propTypes = {
  type: PropTypes.oneOf(['text', 'appmsg', 'small_appmsg']),
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
  children: PropTypes.node
}

export default Media
