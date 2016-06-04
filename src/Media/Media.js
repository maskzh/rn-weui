import React, { PropTypes } from 'react'
import {
  TouchableHighlight,
  StyleSheet,
} from 'react-native'

const lineColor = '#E5E5E5'
const grayColor = '#999999'
const underlayColor = '#ECECEC'

StyleSheet.create({
  media: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 15,
    marginLeft: 15,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: lineColor,
  },
  mediaTitle: {
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 17 * 1.6,
    // numberOfLines 1, justifyConetent center
  },
  mediaDesc: {
    color: grayColor,
    fontSize: 13,
    lineHeight: 13 * 1.2,
    // numberOfLines 2 justifyConetent center
  },

  // text
  textMediaTitle: {
    marginBottom: 8,
  },
  textMediaInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
    paddingBottom: 5,
    fontSize: 13,
    color: '#CECECE',
    overflow: 'hidden',
  },
  textMediaInfoMeta: {
    paddingRight: 13 * 1,
  },
  textMediaInfoMetaExtra: {
    paddingLeft: 13 * 1,
    borderLeftWidth: 0.5,
    borderColor: '#CECECE',
  },

  // appmsg
  appmsgMedia: {
    flexDirection: 'row',
    alignItems: 'center',
  }
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
      style={[styles.button, ...buttonStyles, style]}
      underlayColor={underlayColor}
      {...touchableProps}
    >

    </TouchableHighlight>
  )

}

Media.propTypes = {
  type: PropTypes.oneOf(['text', 'appmsg', 'small_appmsg']),
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
  children: PropTypes.node
}
