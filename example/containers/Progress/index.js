import React, { Component } from 'react'
import { Progress, Button, ButtonArea } from '../../../src'
import Page from '../../components/Page'
import $SK from 'react-native-stylekit'

class ProgressScene extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      timer: null,
      isUploading: false,
    }
    this.start = this.start.bind(this)
    this.pause = this.pause.bind(this)
  }
  componentWillUnmount() {
    if (this.state.timer) clearInterval(this.state.timer)
  }
  start() {
    if (this.state.isUploading) return
    this.state.isUploading = true
    this.upload()
  }
  pause() {
    this.setState({ isUploading: false })
  }
  upload() {
    if (!this.state.isUploading) return
    this.setState({ value: ++this.state.value % 100 })
    this.state.timer = setTimeout(this.upload.bind(this), 20)
  }
  render() {
    return (
      <Page spacing>
        <Progress value={this.state.value || 0} onCancel={this.pause} style={[$SK.mt15]} />
        <Progress value={this.state.value || 50} onCancel={this.pause} style={[$SK.mt15]} />
        <Progress value={this.state.value || 80} onCancel={this.pause} style={[$SK.mt15]} />
        <ButtonArea style={[$SK.mt15]}>
          <Button type="primary" onPress={this.start}>上传</Button>
        </ButtonArea>
      </Page>
    )
  }
}
export default ProgressScene
