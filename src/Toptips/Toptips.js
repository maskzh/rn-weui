import React, { Component, PropTypes } from 'react'
import { StyleSheet, Modal, Dimensions, Animated, View, Text, StatusBar, Easing } from 'react-native'
import V from '../variable'

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  toptips: {
    position: 'absolute',
    top: 0,
    left: 0,
    width,
    padding: 5,
    zIndex: 5000,
  },
  primaryToptips: {
    backgroundColor: V.weuiColorPrimary,
  },
  warnToptips: {
    backgroundColor: V.weuiColorWarn,
  },
  infoToptips: {
    backgroundColor: V.weuiLinkColorDefault,
  },
  toptipsText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#FFFFFF',
  }
})

class Toptips extends Component {
  constructor(props) {
    super(props)
    this.state = { visible: false, translateY: new Animated.Value(-height) }
    this.handleLayout = this.handleLayout.bind(this)
  }

  componentWillReceiveProps(nextProp) {
    if (this.props.visible !== nextProp.visible) {
      if (nextProp.visible) {
        this.setState({ visible: true })
        return
      }
      Animated.timing(this.state.translateY, {
        toValue: -this.height,
        duration: 150,
        easing: Easing.easeInOut,
      }).start(() => this.setState({ visible: false }))
    }
  }

  handleLayout() {
    this.toptips.measure((x, y, w, h) => {
      this.height = h
      this.setState({ translateY: new Animated.Value(-h) })
      Animated.timing(this.state.translateY, {
        toValue: 0,
        duration: 150,
        easing: Easing.easeInOut,
      }).start()
    })
  }

  render() {
    const { type = 'primary', onShow, onClose, style, textStyle, children } = this.props

    return (
      <Modal
        visible={this.state.visible}
        transparent={!false}
        onShow={onShow}
        onRequestClose={onClose}
      >
        <StatusBar hidden={!false} />
        <Animated.View
          style={[styles.toptips, styles[`${type}Toptips`], style, {
            transform: [{ translateY: this.state.translateY }]
          }]}
        >
          <View
            ref={(ref) => { this.toptips = ref }}
            onLayout={this.handleLayout}
          >
            <Text numberOfLines={2} style={[styles.toptipsText, textStyle]}>{children}</Text>
          </View>
        </Animated.View>
      </Modal>
    )
  }
}

Toptips.propTypes = {
  type: PropTypes.oneOf(['primary', 'warn', 'info']),
  visible: PropTypes.bool,
  onShow: PropTypes.func,
  onClose: PropTypes.func,
  style: View.propTypes.style,
  textStyle: Text.propTypes.style,
  children: PropTypes.node,
}

export default Toptips
