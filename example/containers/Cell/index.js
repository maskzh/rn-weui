import React from 'react'
import {
  StyleSheet,
  View,
  Image,
} from 'react-native'
import {
  Cells,
  CellsTitle,
  CellsTips,
  Cell,
  CellHeader,
  CellBody,
  CellFooter,
  CellText
} from '../../../src'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 84,
    backgroundColor: '#fbf9fe',
  },
})

const CellScene = () =>
  <View style={styles.wrapper}>
    <CellsTitle>带说明的列表项</CellsTitle>
    <Cells>
      <Cell>
        <CellBody><CellText>标题文字</CellText></CellBody>
        <CellFooter>说明文字</CellFooter>
      </Cell>
    </Cells>
    <CellsTitle>带图标、说明的列表项</CellsTitle>
    <Cells>
      <Cell>
        <CellHeader>
          <Image style={{ width: 24, height: 24, marginRight: 5 }} source={{ uri: 'http://weui.github.io/weui/images/icon_nav_button.png' }} />
        </CellHeader>
        <CellBody><CellText>标题文字</CellText></CellBody>
        <CellFooter>说明文字</CellFooter>
      </Cell>
      <Cell>
        <CellHeader>
          <Image style={{ width: 24, height: 24, marginRight: 5 }} source={{ uri: 'http://weui.github.io/weui/images/icon_nav_button.png' }} />
        </CellHeader>
        <CellBody><CellText>标题文字</CellText></CellBody>
        <CellFooter>说明文字</CellFooter>
      </Cell>
    </Cells>
    <CellsTitle>带跳转的列表项</CellsTitle>
    <Cells>
      <Cell onPress={() => {}}>
        <CellBody><CellText>标题文字</CellText></CellBody>
        <CellFooter access />
      </Cell>
      <Cell onPress={() => {}}>
        <CellBody><CellText>标题文字</CellText></CellBody>
        <CellFooter access />
      </Cell>
    </Cells>
    <CellsTitle>带说明、跳转的列表项</CellsTitle>
    <Cells>
      <Cell onPress={() => {}}>
        <CellBody><CellText>标题文字</CellText></CellBody>
        <CellFooter access>说明文字</CellFooter>
      </Cell>
      <Cell onPress={() => {}}>
        <CellBody><CellText>标题文字</CellText></CellBody>
        <CellFooter access>说明文字</CellFooter>
      </Cell>
    </Cells>
    <CellsTips>说明</CellsTips>
  </View>

export default CellScene
