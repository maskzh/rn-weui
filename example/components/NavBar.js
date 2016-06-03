import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = StyleSheet.create({
  navBarTitleText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 13,
  },
  navBarLeftButton: {
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  navBarLeftIcon: {
    color: '#fff',
    marginRight: 5,
  },
  navBarLeftText: {
    color: '#fff',
    fontSize: 16,
  },
  navBarRightButton: {
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  navBarRightIcon: {
    color: '#fff',
    marginLeft: 5,
  },
  navBarRightText: {
    color: '#fff',
    fontSize: 16,
  }
})

export default function genNavBar(args) {
  return {
    LeftButton(route, navigator, index, navState) {
      if (index === 0) return null
      const previousRoute = navState.routeStack[index - 1]
      const {
        leftText = previousRoute && previousRoute.title,
        leftIcon = 'angle-left',
        onLeftButtonPress = () => navigator.pop(),
      } = args
      return (
        <TouchableOpacity
          onPress={onLeftButtonPress}
          style={styles.navBarLeftButton}
        >
          {leftIcon ? <Icon name={leftIcon} size={24} style={styles.navBarLeftIcon} /> : null}
          {leftText ? <Text style={styles.navBarLeftText}>{leftText}</Text> : null}
        </TouchableOpacity>
      )
    },
    Title(route) {
      const {
        title = route.title || route.scene,
        onTitlePress
      } = args
      return (
        <TouchableOpacity onPress={onTitlePress}>
          <Text style={styles.navBarTitleText}>{title}</Text>
        </TouchableOpacity>
      )
    },
    RightButton() {
      const {
        rightText,
        rightIcon,
        onRightButtonPress
      } = args
      return (
        <TouchableOpacity
          onPress={onRightButtonPress}
          style={styles.navBarRightButton}
        >
          {rightText ? <Text style={styles.navBarRightText}>{rightText}</Text> : null}
          {rightIcon ? <Icon name={rightIcon} size={24} style={styles.navBarRightIcon} /> : null}
        </TouchableOpacity>
      )
    }
  }
}
