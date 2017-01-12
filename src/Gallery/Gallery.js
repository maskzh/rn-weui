import React, { Component, PropTypes } from 'react'
import { Modal, View, StyleSheet, Dimensions, StatusBar, ActivityIndicator } from 'react-native'
import PhotoView from 'react-native-photo-view'
import { Mask } from '../Mask'

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  galleryWrapper: {
    backgroundColor: '#000'
  },
  gallery: {
    width,
    height,
    resizeMode: 'contain'
  },
  loading: {
    position: 'absolute',
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center'
  },
  operation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#0D0D0D',
  },
})

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = { laoding: false }
  }

  render() {
    const {
      visible,
      source,
      onShow,
      onClose,
      onPress,
      maskStyle,
      style,
      oprStyle,
      minimumZoomScale = 0.5,
      children,
      ...others
    } = this.props

    return (
      <Modal
        visible={visible}
        transparent={!false}
        onShow={onShow}
        onRequestClose={onClose}
      >
        <StatusBar hidden={!false} />
        <Mask style={[styles.galleryWrapper, maskStyle]} onPress={onClose}>
          <View>
            <PhotoView
              source={source}
              style={[styles.gallery, style]}
              minimumZoomScale={minimumZoomScale}
              onTap={onPress || onClose}
              onLoadStart={() => this.setState({ loading: true })}
              onLoadEnd={() => this.setState({ loading: false })}
              {...others}
            />
            {this.state.loading ? (
              <View style={styles.loading}>
                <ActivityIndicator color="#fff" animating={this.state.loading} />
              </View>
            ) : false}
            <View style={[styles.operation, oprStyle]}>{children}</View>
          </View>
        </Mask>
      </Modal>
    )
  }
}

Gallery.propTypes = {
  visible: PropTypes.bool,
  onShow: PropTypes.func,
  onClose: PropTypes.func,
  onPress: PropTypes.func,
  maskStyle: View.propTypes.style,
  style: View.propTypes.style,
  oprStyle: View.propTypes.style,
  source: PropTypes.object,
  minimumZoomScale: PropTypes.number,
  children: PropTypes.node,
}

export default Gallery
