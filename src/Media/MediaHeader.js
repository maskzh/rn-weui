import React, { PropTypes } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import $V from '../variable'

const styles = StyleSheet.create({
  mediaHeader: {
    marginRight: $V.baseFontSize * 0.8,
    width: 60,
    height: 60,
    // lineHeight: 60,
    // textAlign: 'center',
  },
  mediaAppmsgThumb: {
    width: 60,
    height: 60,
  }
})

const MediaHeader = (props) => {
  const {
    style,
    children,
    ...others
  } = props

  const childrenWithProps = React.Children.map(children, child => {
    if (child.type.displayName === 'Image' && !child.props.style) {
      return React.cloneElement(child, { style: styles.mediaAppmsgThumb })
    }
    return child
  })

  return (
    <View style={[styles.mediaHeader, style]} {...others}>{childrenWithProps}</View>
  )
}

MediaHeader.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
  children: PropTypes.node,
}

export default MediaHeader
