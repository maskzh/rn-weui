import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'
import { Msg } from '../../../src'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 64,
    backgroundColor: '#fbf9fe'
  }
})

const MsgScene = () =>
  <View style={styles.wrapper}>
    <Msg
      type="success"
      title="操作成功"
      description="内容详情，可根据实际需要安排"
      buttons={[{
        type: 'primary',
        label: '确定',
        onPress: () => {}
      }, {
        type: 'default',
        label: '取消',
        onPress: () => {}
      }]}
    />
  </View>

export default MsgScene
