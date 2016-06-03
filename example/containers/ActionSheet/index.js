import React from 'react'
import {
  StyleSheet,
  View,
  ActionSheetIOS
} from 'react-native'
import { ButtonArea, Button } from '../../../src'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 154,
    backgroundColor: '#fbf9fe',
  }
})

const showActionSheet = () =>
  ActionSheetIOS.showActionSheetWithOptions({
    options: ['示例菜单', '示例菜单', '示例菜单', '删除', '取消'],
    cancelButtonIndex: 4,
    destructiveButtonIndex: 3,
    title: 'ActionSheet',
    message: 'action sheet',
  }, () => {})
const ActionSheet = () =>
  <View style={styles.wrapper}>
    <ButtonArea>
      <Button type="primary" onPress={showActionSheet}>点击上拉 ActionSheet</Button>
    </ButtonArea>
  </View>

export default ActionSheet
