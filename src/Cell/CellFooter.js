import React, { PropTypes } from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import V from '../variable'

const styles = StyleSheet.create({
  cellFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  cellFooterText: {
    textAlign: 'center',
    color: V.weuiTextColorGray,
    fontSize: V.weuiCellFontSize
  },
  vcode: {
    width: 100,
    height: 44,
  }
})

const CellFooter = ({ children, style, access, ...others }) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (!child.type) return <Text style={[styles.cellFooterText, style]} {...others}>{child}</Text>
    if (child.type && child.type.displayName === 'Image' && !child.props.style) {
      return React.cloneElement(child, { style: [styles.vcode, child.props.style] })
    }
    return child
  })

  return (
    <View style={styles.cellFooter}>
      {childrenWithProps}
      {access ?
        <Image
          style={{ width: 7.5, height: 12, marginLeft: 5 }}
          source={require('../../assets/back_arrow.png')}
        /> : false}
    </View>
  )
}

CellFooter.propTypes = {
  access: PropTypes.bool,
  children: PropTypes.node,
  style: Text.propTypes.style,
}

export default CellFooter
