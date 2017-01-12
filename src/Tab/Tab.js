// notice: Tab 不能有外层容器，否则不支持手势滑动
import React, { PropTypes } from 'react'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import NavBar from './NavBar'

const Tab = (props) => {
  const {
    style,
    children
  } = props

  return (
    <ScrollableTabView
      style={style}
      initialPage={0}
      renderTabBar={() => (
        <NavBar
          underlineColor={'#04BE02'}
          underlineHeight={2}
          backgroundColor={'#fff'}
          activeTextColor={'#04BE02'}
          inactiveTextColor={'#000'}
          style={{
            borderBottomWidth: 0.5,
          }}
          tabStyle={{
            paddingTop: 17.5,
            paddingBottom: 17.5,
            paddingLeft: 20,
            paddingRight: 20,
          }}
          textStyle={{ fontSize: 15 }}
        />)}
    >
      {children}
    </ScrollableTabView>
  )
}

Tab.propTypes = {
  style: ScrollableTabView.propTypes.style,
  children: PropTypes.node
}

export default Tab
