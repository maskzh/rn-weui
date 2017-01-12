import { StyleSheet, Platform } from 'react-native'

export function create(styles) {
  const platformStyles = {}
  Object.keys(styles).forEach((name) => {
    const { ios, android } = { ...styles[name] }
    delete styles[name].ios
    delete styles[name].android
    let { ...style } = { ...styles[name] }
    if (ios && Platform.OS === 'ios') {
      style = { ...style, ...ios }
    }
    if (android && Platform.OS === 'android') {
      style = { ...style, ...android }
    }
    platformStyles[name] = style
  })
  return StyleSheet.create(platformStyles)
}

export default { create }
