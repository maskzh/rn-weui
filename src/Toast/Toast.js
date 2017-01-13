import React, { PropTypes } from 'react'
import { Modal, View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { Mask } from '../Mask'
import { Icon } from '../Icon'
import V from '../variable'

const styles = StyleSheet.create({
  toastWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toast: {
    width: V.baseFontSize * 7.6,
    height: V.baseFontSize * 7.6,
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

const Toast = ({
  icon = 'toast',
  show = false,
  onShow,
  onClose,
  style,
  maskStyle,
  textStyle,
  children
}) =>
  <Modal
    animationType="fade"
    transparent={!false}
    visible={show}
    onShow={onShow}
    onRequefstClose={onClose}
  >
    <Mask transparent={!false} style={[styles.toastWrapper, maskStyle]} onPress={onClose}>
      <View style={[styles.toast, style]}>
        {icon === 'loading'
          ? <ActivityIndicator color="#fff" size="large" style={styles.toastLoading} />
          : <Icon name={icon} style={[styles.toastIcon]} />}
        <Text style={[styles.toastContent, textStyle]}>{children}</Text>
      </View>
    </Mask>
  </Modal>

Toast.propTypes = {
  icon: PropTypes.string,
  show: PropTypes.bool,
  onShow: PropTypes.func,
  onClose: PropTypes.func,
  maskStyle: View.propTypes.style,
  style: View.propTypes.style,
  textStyle: Text.propTypes.style,
  children: PropTypes.node
}

export default Toast
