import React, { Component } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'
import { ButtonArea, Button, ActionSheet, Popup, PopupHeader, Gallery, GalleryDelete } from '../../src'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 204,
    backgroundColor: '#fbf9fe',
  },
})

class ActionSheetScene extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      popupVisible: false,
      galleryVisible: false,
    }
    this.showActionSheet = this.showActionSheet.bind(this)
    this.hideActionSheet = this.hideActionSheet.bind(this)
  }
  showActionSheet() {
    this.setState({
      visible: true,
    })
  }
  hideActionSheet() {
    this.setState({
      visible: false,
    })
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <ButtonArea>
          <Button
            type="primary"
            onPress={this.showActionSheet}
          >点击弹出 ActionSheet</Button>
        </ButtonArea>
        <ButtonArea>
          <Button
            type="primary"
            onPress={() => this.setState({ popupVisible: true })}
          >点击弹出 Popup</Button>
        </ButtonArea>
        <ButtonArea>
          <Button
            type="primary"
            onPress={() => this.setState({ galleryVisible: true })}
          >点击弹出 Gallery</Button>
        </ButtonArea>
        <ActionSheet
          autoDectect={false}
          type="android"
          visible={this.state.visible}
          onClose={this.hideActionSheet}
          menus={[
            {
              type: 'default',
              label: '拍照',
              onPress: this.hideActionSheet,
            }, {
              type: 'default',
              label: '从手机相册选择',
              onPress: this.hideActionSheet,
            }
          ]}
          actions={[
            {
              type: 'default',
              label: '取消',
              onPress: this.hideActionSheet,
            }
          ]}
        />
        <Popup
          visible={this.state.popupVisible}
          onClose={() => this.setState({ popupVisible: false })}
        >
          <PopupHeader left={{ label: '取消' }} right={{ label: '完成' }} />
          <View style={{ padding: 10, height: 200 }}>
            <Button
              type="primary"
              onPress={this.showActionSheet}
            >点击弹出 ActionSheet</Button>
          </View>
        </Popup>
        <Gallery
          visible={this.state.galleryVisible}
          source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
          onPress={() => this.setState({ galleryVisible: false })}
        ><GalleryDelete onPress={() => console.log('1')} /></Gallery>
      </View>
    )
  }
}

export default ActionSheetScene
