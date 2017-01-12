import React from 'react'
import { View, ScrollView } from 'react-native'
import NavigationBar from 'react-native-navbar'
import { ButtonArea, Button, ButtonPreview } from '../../src'
import S from 'react-native-stylekit'

const ButtonScene = ({ navigator }) => {
  const NavigationBarProps = {
    leftButton: {
      title: '返回',
      handler() {
        navigator.pop()
      },
    },
    title: {
      title: 'Button',
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <NavigationBar {...NavigationBarProps} />
      <ScrollView style={{ flex: 1 }}>
        <ButtonArea>
          <Button type="primary" onPress={() => {}}>Normal</Button>
          <Button type="primary" disabled onPress={() => {}} style={S.mt15}>Disabled</Button>
        </ButtonArea>
        <ButtonArea style={{ paddingLeft: 20, paddingRight: 20 }}>
          <Button onPress={() => {}}>Secondary Normal</Button>
          <Button disabled onPress={() => {}} style={S.mt15}>Secondary Disabled</Button>
        </ButtonArea>
        <ButtonArea direction="horizontal" style={{ paddingLeft: 20, paddingRight: 20 }}>
          <Button type="warn" onPress={() => {}} style={S.flex1}>Warn Normal</Button>
          <Button type="warn" disabled onPress={() => {}} style={[S.ml15, S.flex1]}>Disabled</Button>
        </ButtonArea>
        <ButtonArea style={{ paddingLeft: 80, paddingRight: 80 }}>
          <Button type="primary" plain onPress={() => {}}>Button</Button>
          <Button plain disabled onPress={() => {}} style={S.mt15}>Button</Button>
          <Button plain onPress={() => {}} style={S.mt15}>Button</Button>
        </ButtonArea>
        <ButtonArea
          direction="horizontal"
          style={{ paddingLeft: 80, paddingRight: 80 }}
        >
          <Button type="primary" size="small" onPress={() => {}}>Button</Button>
          <Button type="warn" size="small" onPress={() => {}}>Button</Button>
          <Button size="small" onPress={() => {}}>Button</Button>
        </ButtonArea>
      </ScrollView>
    </View>
  )
}

export default ButtonScene
