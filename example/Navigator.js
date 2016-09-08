import React, { Component } from 'react'
import {
  Platform,
  Navigator,
  StyleSheet
} from 'react-native'
import genNavBar from './components/NavBar'

// Scene
import Grid from './page/Grid'
import Button from './page/Button'
import Cell from './page/Cell'
import Toast from './page/Toast'
import Dialog from './page/Dialog'
import Progress from './page/Progress'
import Msg from './page/Msg'
import Article from './page/Article'
import ActionSheet from './page/ActionSheet'
import Icons from './page/Icons'
import Panel from './page/Panel'
import Tab from './page/Tab'
import SearchBar from './page/SearchBar'

const routes = [{
  scene: 'Button',
  component: Button
}, {
  scene: 'Cell',
  component: Cell
}, {
  scene: 'Toast',
  component: Toast
}, {
  scene: 'Dialog',
  component: Dialog
}, {
  scene: 'Progress',
  component: Progress
}, {
  scene: 'Msg',
  component: Msg
}, {
  scene: 'Article',
  component: Article
}, {
  scene: 'ActionSheet',
  component: ActionSheet
}, {
  scene: 'Icons',
  component: Icons
}, {
  scene: 'Panel',
  component: Panel
}, {
  scene: 'Tab',
  component: Tab
}, {
  scene: 'SearchBar',
  component: SearchBar
}]

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fbf9fe'
  }
})

class AppNavigator extends Component {
  renderScene(route, navigator) {
    global.__NAV__ = navigator
    const currentRoute = routes.filter((item) => item.scene === route.scene)[0]
    if (currentRoute) return <currentRoute.component {...route} navigator={navigator} />
    return <Grid navigator={navigator} />
  }
  render() {
    return (
      <Navigator
        ref="navigator"
        style={styles.page}
        configureScene={(route) => {
          if (Platform.OS === 'android') {
            return Navigator.SceneConfigs.FloatFromRightAndroid
          }
          if (route.shareSettings || route.friend) {
            return Navigator.SceneConfigs.FloatFromBottom
          }
          return Navigator.SceneConfigs.PushFromRight
        }}
        initialRoute={{ title: 'Weui' }}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            style={{ backgroundColor: 'black' }}
            routeMapper={genNavBar({})}
          />
        }
      />
    )
  }
}

export default AppNavigator
