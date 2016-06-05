import React, { PropTypes } from 'react'
import {
  Image,
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native'
import $V from '../variable'

const $lineColor = '#E5E5E5'
const $grayColor = '#999999'
const styles = StyleSheet.create({
  PanelFooter: {
    paddingTop: 12, // 10
    paddingRight: 15,
    paddingBottom: 12,
    marginLeft: 15,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    borderColor: $lineColor,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  PanelFooterText: {
    flex: 1,
    color: $grayColor,
    fontSize: 14
  }
})
const PanelFooter = (props) => {
  const { children, style, access, ...others } = props
  return (
    <TouchableHighlight underlayColor={$V.itemActiveColor} {...others}>
      <View style={styles.PanelFooter}>
        <Text style={[styles.PanelFooterText, style]}>
          {children}
        </Text>
        {access ?
          <Image
            style={{ width: 7.5, height: 12, marginLeft: 5 }} source={require('./back_arrow.png')}
          /> : false}
      </View>
    </TouchableHighlight>
  )
}
PanelFooter.propTypes = {
  access: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
  others: PropTypes.object
}

export default PanelFooter
