import React from 'react'
import {
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native'
import {
  Panel,
  PanelHeader,
  PanelBody,
  PanelFooter,
  Media,
  MediaHeader,
  MediaBody,
  MediaTitle,
  MediaDescription,
  MediaInfo,
  MediaInfoMeta,
  Cell,
  CellHeader,
  CellBody,
  CellFooter,
  CellText,
} from '../../../src'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 64,
    backgroundColor: '#fbf9fe',
  }
})


const PanelScene = () =>
  <ScrollView style={styles.wrapper}>
    <Panel>
      <PanelHeader>图文组合列表</PanelHeader>
      <PanelBody>
        <Media type="appmsg">
          <MediaHeader>
            <Image source={{ uri: 'http://weui.github.io/weui/images/icon_nav_button.png' }} />
          </MediaHeader>
          <MediaBody>
            <MediaTitle>标题一</MediaTitle>
            <MediaDescription>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</MediaDescription>
          </MediaBody>
        </Media>
        <Media type="appmsg">
          <MediaHeader>
            <Image source={{ uri: 'http://weui.github.io/weui/images/icon_nav_button.png' }} />
          </MediaHeader>
          <MediaBody>
            <MediaTitle>标题一</MediaTitle>
            <MediaDescription>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</MediaDescription>
          </MediaBody>
        </Media>
      </PanelBody>
      <PanelFooter onPress={() => {}} access>查看更多</PanelFooter>
    </Panel>

    <Panel>
      <PanelHeader>文字组合列表</PanelHeader>
      <PanelBody>
        <Media type="text" onPress={() => {}}>
          <MediaTitle>标题一</MediaTitle>
          <MediaDescription>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</MediaDescription>
        </Media>
        <Media type="text" onPress={() => {}}>
          <MediaTitle>标题一</MediaTitle>
          <MediaDescription>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</MediaDescription>
        </Media>
      </PanelBody>
      <PanelFooter onPress={() => {}} access>查看更多</PanelFooter>
    </Panel>

    <Panel>
      <PanelHeader>小图文组合列表</PanelHeader>
      <PanelBody>
        <Cell onPress={() => {}}>
          <CellHeader>
            <Image style={{ width: 24, height: 24, marginRight: 5 }} source={{ uri: 'http://weui.github.io/weui/images/icon_nav_button.png' }} />
          </CellHeader>
          <CellBody><CellText>标题文字</CellText></CellBody>
          <CellFooter access />
        </Cell>
        <Cell onPress={() => {}}>
          <CellHeader>
            <Image style={{ width: 24, height: 24, marginRight: 5 }} source={{ uri: 'http://weui.github.io/weui/images/icon_nav_button.png' }} />
          </CellHeader>
          <CellBody><CellText>标题文字</CellText></CellBody>
          <CellFooter access />
        </Cell>
      </PanelBody>
    </Panel>

    <Panel>
      <PanelHeader>文字列表附来源</PanelHeader>
      <PanelBody>
        <Media type="text">
          <MediaTitle>标题一</MediaTitle>
          <MediaDescription>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</MediaDescription>
          <MediaInfo>
            <MediaInfoMeta>文字来源</MediaInfoMeta>
            <MediaInfoMeta>时间</MediaInfoMeta>
            <MediaInfoMeta extra>其他信息</MediaInfoMeta>
          </MediaInfo>
        </Media>
      </PanelBody>
    </Panel>
  </ScrollView>

export default PanelScene
