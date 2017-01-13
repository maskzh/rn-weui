import React, { PropTypes } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import concat from 'lodash/concat'
import { Icon } from '../Icon'
import V from '../variable'

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
    height: 17 * V.baseLineHeight,
  },
  uploaderTitle: {
    fontSize: 17,
  },
  uploaderCounter: {
    fontSize: 17,
    color: '#888',
  },
  uploaderBody: {
    marginBottom: V.weuiCellGapH - (V.weuiCellGapV + V.weuiUploaderFileSpacing),
    marginRight: 0 - V.weuiUploaderFileSpacing,
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'hidden',
  },
  uploaderFile: {
    position: 'relative',
    width: V.weuiUploaderSize,
    height: V.weuiUploaderSize,
    marginRight: V.weuiUploaderFileSpacing,
    marginBottom: V.weuiUploaderFileSpacing,
  },
  uploaderFileImage: {
    width: V.weuiUploaderSize,
    height: V.weuiUploaderSize,
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
    marginRight: V.weuiUploaderFileSpacing,
    marginBottom: V.weuiUploaderFileSpacing,
    width: V.weuiUploaderSize - (V.weuiUploaderBorderWidth * 2),
    height: V.weuiUploaderSize - (V.weuiUploaderBorderWidth * 2),
    borderWidth: V.weuiUploaderBorderWidth,
    borderColor: V.weuiUploaderBorderColor,
  },
  uploaderAddButtonRec: {
    position: 'absolute',
    top: (V.weuiUploaderSize / 4) - 4,
    left: (V.weuiUploaderSize / 2) - 4,
    width: V.weuiUploaderBorderWidth + 1,
    height: V.weuiUploaderSize / 2,
    backgroundColor: V.weuiUploaderBorderColor,
  }
})

const Uploader = ({
  title = '图片上传',
  maxCount = 4,
  files = [],
  onChange,
  onFilePress,
  disabled = false,
  style,
  ...others
}) => {
  const options = {
    title,
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照',
    chooseFromLibraryButtonTitle: '从照片库选择...',
    cameraType: 'back', // 'front' or 'back'
    mediaType: 'photo', // 'photo' or 'video'
    // videoQuality: 'high', // 'low', 'medium', or 'high'
    // durationLimit: 10,
    // maxWidth: 100,
    // maxHeight: 100,
    // quality: 0.2,
    // rotation: 0, // 0 to 360
    // allowsEditing: true, // bool
    noData: true, // disables the base64
    // storageOptions: {
    //   skipBackup: true,
    //   path: 'images',
    //   cameraRoll: true,
    //   waitUntilSaved() {}
    // }
  }

  const showImagePicker = () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else {
        return onChange && onChange(concat(files, response), response)
      }
      return false
    })
  }

  return (
    <View style={[styles.uploader, style]} {...others}>
      <View style={styles.uploaderHeader}>
        <Text style={styles.uploaderTitle}>{title}</Text>
        <Text style={styles.uploaderCounter}>{files.length} / {maxCount}</Text>
      </View>
      <View style={styles.uploaderBody}>
        {files.map((file, idx) => {
          const { uri, error, status, isVertical } = file
          const source = { uri, isVertical }
          return (
            <TouchableOpacity
              key={idx}
              activeOpacity={0.6}
              onPress={() => !disabled && onFilePress(file)}
            >
              <View style={styles.uploaderFile}>
                <Image source={source} style={styles.uploaderFileImage} />
                {error || status ?
                  <View style={styles.uploaderStatus}>
                    {error ? <Icon name="warn" />
                    : <Text style={styles.uploaderStatusContent}>{status}</Text>}
                  </View> : null}
              </View>
            </TouchableOpacity>
          )
        })}
        {files.length < maxCount ?
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.uploaderAddButton}
            onPress={!disabled ? showImagePicker : null}
          >
            <View style={styles.uploaderAddButtonRec} />
            <View style={[styles.uploaderAddButtonRec, { transform: [{ rotate: '90deg' }] }]} />
          </TouchableOpacity>
        : null}
      </View>
    </View>
  )
}

Uploader.propTypes = {
  title: PropTypes.string,
  maxCount: PropTypes.number,
  onChange: PropTypes.func,
  onFilePress: PropTypes.func,
  files: PropTypes.array,
  disabled: PropTypes.bool,
  style: View.propTypes.style,
}

export default Uploader
