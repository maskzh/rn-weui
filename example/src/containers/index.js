import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'
import { ButtonArea, Button } from '../../weui'
import S from 'react-native-stylekit'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 74,
    backgroundColor: '#fbf9fe',
  },
})

const ButtonScene = () =>
  <View style={styles.wrapper}>
    <ButtonArea>
      <Button type="primary" onPress={() => {}} style={S.mt15}>按钮</Button>
      <Button type="primary" disabled onPress={() => {}} style={S.mt15}>按钮</Button>
    </ButtonArea>
    <ButtonArea>
      <Button type="warn" onPress={() => {}} style={S.mt15}>按钮</Button>
      <Button type="warn" disabled onPress={() => {}} style={S.mt15}>按钮</Button>
    </ButtonArea>
    <ButtonArea>
      <Button onPress={() => {}} style={S.mt15}>按钮</Button>
      <Button disabled onPress={() => {}} style={S.mt15}>按钮</Button>
    </ButtonArea>
    <ButtonArea style={{ paddingLeft: 80, paddingRight: 80 }}>
      <Button plain onPress={() => {}} style={S.mt15}>按钮</Button>
      <Button type="primary" plain onPress={() => {}} style={S.mt15}>按钮</Button>
    </ButtonArea>
    <ButtonArea
      direction="horizontal"
      style={[{ paddingLeft: 80, paddingRight: 80 }, S.spaceBetween]}
    >
      <Button type="primary" size="small" onPress={() => {}}>按钮</Button>
      <Button size="small" onPress={() => {}}>按钮</Button>
    </ButtonArea>
  </View>

export default ButtonScene
