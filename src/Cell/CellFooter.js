import React, { PropTypes } from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import V from '../variable'

const styles = StyleSheet.create({
  cellFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cellFooterText: {
    textAlign: 'center',
    color: V.globalTextColor,
    fontSize: V.weuiCellFontSize
  },
})
const CellFooter = (props) => {
  const { children, style, access, ...others } = props
  return (
    <View style={styles.cellFooter}>
      <Text style={[styles.cellFooterText, style]} {...others}>
        {children}
      </Text>
      {access ?
        <Image
          style={{ width: 7.5, height: 12, marginLeft: 5 }} source={require('./back_arrow.png')}
        /> : false}
    </View>
  )
}
CellFooter.propTypes = {
  access: PropTypes.bool,
  children: PropTypes.node,
  style: Text.propTypes.style,
  others: PropTypes.object
}

export default CellFooter
