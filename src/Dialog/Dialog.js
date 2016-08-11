import React, { Component, PropTypes } from 'react'
import {
  Modal,
  View,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Animated,
  Easing,
  Dimensions,
} from 'react-native'
import StyleSheet from '../StyleSheet'
import $V from '../variable'

const styles = StyleSheet.create({
  dialogWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'rgba(0,0,0,.6)',
  },
  dialog: {
    width: Dimensions.get('window').width - 60,
    backgroundColor: $V.weuiDialogBackgroundColor,
    borderRadius: 3,
    overflow: 'hidden',
  },
  dialogHeader: {
    paddingTop: 1.2 * $V.baseFontSize,
    paddingBottom: 0.5 * $V.baseFontSize,
  },
  dialogTitle: {
    fontWeight: '400',
    fontSize: 17,
    textAlign: 'center',
  },
  dialogBody: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  dialogBodyText: {
    fontSize: 15,
    color: $V.globalTextColor,
    textAlign: 'center',
    lineHeight: 15 * $V.baseLineHeight,
    android: {
      lineHeight: Math.round(15 * $V.baseLineHeight),
    },
  },
  dialogFooter: {
    marginTop: 30,
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: $V.weuiDialogLineColor,
    borderStyle: 'solid',
  },
  dialogFooterOpr: {
    height: 42,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialogFooterOprWithBorder: {
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderColor: $V.weuiDialogLineColor,
    borderStyle: 'solid',
  },
  dialogFooterOprText: {
    fontSize: 17,
  },
  defaultDialogFooterOprText: {
    color: '#353535',
  },
  primaryDialogFooterOprText: {
    color: '#0BB20C',
  },
  warnDialogFooterOprText: {
    color: $V.globalWarnColor,
  }
})

const underlayColor = $V.weuiDialogLinkActiveBc

class Dialog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fadeAnim: new Animated.Value(0),
      visible: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible !== this.props.visible) {
      if (nextProps.visible) {
        this.setState({ visible: true })
        Animated.timing(
          this.state.fadeAnim,
          {
            toValue: 1,
            duration: this.props.duration || 200,
            easing: Easing.easeOut,
          }
        ).start()
      } else {
        Animated.timing(
          this.state.fadeAnim,
          {
            toValue: 0,
            duration: this.props.duration || 200,
            easing: Easing.easeOut,
          }
        ).start(() => this.setState({ visible: false }))
      }
    }
  }

  _renderButtons() {
    return this.props.buttons.map((button, idx) => {
      const {
        type,
        label,
        ...others
      } = button

      return (
        <TouchableHighlight
          key={idx}
          style={[styles.dialogFooterOpr, idx > 0 ? styles.dialogFooterOprWithBorder : {}]}
          underlayColor={underlayColor}
          {...others}
        >
          <Text
            style={[styles.dialogFooterOprText, styles[`${type}DialogFooterOprText`]]}
          >{label}</Text>
        </TouchableHighlight>
      )
    })
  }

  render() {
    const {
      title,
      style,
      wrapperStyle,
      headerStyle,
      titleStyle,
      bodyStyle,
      bodyTextStyle,
      footerStyle,
      children,
      onShow,
      onRequestClose,
    } = this.props

    const childrenWithProps = React.Children.map(children, (child) => {
      if (child.type.displayName === 'Text') {
        return React.cloneElement(child, {
          style: [styles.dialogBodyText, bodyTextStyle, child.props.style]
        })
      }
      return child
    })

    return (
      <Modal
        visible={this.state.visible}
        transparent={!false}
        onShow={onShow}
        onRequestClose={onRequestClose}
      >
        <TouchableWithoutFeedback onPress={onRequestClose}>
          <Animated.View
            style={[styles.dialogWrapper, wrapperStyle, { opacity: this.state.fadeAnim }]}
          >
            <Animated.View style={{ opacity: this.state.fadeAnim }}>
              <View style={[styles.dialog, style]}>
                <View style={[styles.dialogHeader, headerStyle]}>
                  <Text style={[styles.dialogTitle, titleStyle]}>{title}</Text>
                </View>
                <View style={[styles.dialogBody, bodyStyle]}>
                  {childrenWithProps}
                </View>
                <View style={[styles.dialogFooter, footerStyle]}>
                  {this._renderButtons()}
                </View>
              </View>
            </Animated.View>
          </Animated.View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  }
}

Dialog.propTypes = {
  title: PropTypes.string,
  buttons: PropTypes.array,
  visible: PropTypes.bool,
  onShow: PropTypes.func,
  duration: PropTypes.number,
  onRequestClose: PropTypes.func,
  style: View.propTypes.style,
  wrapperStyle: View.propTypes.style,
  headerStyle: View.propTypes.style,
  titleStyle: Text.propTypes.style,
  bodyStyle: View.propTypes.style,
  bodyTextStyle: Text.propTypes.style,
  footerStyle: View.propTypes.style,
  children: PropTypes.node
}

export default Dialog
