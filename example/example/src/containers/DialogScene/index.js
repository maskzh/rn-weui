import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Modal,
  Text
} from 'react-native'
import { ButtonArea, Button } from '../../../../src'
import S from 'react-native-stylekit'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 204,
    backgroundColor: '#fbf9fe',
  },
})

export default class DialogScene extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
    this._setModalVisible = this._setModalVisible.bind(this)
  }
  _setModalVisible(visible) {
    this.setState({ visible })
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <ButtonArea>
          <Button
            type="primary"
            onPress={() => { this._setModalVisible(true) }}
          >点击弹出 Dialog 样式一</Button>
          <Button type="primary" onPress={() => {}} style={S.mt15}>点击弹出 Dialog 样式二</Button>
        </ButtonArea>
        <Modal
          animationType={'none'}
          transparent={false}
          visible={this.state.visible}
          onRequestClose={() => { this._setModalVisible(false) }}
        >
          <View>
            <Text>呵呵</Text>
            <Button
              type="primary"
              onPress={() => { this._setModalVisible(false) }}
            >关闭</Button>
          </View>
        </Modal>
      </View>
    )
  }
}
