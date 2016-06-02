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
import ButtonScene from './containers/ButtonScene'
import CellScene from './containers/CellScene'
import ToastScene from './containers/ToastScene'
import DialogScene from './containers/DialogScene'
import ProgressScene from './containers/ProgressScene'
import MsgScene from './containers/MsgScene'
import ArticleScene from './containers/ArticleScene'
import ActionSheetScene from './containers/ActionSheetScene'
import IconsScene from './containers/IconsScene'
import PanelScene from './containers/PanelScene'
import TabScene from './containers/TabScene'
import SearchBarScene from './containers/SearchBarScene'


const routes = [{
  scene: 'Button',
  component: ButtonScene
}, {
  scene: 'Cell',
  component: CellScene
}, {
  scene: 'Toast',
  component: ToastScene
}, {
  scene: 'Dialog',
  component: DialogScene
}, {
  scene: 'Progress',
  component: ProgressScene
}, {
  scene: 'Msg',
  component: MsgScene
}, {
  scene: 'Article',
  component: ArticleScene
}, {
  scene: 'ActionSheet',
  component: ActionSheetScene
}, {
  scene: 'Icons',
  component: IconsScene
}, {
  scene: 'Panel',
  component: PanelScene
}, {
  scene: 'Tab',
  component: TabScene
}, {
  scene: 'SearchBar',
  component: SearchBarScene
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
