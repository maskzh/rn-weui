import React, { PropTypes } from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import V from '../variable'

const styles = StyleSheet.create({
  cellFooter: {
    textAlign: 'center',
    color: V.globalTextColor,
    fontSize: V.weuiCellFontSize
  }
})
const CellFooter = (props) => {
  const { children, style, access, ...others } = props
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={[styles.cellFooter, style]} {...others}>
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
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  others: PropTypes.object
}

export default CellFooter
