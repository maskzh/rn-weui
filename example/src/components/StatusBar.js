import React from 'react'
import { StatusBar } from 'react-native'

const StatusBarProps = {
  animated: true,
  hidden: false,
  barStyle: 'light-content',
  networkActivityIndicatorVisible: false,
  showHideTransition: 'slide',
  // backgroundColor: '',
  translucent: true
}

export default () =>
  <StatusBar {...StatusBarProps} />
