import React, { Component, PropTypes } from 'react'
import {
  TabBarIOS
} from 'react-native'
import { connect } from 'react-redux'
import { switchTab } from '../../actions/navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import { TABBAR } from './utils'

import Home from '../Home'
import Me from '../Me'
import List from '../List'

class TabBar extends Component {
  constructor(props) {
    super(props)
    this.switchTab = this.switchTab.bind(this)
  }
  switchTab(tab) {
    return () => {
      if (this.props.tab !== tab) {
        this.props.switchTab(tab)
        this.props.navigator.resetTo({ title: TABBAR[tab] })
      }
    }
  }
  render() {
    return (
      <TabBarIOS tintColor="#09BB07" translucent={!false} barTintColor="#f7f7fa">
        <Icon.TabBarItemIOS
          title={TABBAR.home}
          selected={this.props.tab === 'home'}
          onPress={this.switchTab('home')}
          iconName="home"
          iconSize={24}
        >
          <Home />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title={TABBAR.list}
          selected={this.props.tab === 'list'}
          onPress={this.switchTab('list')}
          iconName="bars"
          iconSize={24}
        >
          <List />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title={TABBAR.me}
          selected={this.props.tab === 'me'}
          onPress={this.switchTab('me')}
          iconName="user"
          iconSize={24}
        >
          <Me />
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    )
  }
}

TabBar.propTypes = {
  tab: PropTypes.string.isRequired,
  switchTab: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  const {
    navigation: { tab }
  } = state
  return {
    tab
  }
}

export default connect(mapStateToProps, {
  switchTab
})(TabBar)
