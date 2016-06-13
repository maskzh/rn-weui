import React, { Component } from 'react'
import {
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native'
import {
  Cells,
  CellsTitle,
  CellsTips,
  Cell,
  CellHeader,
  CellBody,
  CellFooter,
  CellText,
  Input,
  Label,
  TextArea,
  Switch,
  Radio,
  Checkbox,
  Select,
  Uploader,
} from '../../../src'
import { concat } from 'lodash'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 64,
    backgroundColor: '#fbf9fe',
  },
})
const pickerData1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
const pickerData2 = [{
  label: 'a',
  value: 'value of a',
  children: [{
    label: 'a-a',
    value: 'value of a-a'
  }, {
    label: 'a-b',
    value: 'value of a-b',
    children: [{
      label: 'a-b-a',
      value: 'value of a-b-a'
    }, {
      label: 'a-b-b',
      value: 'value of a-b-b'
    }]
  }]
}, {
  label: 'b',
  value: 'value of b',
  children: [{
    label: 'b-a',
    value: 'value of b-a',
    children: [{
      label: 'b-a-a',
      value: 'value of b-a-a'
    }, {
      label: 'b-a-b',
      value: 'value of b-a-b'
    }]
  }, {
    label: 'b-b',
    value: 'value of b-b',
    children: [{
      label: 'b-b-a',
      value: 'value of b-b-a'
    }, {
      label: 'b-b-b',
      value: 'value of b-b-b'
    }]
  }]
}]

// const selectedValue = ['value of b', 'value of b-b', 'value of b-b-b']

class CellScene extends Component {
  constructor() {
    super()
    this.state = {
      selectVisiable1: false,
      selectVisiable2: false,
      selectText1: '',
      selectText2: '',
      files: [],
      radio: '',
      checkbox: [],
    }
    this.setSelect1 = this.setSelect1.bind(this)
    this.setSelect2 = this.setSelect2.bind(this)
    this.handleUpload = this.handleUpload.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleRadioChange = this.handleRadioChange.bind(this)
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
  }
  setSelect1(value) {
    this.setState({ selectVisiable1: false, selectText1: value.join(' ') })
  }
  setSelect2(value, label) {
    this.setState({ selectVisiable2: false, selectText2: label.join(' ') })
  }
  handleUpload(file) {
    this.setState({
      files: concat(this.state.files, file)
    })
  }
  handleRemove(index) {
    this.setState({
      files: this.state.files.filter((file, idx) => idx !== index)
    })
  }
  handleRadioChange(radio) {
    this.setState({ radio })
  }
  handleCheckboxChange(checkbox) {
    this.setState({ checkbox })
    console.log(checkbox)
  }
  render() {
    return (
      <ScrollView style={styles.wrapper}>
        <CellsTitle>带说明的列表项</CellsTitle>
        <Cells>
          <Cell>
            <CellBody><CellText>标题文字</CellText></CellBody>
            <CellFooter>说明文字</CellFooter>
          </Cell>
        </Cells>
        <CellsTitle>带图标、说明的列表项</CellsTitle>
        <Cells>
          <Cell>
            <CellHeader>
              <Image source={{ uri: 'http://weui.github.io/weui/images/icon_nav_button.png' }} />
            </CellHeader>
            <CellBody><CellText>标题文字</CellText></CellBody>
            <CellFooter>说明文字</CellFooter>
          </Cell>
          <Cell>
            <CellHeader>
              <Image source={{ uri: 'http://weui.github.io/weui/images/icon_nav_button.png' }} />
            </CellHeader>
            <CellBody><CellText>标题文字</CellText></CellBody>
            <CellFooter>说明文字</CellFooter>
          </Cell>
        </Cells>
        <CellsTitle>带跳转的列表项</CellsTitle>
        <Cells>
          <Cell access onPress={() => {}}>
            <CellBody><CellText>标题文字</CellText></CellBody>
            <CellFooter />
          </Cell>
          <Cell access onPress={() => {}}>
            <CellBody><CellText>标题文字</CellText></CellBody>
            <CellFooter />
          </Cell>
        </Cells>
        <CellsTitle>带说明、跳转的列表项</CellsTitle>
        <Cells>
          <Cell onPress={() => {}}>
            <CellBody><CellText>标题文字</CellText></CellBody>
            <CellFooter access>说明文字</CellFooter>
          </Cell>
          <Cell access onPress={() => {}}>
            <CellBody><CellText>标题文字</CellText></CellBody>
            <CellFooter>说明文字</CellFooter>
          </Cell>
        </Cells>
        <CellsTitle>带图标、说明、跳转的列表项</CellsTitle>
        <Cells>
          <Cell access onPress={() => {}}>
            <CellHeader>
              <Image source={{ uri: 'http://weui.github.io/weui/images/icon_nav_button.png' }} />
            </CellHeader>
            <CellBody><CellText>标题文字</CellText></CellBody>
            <CellFooter>说明文字</CellFooter>
          </Cell>
          <Cell access onPress={() => {}}>
            <CellHeader>
              <Image source={{ uri: 'http://weui.github.io/weui/images/icon_nav_button.png' }} />
            </CellHeader>
            <CellBody><CellText>标题文字</CellText></CellBody>
            <CellFooter>说明文字</CellFooter>
          </Cell>
        </Cells>
        <CellsTitle>单选列表项</CellsTitle>
        <Radio
          options={[
            {
              label: '选项一',
              value: 1
            }, {
              label: '选项二',
              value: 2
            }
          ]}
          onChange={this.handleRadioChange}
          value={this.state.radio}
        />
        <CellsTitle>复选列表项</CellsTitle>
        <Checkbox
          options={[
            {
              label: '选项一',
              value: 1
            }, {
              label: '选项二',
              value: 2
            }
          ]}
          onChange={this.handleCheckboxChange}
          value={this.state.checkbox}
        />
        <CellsTitle>开关</CellsTitle>
        <Cells>
          <Cell>
            <CellBody><CellText>标题文字</CellText></CellBody>
            <Switch />
          </Cell>
        </Cells>
        <CellsTitle>表单</CellsTitle>
        <Cells>
          <Cell>
            <CellHeader><Label>qq</Label></CellHeader>
            <CellBody><Input placeholder="请输入 qq 号" /></CellBody>
          </Cell>
          <Cell vcode>
            <CellHeader><Label>验证码</Label></CellHeader>
            <CellBody><Input placeholder="请输入验证码" /></CellBody>
            <CellFooter><Image source={{ uri: 'https://weui.io/images/vcode.jpg' }} /></CellFooter>
          </Cell>
          <Cell>
            <CellHeader><Label>银行卡</Label></CellHeader>
            <CellBody><Input placeholder="请输入银行卡号" /></CellBody>
          </Cell>
          <Cell vcode error>
            <CellHeader><Label>验证码</Label></CellHeader>
            <CellBody><Input placeholder="请输入验证码" /></CellBody>
            <CellFooter><Image source={{ uri: 'https://weui.io/images/vcode.jpg' }} /></CellFooter>
          </Cell>
        </Cells>
        <CellsTips>底部说明文字底部说明文字</CellsTips>

        <CellsTitle>图片上传</CellsTitle>
        <Cells>
          <Cell>
            <CellBody>
              <Uploader
                files={this.state.files}
                onChange={this.handleUpload}
                onRemove={this.handleRemove}
              />
            </CellBody>
          </Cell>
        </Cells>

        <CellsTitle>文本域</CellsTitle>
        <Cells>
          <Cell>
            <CellBody>
              <TextArea placeholder="请输入评论" />
            </CellBody>
          </Cell>
        </Cells>
        <CellsTitle>选择</CellsTitle>
        <Cells>
          <Cell onPress={() => this.setState({ selectVisiable1: true })}>
            <CellBody><CellText>{this.state.selectText1}</CellText></CellBody>
            <CellFooter access />
          </Cell>
          <Cell onPress={() => this.setState({ selectVisiable2: true })}>
            <CellHeader><Label>选择地区</Label></CellHeader>
            <CellBody><CellText>{this.state.selectText2}</CellText></CellBody>
            <CellFooter access />
          </Cell>
        </Cells>
        <Select
          visiable={this.state.selectVisiable1}
          pickerTitle="选择数字"
          pickerData={pickerData1}
          selectedValue={[1, 5, 9]}
          onPickerDone={this.setSelect1}
        />
        <Select
          visiable={this.state.selectVisiable2}
          pickerTitle="选择地区"
          pickerData={pickerData2}
          onPickerDone={this.setSelect2}
        />
      </ScrollView>
    )
  }
}

export default CellScene
