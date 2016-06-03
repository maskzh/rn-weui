import React from 'react'
import {
  StyleSheet,
  View,
  Alert
} from 'react-native'
import { ButtonArea, Button } from '../../../src'
import S from 'react-native-stylekit'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 204,
    backgroundColor: '#fbf9fe',
  },
})
const alert1 = () =>
  Alert.alert(
    'Alert Title',
    'My Alert Msg',
    [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]
  )
const alert2 = () =>
  Alert.alert(
    'Alert Title',
    'My Alert Msg',
    [
      { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]
  )
export default () =>
  <View style={styles.wrapper}>
    <ButtonArea>
      <Button
        type="primary"
        onPress={alert1}
      >点击弹出 Dialog 样式一</Button>
      <Button type="primary" onPress={alert2} style={S.mt15}>点击弹出 Dialog 样式二</Button>
    </ButtonArea>
  </View>
