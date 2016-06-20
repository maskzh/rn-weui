import React, { PropTypes } from 'react'
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  ProgressBarAndroid,
  ActivityIndicatorIOS,
} from 'react-native'
import { Icon } from '../Icon'
import $V from '../variable'

const styles = StyleSheet.create({
  toastWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  toast: {
    width: $V.baseFontSize * 7.6,
    height: $V.baseFontSize * 7.6,
    backgroundColor: 'rgba(40, 40, 40, 0.75)',
    borderRadius: 5,
  },
  toastIcon: {
    marginTop: 22,
    color: '#fff',
    fontSize: 55,
    textAlign: 'center',
  },
  toastContent: {
    marginBottom: 15,
    color: '#fff',
    textAlign: 'center',
  },
  toastLoading: {
    marginTop: 30,
    marginBottom: 15
  }
})

const renderLoading = () => {
  if (Platform.OS === 'ios') {
    return <ActivityIndicatorIOS color="#fff" size="large" style={styles.toastLoading} />
  }
  return <ProgressBarAndroid color="#fff" styleAttr="Large" style={styles.toastLoading} />
}

const Toast = (props) => {
  const {
    icon = 'toast',
    show = false,
    onShow,
    onRequestClose,
    style,
    wrapperStyle,
    textStyle,
    children
  } = props

  return (
    <Modal
      animationType="fade"
      transparent={!false}
      visible={show}
      onShow={onShow}
      onRequestClose={onRequestClose}
    >
      <View style={[styles.toastWrapper, wrapperStyle]}>
        <View style={[styles.toast, style]}>
          {icon === 'loading' ? renderLoading() : <Icon name={icon} style={[styles.toastIcon]} />}
          <Text style={[styles.toastContent, textStyle]}>{children}</Text>
        </View>
      </View>
    </Modal>
  )
}

Toast.propTypes = {
  icon: PropTypes.string,
  show: PropTypes.bool,
  onShow: PropTypes.func,
  onRequestClose: PropTypes.func,
  wrapperStyle: View.propTypes.style,
  style: View.propTypes.style,
  textStyle: Text.propTypes.style,
  children: PropTypes.node
}

export default Toast

