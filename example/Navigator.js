import React, { Component, PropTypes } from 'react'
import {
  Platform,
  Navigator,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import genNavBar from './components/NavBar'
import TabBar from './containers/TabBar'
import { TABBAR } from './containers/TabBar/utils'

// Scene
import Button from './containers/Button'
import Cell from './containers/Cell'
import Toast from './containers/Toast'
import Dialog from './containers/Dialog'
import Progress from './containers/Progress'
import Msg from './containers/Msg'
import Article from './containers/Article'
import ActionSheet from './containers/ActionSheet'
import Icons from './containers/Icons'
import Panel from './containers/Panel'
import Tab from './containers/Tab'
import SearchBar from './containers/SearchBar'


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
  container: {
    flex: 1,
    backgroundColor: '#fbf9fe'
  }
})

class AppNavigator extends Component {
  renderScene(route, navigator) {
    global.__NAV__ = navigator
    const currentRoute = routes.filter((item) => item.scene === route.scene)[0]
    if (currentRoute) return <currentRoute.component {...route} navigator={navigator} />
    return <TabBar navigator={navigator} />
  }
  render() {
    const { tab, navStyles, navMapper } = this.props
    return (
      <Navigator
        ref="navigator"
        style={styles.container}
        configureScene={(route) => {
          if (Platform.OS === 'android') {
            return Navigator.SceneConfigs.FloatFromRightAndroid
          }
          if (route.shareSettings || route.friend) {
            return Navigator.SceneConfigs.FloatFromBottom
          }
          return Navigator.SceneConfigs.PushFromRight
        }}
        initialRoute={{ title: TABBAR[tab] }}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            style={navStyles}
            routeMapper={genNavBar(navMapper)}
          />
        }
      />
    )
  }
}

AppNavigator.propTypes = {
  tab: PropTypes.string.isRequired,
  navMapper: PropTypes.object,
  navStyles: PropTypes.object,
}

function mapStateToProps(state) {
  const {
    navigation: { tab, navMapper, navStyles }
  } = state
  return { tab, navMapper, navStyles }
}
export default connect(mapStateToProps)(AppNavigator)
