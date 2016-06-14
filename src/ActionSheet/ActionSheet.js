import React, { Component, PropTypes } from 'react'
import {
  Modal,
  View,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
  Dimensions,
} from 'react-native'
import $V from '../variable'

const styles = StyleSheet.create({
  actionsheetWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'rgba(0,0,0,.6)',
  },
  actionsheet: {
    width: Dimensions.get('window').width,
    backgroundColor: $V.pageDefaultBackgroundColor,
  },
  actionsheetMenu: {
    backgroundColor: '#fff',
  },
  actionsheetAction: {
    marginTop: 6,
    backgroundColor: '#fff',
  },
  actionsheetCell: {
    paddingTop: 10,
    paddingBottom: 10,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: $V.weuiCellBorderColor,
    borderStyle: 'solid'
  },
  firstActionsheetCell: {
    borderTopWidth: 0,
  },
  actionsheetCellText: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: (18 * $V.baseLineHeight - 18) / 2,
    marginBottom: (18 * $V.baseLineHeight - 18) / 2,
  },
  defaultActionsheetCellText: {
    color: '#000',
  },
  primaryActionsheetCellText: {
    color: '#0BB20C',
  },
  warnActionsheetCellText: {
    color: $V.globalWarnColor,
  }
})

const underlayColor = $V.itemActiveColor

class ActionSheet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fadeAnim: new Animated.Value(0),
      visible: false,
      height: 0,
    }
    this.handleLayout = this.handleLayout.bind(this)
  }

  componentWillReceiveProps(nextProp) {
    if (this.props.visible !== nextProp.visible) {
      if (nextProp.visible) {
        this.setState({ visible: true })
        Animated.timing(
          this.state.fadeAnim,
          {
            toValue: 1,
            duration: this.props.duration || 200,
          }
        ).start()
      } else {
        Animated.timing(
          this.state.fadeAnim,
          {
            toValue: 0,
            duration: this.props.duration || 200,
          }
        ).start(() => this.setState({ visible: false }))
      }
    }
  }

  handleLayout() {
    this.refs.actionsheet.measure((x, y, width, height) => {
      this.setState({ height })
    })
  }

  _renderMenuItems() {
    return this.props.menus.map((menu, idx) => {
      const {
        type,
        label,
        style,
        textStyle,
        ...others,
      } = menu
      return (
        <TouchableHighlight
          key={idx}
          underlayColor={underlayColor}
          style={[styles.actionsheetCell, idx === 0 ? styles.firstActionsheetCell : {}, style]}
          {...others}
        >
          <Text
            style={[styles.actionsheetCellText, styles[`${type}ActionsheetCellText`], textStyle]}
          >{label}</Text>
        </TouchableHighlight>
      )
    })
  }

  _renderActions() {
    return this.props.actions.map((action, idx) => {
      const {
        type,
        label,
        style,
        textStyle,
        ...others,
      } = action
      return (
        <TouchableHighlight
          key={idx}
          underlayColor={underlayColor}
          style={[styles.actionsheetCell, idx === 0 ? styles.firstActionsheetCell : {}, style]}
          {...others}
        >
          <Text
            style={[styles.actionsheetCellText, styles[`${type}ActionsheetCellText`], textStyle]}
          >{label}</Text>
        </TouchableHighlight>
      )
    })
  }

  render() {
    const {
      style,
      wrapperStyle,
      onShow,
      onRequestClose,
    } = this.props

    return (
      <Modal
        visible={this.state.visible}
        transparent={!false}
        onShow={onShow}
        onRequestClose={onRequestClose}
      >
        <TouchableWithoutFeedback onPress={onRequestClose}>
          <Animated.View
            style={[
              styles.actionsheetWrapper,
              wrapperStyle,
              { opacity: this.state.fadeAnim }
            ]}
          >
            <Animated.View
              style={{
                transform: [{
                  translateY: this.state.fadeAnim.interpolate({
                    inputRange: [0, 1], outputRange: [this.state.height, 0] })
                }]
              }}
            >
              <View
                ref="actionsheet"
                onLayout={this.handleLayout}
                style={[styles.actionsheet, style]}
              >
                <View style={[styles.actionsheetMenu]}>
                  {this._renderMenuItems()}
                </View>
                <View style={[styles.actionsheetAction]}>
                  {this._renderActions()}
                </View>
              </View>
            </Animated.View>
          </Animated.View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  }
}

ActionSheet.propTypes = {
  menus: React.PropTypes.array,
  actions: React.PropTypes.array,
  visible: PropTypes.bool,
  onShow: PropTypes.func,
  onRequestClose: PropTypes.func,
  duration: PropTypes.number,
  style: View.propTypes.style,
  wrapperStyle: View.propTypes.style,
  children: PropTypes.node
}

export default ActionSheet
