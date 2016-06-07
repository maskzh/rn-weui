import React, { Component } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'
import { ButtonArea, Button, ActionSheet } from '../../../src'

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
        <ActionSheet
          visible={this.state.visible}
          onRequestClose={this.hideActionSheet}
          menus={[
            {
              type: 'default',
              label: '操作一',
              onPress: this.hideActionSheet,
            }, {
              type: 'default',
              label: '操作二',
              onPress: this.hideActionSheet,
            }, {
              type: 'warn',
              label: '操作三',
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
      </View>
    )
  }
}

export default ActionSheetScene
