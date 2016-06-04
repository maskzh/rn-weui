import React, { PropTypes } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
// import Text from '../Text'

const styles = StyleSheet.create({
  mediaInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
    paddingBottom: 5,
    overflow: 'hidden',
  }
})
const MediaInfo = (props) => {
  const {
    style,
    children,
    ...others
  } = props

  return (
    <View style={[styles.mediaInfo, style]} {...others}>
      {children}
    </View>
  )
}

MediaInfo.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
  children: PropTypes.node,
}

export default MediaInfo
