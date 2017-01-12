import React, { PropTypes } from 'react'
import { View, StyleSheet } from 'react-native'
import V from '../variable'

const styles = StyleSheet.create({
  weuiBtnArea: {
    marginTop: V.weuiCellsMarginTop,
    marginRight: V.weuiBtnDefaultGap,
    marginBottom: 16 * 0.3,
    marginLeft: V.weuiBtnDefaultGap
  },
  weuiBtnAreaInline: {
    flexDirection: 'row'
  },
})

const ButtonArea = ({ direction = 'vertical', style, children }) => {
  const buttonAreaStyle = [styles.weuiBtnArea]
  if (direction === 'horizontal') {
    buttonAreaStyle.push(styles.weuiBtnAreaInline)
  }

  return <View style={[...buttonAreaStyle, style]}>{children}</View>
}

ButtonArea.propTypes = {
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  style: View.propTypes.style,
  children: PropTypes.node,
}

export default ButtonArea
