import React, { Component, PropTypes } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import V from '../variable'

const styles = StyleSheet.create({
  weui_btn_area: {
    marginTop: 3,
    marginRight: V.weuiBtnDefaultGap,
    marginBottom: 5,
    marginLeft: V.weuiBtnDefaultGap
  },
  weui_btn_area_inline: {
    flexDirection: 'row'
  },
})

export default class ButtonArea extends Component {
  static defaultProps = {
    direction: 'vertical'
  }
  render() {
    const {
      direction,
      style,
      children
    } = this.props

    const buttonAreaStyle = [styles.weui_btn_area]
    if (direction === 'horizontal') {
      buttonAreaStyle.push(styles.weui_btn_area_inline)
    }

    return (
      <View style={[...buttonAreaStyle, style]}>
        {children}
      </View>
    )
  }
}

ButtonArea.propTypes = {
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  style: View.propTypes.style,
  children: PropTypes.node,
}
