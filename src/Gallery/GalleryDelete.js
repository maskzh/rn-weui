import React from 'react'
import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native'
import { Icon } from '../Icon'

const styles = StyleSheet.create({
  galleryDelete: {
    flex: 1,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const GalleryDelete = ({ style, ...others }) =>
  <TouchableWithoutFeedback {...others}>
    <View style={[styles.galleryDelete, style]}><Icon name="delete" /></View>
  </TouchableWithoutFeedback>

GalleryDelete.propTypes = {
  style: View.propTypes.style
}

export default GalleryDelete
