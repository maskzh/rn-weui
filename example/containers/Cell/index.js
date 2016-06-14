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
  RadioCells,
  CheckboxCells,
  Uploader,
  Select,
} from '../../../src'

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
      files: [],
      radio: '',
      checkbox: [],
      text: '默认',
      switchValue: false,
      textarea: '',
      selectedValue: [],
      select: [],
      selectLabel: [],
    }
    this.setSelect = this.setSelect.bind(this)
    this.handleUploadChange = this.handleUploadChange.bind(this)
    this.handleRadioChange = this.handleRadioChange.bind(this)
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    this.handleSwitchChange = this.handleSwitchChange.bind(this)
    this.handleTextareaChange = this.handleTextareaChange.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
  }
  setSelect(value) {
    this.setState({ select: value })
  }
  handleUploadChange(files) {
    this.setState({ files })
  }
  handleRadioChange(radio) {
    this.setState({ radio })
  }
  handleCheckboxChange(checkbox) {
    this.setState({ checkbox })
  }
  handleChangeText(text) {
    this.setState({ text })
  }
  handleSwitchChange(switchValue) {
    this.setState({ switchValue })
  }
  handleTextareaChange(textarea) {
    this.setState({ textarea })
  }
  handleSelectChange(value) {
    this.setState({ selectedValue: value })
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
        <RadioCells
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
        <CheckboxCells
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
            <Switch
              onChange={this.handleSwitchChange}
              value={this.state.switchValue}
            />
          </Cell>
        </Cells>
        <CellsTitle>表单</CellsTitle>
        <Cells>
          <Cell>
            <CellHeader><Label>qq</Label></CellHeader>
            <CellBody>
              <Input
                placeholder="请输入 qq 号"
                value={this.state.text}
                onChangeText={this.handleChangeText}
              />
            </CellBody>
          </Cell>
          <Cell vcode error>
            <CellHeader><Label>验证码</Label></CellHeader>
            <CellBody><Input placeholder="请输入验证码" defaultValue="111" /></CellBody>
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
                onChange={this.handleUploadChange}
              />
            </CellBody>
          </Cell>
        </Cells>

        <CellsTitle>文本域</CellsTitle>
        <Cells>
          <Cell>
            <CellBody>
              <TextArea
                placeholder="请输入评论"
                value={this.state.textarea}
                onChange={this.handleTextareaChange}
              />
            </CellBody>
          </Cell>
        </Cells>
        <CellsTitle>选择</CellsTitle>
        <Cells>
          <Cell access>
            <CellBody>
              <Select
                pickerData={pickerData1}
                value={this.state.selectedValue}
                onChange={this.handleSelectChange}
                placeholder="请选择"
              />
            </CellBody>
            <CellFooter />
          </Cell>
          <Cell access>
            <CellHeader>
              <Label>选择地区</Label>
            </CellHeader>
            <CellBody>
              <Select
                pickerData={pickerData2}
                value={this.state.select}
                onChange={this.setSelect}
                placeholder="请选择"
              />
            </CellBody>
            <CellFooter />
          </Cell>
        </Cells>
      </ScrollView>
    )
  }
}

export default CellScene
