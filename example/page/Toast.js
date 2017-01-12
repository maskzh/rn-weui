import React, { Component } from 'react'
import { View } from 'react-native'
import NavigationBar from 'react-native-navbar'
import { Button, ButtonArea, Toast } from '../../src'
import $SK from 'react-native-stylekit'

class ToastScene extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visibleToast: false,
      visibleLoading: false,
      toastTimer: null,
      loadingTimer: null
    }
    this.showToast = this.showToast.bind(this)
    this.showLoadingToast = this.showLoadingToast.bind(this)
  }

  componentWillUnmount() {
    if (this.state.toastTimer) clearTimeout(this.state.toastTimer)
    if (this.state.loadingTimer) clearTimeout(this.state.loadingTimer)
  }

  showToast() {
    this.setState({ visibleToast: true })
    this.state.toastTimer = setTimeout(() => {
      this.setState({ visibleToast: false })
    }, 2000)
  }

  showLoadingToast() {
    this.setState({ visibleLoading: true })
    this.state.loadingTimer = setTimeout(() => {
      this.setState({ visibleLoading: false })
    }, 2000)
  }

  render() {
    const _self = this
    const NavigationBarProps = {
      leftButton: {
        title: '返回',
        handler() {
          _self.props.navigator.pop()
        },
      },
      title: {
        title: 'Toast',
      }
    }
    return (
      <View style={{ flex: 1 }}>
        <NavigationBar {...NavigationBarProps} />
        <ButtonArea style={{ paddingTop: 20 }}>
          <Button onPress={this.showToast}>点击弹出 Toast</Button>
          <Button
            onPress={this.showLoadingToast}
            style={$SK.mt15}
          >点击弹出 Loading Toast</Button>
        </ButtonArea>
        <Toast icon="success_no_circle" show={this.state.visibleToast}>加载成功</Toast>
        <Toast icon="loading" show={this.state.visibleLoading}>加载中...</Toast>
      </View>
    )
  }
}

export default ToastScene
