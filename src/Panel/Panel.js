import React, { PropTypes } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

const lineColor = '#E5E5E5'
const styles = StyleSheet.create({
  panel: {
    backgroundColor: '#fff',
    marginTop: 10,
    overflow: 'hidden',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    borderColor: lineColor,
  }
})
const Panel = (props) => {
  const { children, style, ...others } = props
  return (
    <View style={[styles.panel, style]} {...others} >
      {children}
    </View>
  )
}
Panel.propTypes = {
  children: PropTypes.node,
  style: View.propTypes.style,
  others: PropTypes.object
}

export default Panel
