import React from 'react'
import { Text, StyleSheet } from 'react-native'
import wrap from 'lodash/wrap'

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: ''
  }
})

Text.prototype.render = wrap(Text.prototype.render, (func, ...args) => {
  const originText = func.apply(this, args)
  return React.cloneElement(originText, {
    style: [
      originText.props.style,
      styles.defaultFont
    ]
  })
})
