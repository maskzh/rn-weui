import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import { ButtonArea, Button, Dialog } from '../../../src'
import S from 'react-native-stylekit'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 204,
    backgroundColor: '#fbf9fe',
  },
})

class DialogScene extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible1: false,
      visible2: false,
    }
    this.showDialog1 = this.showDialog1.bind(this)
    this.showDialog2 = this.showDialog2.bind(this)
    this.hideDialog1 = this.hideDialog1.bind(this)
    this.hideDialog2 = this.hideDialog2.bind(this)
  }
  showDialog1() {
    this.setState({
      visible1: true,
    })
  }
  showDialog2() {
    this.setState({
      visible2: true,
    })
  }
  hideDialog1() {
    this.setState({
      visible1: false,
    })
  }
  hideDialog2() {
    this.setState({
      visible2: false,
    })
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <ButtonArea>
          <Button
            type="primary"
            onPress={this.showDialog1}
          >点击弹出 Dialog 样式一</Button>
          <Button type="primary" onPress={this.showDialog2} style={S.mt15}>点击弹出 Dialog 样式二</Button>
        </ButtonArea>
        <Dialog
          visible={this.state.visible1}
          title="标题一"
          buttons={[
            {
              type: 'default',
              label: '确定',
              onPress: this.hideDialog1,
            }
          ]}
        ><Text>警告内容</Text></Dialog>
        <Dialog
          visible={this.state.visible2}
          title="标题二"
          buttons={[
            {
              type: 'default',
              label: '取消',
              onPress: this.hideDialog2,
            }, {
              type: 'primary',
              label: '确定',
              onPress: this.hideDialog2,
            },
          ]}
        ><Text>呵呵</Text></Dialog>
      </View>
    )
  }
}

export default DialogScene
