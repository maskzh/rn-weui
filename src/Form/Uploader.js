import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { Icon } from '../Icon'
import ImagePicker from 'react-native-image-picker'
import $V from '../variable'
import concat from 'lodash/concat'

const styles = StyleSheet.create({
  uploader: {},
  uploaderHeader: {
    paddingTop: 0,
    paddingRight: 0,
    paddingLeft: 0,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 17 * $V.baseLineHeight,
  },
  uploaderTitle: {
    fontSize: 17,
  },
  uploaderCounter: {
    fontSize: 17,
    color: '#888',
  },
  uploaderBody: {
    marginBottom: $V.weuiCellGapH - ($V.weuiCellGapV + $V.weuiUploaderFileSpacing),
    marginRight: - $V.weuiUploaderFileSpacing,
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'hidden',
  },
  uploaderFile: {
    position: 'relative',
    width: $V.weuiUploaderSize,
    height: $V.weuiUploaderSize,
    marginRight: $V.weuiUploaderFileSpacing,
    marginBottom: $V.weuiUploaderFileSpacing,
  },
  uploaderFileImage: {
    width: $V.weuiUploaderSize,
    height: $V.weuiUploaderSize,
  },
  uploaderStatus: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, .5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploaderStatusContent: {
    color: '#fff',
  },
  uploaderRemove: {
    position: 'absolute',
    top: 2,
    right: 2,
  },
  uploaderAddButton: {
    position: 'relative',
    marginRight: $V.weuiUploaderFileSpacing,
    marginBottom: $V.weuiUploaderFileSpacing,
    width: $V.weuiUploaderSize - $V.weuiUploaderBorderWidth * 2,
    height: $V.weuiUploaderSize - $V.weuiUploaderBorderWidth * 2,
    borderWidth: $V.weuiUploaderBorderWidth,
    borderColor: $V.weuiUploaderBorderColor,
  },
  uploaderAddButtonRec: {
    position: 'absolute',
    top: $V.weuiUploaderSize / 4 - 4,
    left: $V.weuiUploaderSize / 2 - 4,
    width: $V.weuiUploaderBorderWidth + 1,
    height: $V.weuiUploaderSize / 2,
    backgroundColor: $V.weuiUploaderBorderColor,
  }
})

class Uploader extends Component {
  static defaultProps = {
    title: '图片上传',
    maxCount: 4,
    maxWidth: 500,
    files: [],
    onChange: undefined,
    onError: undefined,
    lang: {
      maxError: maxCount => `最多只能上传${maxCount}张图片`
    }
  }

  constructor(props) {
    super(props)
    this.options = {
      title: props.title,
      cancelButtonTitle: '取消',
      takePhotoButtonTitle: '拍照',
      chooseFromLibraryButtonTitle: '从照片库选择...',
      cameraType: 'back', // 'front' or 'back'
      mediaType: 'photo', // 'photo' or 'video'
      videoQuality: 'high', // 'low', 'medium', or 'high'
      // durationLimit: 10,
      maxWidth: 100,
      maxHeight: 100,
      aspectX: 2,
      aspectY: 1,
      quality: 0.2,
      angle: 0,
      allowsEditing: false,
      noData: false,
      // storageOptions: {
      //   skipBackup: true,
      //   path: 'images'
      // }
    }
    this.showImagePicker = this.showImagePicker.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }

  showImagePicker() {
    ImagePicker.showImagePicker(this.options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else {
        return this.props.onChange &&
        this.props.onChange(concat(this.props.files, response), response)
      }
      return false
    })
  }

  handleRemove(index, deleteFile) {
    if (this.props.onChange) {
      this.props.onChange(this.props.files.filter((file, idx) => idx !== index), deleteFile)
    }
  }

  render() {
    const {
      title,
      maxCount,
      files,
      style,
      ...others
    } = this.props

    return (
      <View style={[styles.uploader, style]} {...others}>
        <View style={styles.uploaderHeader}>
          <Text style={styles.uploaderTitle}>{title}</Text>
          <Text style={styles.uploaderCounter}>{files.length} / {maxCount}</Text>
        </View>
        <View style={styles.uploaderBody}>
          {files.map((file, idx) => {
            const { data, error, status, isVertical } = file
            const source = { uri: `data:image/jpeg;base64,${data}`, isStatic: true, isVertical }
            return (
              <View key={idx} style={styles.uploaderFile}>
                <Image source={source} style={styles.uploaderFileImage} />
                {error || status ?
                  <View style={styles.uploaderStatus}>
                    {error ? <Icon name="warn" />
                    : <Text style={styles.uploaderStatusContent}>{status}</Text>}
                  </View> : null}
                <Text
                  style={styles.uploaderRemove}
                  onPress={() => this.handleRemove(idx, file)}
                >
                  <Icon name="clear" />
                </Text>
              </View>
            )
          })}
          {files.length < maxCount ?
            <TouchableOpacity
              style={styles.uploaderAddButton}
              onPress={this.showImagePicker}
            >
              <View style={styles.uploaderAddButtonRec} />
              <View style={[styles.uploaderAddButtonRec, { transform: [{ rotate: '90deg' }] }]} />
            </TouchableOpacity>
          : null}
        </View>
      </View>
    )
  }
}

Uploader.propTypes = {
  title: PropTypes.string,
  maxCount: PropTypes.number,
  maxWidth: PropTypes.number,
  onChange: PropTypes.func,
  onError: PropTypes.func,
  files: PropTypes.array,
  lang: PropTypes.object,
  style: View.propTypes.style,
}

export default Uploader
