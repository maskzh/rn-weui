import React from 'react'
import {
  StyleSheet,
  View,
  Image,
} from 'react-native'
import {
  Media,
  MediaHeader,
  MediaBody,
  MediaTitle,
  MediaDescription,
  MediaInfo,
  MediaInfoMeta,
  MediaInfoMetaExtra,
} from '../../../src'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 64,
    backgroundColor: '#fbf9fe',
  }
})


const PanelScene = () =>
  <View style={styles.wrapper}>
    <Media type="appmsg" onPress={() => {}}>
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
    <Media type="text" onPress={() => {}}>
      <MediaTitle style={{ marginBottom: 8 }}>标题一</MediaTitle>
      <MediaDescription>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</MediaDescription>
    </Media>
    <Media type="text" onPress={() => {}}>
      <MediaTitle style={{ marginBottom: 8 }}>标题一</MediaTitle>
      <MediaDescription>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</MediaDescription>
    </Media>
    <Media type="text" onPress={() => {}}>
      <MediaTitle style={{ marginBottom: 8 }}>标题一</MediaTitle>
      <MediaDescription>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</MediaDescription>
      <MediaInfo>
        <MediaInfoMeta>文字来源</MediaInfoMeta>
        <MediaInfoMeta>时间</MediaInfoMeta>
        <MediaInfoMetaExtra>其他信息</MediaInfoMetaExtra>
      </MediaInfo>
    </Media>
  </View>

export default PanelScene
