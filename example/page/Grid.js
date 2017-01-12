import React, { PropTypes } from 'react'
import { View, Image } from 'react-native'
import NavigationBar from 'react-native-navbar'
import { Grids } from '../../src'

const GridScene = ({ navigator }) => {
  const grids = [{
    icon: <Image style={{ width: 28, height: 28 }} source={{ uri: 'https://weui.io/images/icon_tabbar.png' }} />,
    label: 'Button',
    onPress() { return navigator.push({ to: 'Button', title: 'Button' }) }
  }, {
    icon: <Image style={{ width: 28, height: 28 }} source={{ uri: 'https://weui.io/images/icon_tabbar.png' }} />,
    label: 'Cell',
    onPress() { return navigator.push({ to: 'Cell', title: 'Cell' }) }
  }, {
    icon: <Image style={{ width: 28, height: 28 }} source={{ uri: 'https://weui.io/images/icon_tabbar.png' }} />,
    label: 'Toast',
    onPress() { return navigator.push({ to: 'Toast', title: 'Toast' }) }
  }, {
    icon: <Image style={{ width: 28, height: 28 }} source={{ uri: 'https://weui.io/images/icon_tabbar.png' }} />,
    label: 'Dialog',
    onPress() { return navigator.push({ to: 'Dialog', title: 'Dialog' }) }
  }, {
    icon: <Image style={{ width: 28, height: 28 }} source={{ uri: 'https://weui.io/images/icon_tabbar.png' }} />,
    label: 'Progress',
    onPress() { return navigator.push({ to: 'Progress', title: 'Progress' }) }
  }, {
    icon: <Image style={{ width: 28, height: 28 }} source={{ uri: 'https://weui.io/images/icon_tabbar.png' }} />,
    label: 'Msg',
    onPress() { return navigator.push({ to: 'Msg', title: 'Msg' }) }
  }, {
    icon: <Image style={{ width: 28, height: 28 }} source={{ uri: 'https://weui.io/images/icon_tabbar.png' }} />,
    label: 'Article',
    onPress() { return navigator.push({ to: 'Article', title: 'Article' }) }
  }, {
    icon: <Image style={{ width: 28, height: 28 }} source={{ uri: 'https://weui.io/images/icon_tabbar.png' }} />,
    label: 'ActionSheet',
    onPress() { return navigator.push({ to: 'ActionSheet', title: 'ActionSheet' }) }
  }, {
    icon: <Image style={{ width: 28, height: 28 }} source={{ uri: 'https://weui.io/images/icon_tabbar.png' }} />,
    label: 'Icons',
    onPress() { return navigator.push({ to: 'Icons', title: 'Icons' }) }
  }, {
    icon: <Image style={{ width: 28, height: 28 }} source={{ uri: 'https://weui.io/images/icon_tabbar.png' }} />,
    label: 'Panel',
    onPress() { return navigator.push({ to: 'Panel', title: 'Panel' }) }
  }, {
    icon: <Image style={{ width: 28, height: 28 }} source={{ uri: 'https://weui.io/images/icon_tabbar.png' }} />,
    label: 'Tab',
    onPress() { return navigator.push({ to: 'Tab', title: 'Tab' }) }
  }, {
    icon: <Image style={{ width: 28, height: 28 }} source={{ uri: 'https://weui.io/images/icon_tabbar.png' }} />,
    label: 'SearchBar',
    onPress() { return navigator.push({ to: 'SearchBar', title: 'SearchBar' }) }
  }, {
    icon: <Image style={{ width: 28, height: 28 }} source={{ uri: 'https://weui.io/images/icon_tabbar.png' }} />,
    label: 'Badge',
    onPress() { return navigator.push({ to: 'Badge', title: 'Badge' }) }
  }]

  const NavigationBarProps = {
    title: {
      title: 'Grid',
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <NavigationBar {...NavigationBarProps} />
      <Grids data={grids} />
    </View>
  )
}

GridScene.propTypes = {
  navigator: PropTypes.object,
}

export default GridScene
