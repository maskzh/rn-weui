import React, { Component } from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
} from 'react-native'
import {
  Cells,
  CellsTitle,
  CellsTips,
  Cell,
  CellHeader,
  CellBody,
  CellFooter,
  Input,
  Label,
  TextArea,
  Switch,
  RadioCells,
  CheckboxCells,
  Uploader,
  Select,
  Slider,
  Badge,
  Agreement,
  Gallery,
  GalleryDelete,
  Picker,
  Toptips
} from '../../src'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fbf9fe',
  },
})

const pickerData1 = [
  [{ label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }],
  [{ label: '4', value: '4' }, { label: '5', value: '5' }, { label: '6', value: '6' }],
  [{ label: '7', value: '7' }, { label: '8', value: '8' }, { label: '9', value: '9' }],
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

const pickerData3 = [{
  label: '北京',
  value: '1',
  children: [{
    label: '上海',
    value: '2',
    children: [{
      label: '浦东',
      value: '4',
      children: []
    }]
  }, {
    label: '天津',
    value: '3',
    children: [{
      label: '天行',
      value: '5',
      children: []
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
      checkbox: [1],
      text: '默认',
      switchValue: false,
      textarea: '',
      selectedValue: ['', '', ''],
      select: ['', '', ''],
      selectLabel: [],
      sliderValue: 5,
      galleryVisible: false,
      agreement: false,
      pickerVisible: false,
      picker: ['', '', ''],
      toptipsVisible: false,
    }
    this.setSelect = this.setSelect.bind(this)
    this.handleUploadChange = this.handleUploadChange.bind(this)
    this.handleRadioChange = this.handleRadioChange.bind(this)
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    this.handleSwitchChange = this.handleSwitchChange.bind(this)
    this.handleTextareaChange = this.handleTextareaChange.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.handleSliderChange = this.handleSliderChange.bind(this)
    this.updateState = this.updateState.bind(this)
    this.onToptipsShow = this.onToptipsShow.bind(this)
  }
  setSelect(value) {
    this.setState({ select: value })
  }
  updateState(key, value) {
    this.setState({ [key]: value })
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
  handleSliderChange(value) {
    this.setState({ sliderValue: value })
  }
  onToptipsShow() {
    this.setState({ toptipsVisible: true })
    setTimeout(() => this.setState({ toptipsVisible: false }), 3000)
  }
  render() {
    return (
      <ScrollView style={styles.wrapper}>
        <CellsTitle>带说明的列表项</CellsTitle>
        <Cells>
          <Cell>
            <CellBody>标题文字</CellBody>
            <CellFooter>说明文字</CellFooter>
          </Cell>
        </Cells>
        <CellsTitle>带图标、说明的列表项</CellsTitle>
        <Cells>
          <Cell>
            <CellHeader>
              <Image source={{ uri: 'https://weui.io/images/icon_tabbar.png' }} /><Badge preset="header">8</Badge>
            </CellHeader>
            <CellBody>标题文字</CellBody>
            <CellFooter>说明文字</CellFooter>
          </Cell>
          <Cell>
            <CellHeader>
              <Image source={{ uri: 'https://weui.io/images/icon_tabbar.png' }} />
            </CellHeader>
            <CellBody>标题文字</CellBody>
            <CellFooter>说明文字</CellFooter>
          </Cell>
        </Cells>
        <CellsTitle>带跳转的列表项</CellsTitle>
        <Cells>
          <Cell access onPress={() => {}}>
            <CellBody>标题文字</CellBody>
            <CellFooter />
          </Cell>
          <Cell access onPress={() => {}}>
            <CellBody>标题文字</CellBody>
            <CellFooter />
          </Cell>
        </Cells>
        <CellsTitle>带说明、跳转的列表项</CellsTitle>
        <Cells>
          <Cell onPress={() => {}}>
            <CellBody>标题文字</CellBody>
            <CellFooter access>说明文字</CellFooter>
          </Cell>
          <Cell access onPress={() => {}}>
            <CellBody>标题文字</CellBody>
            <CellFooter>说明文字</CellFooter>
          </Cell>
        </Cells>
        <CellsTitle>带图标、说明、跳转的列表项</CellsTitle>
        <Cells>
          <Cell access disabled onPress={() => {}}>
            <CellHeader>
              <Image source={{ uri: 'https://weui.io/images/icon_tabbar.png' }} />
            </CellHeader>
            <CellBody>标题文字</CellBody>
            <CellFooter>说明文字</CellFooter>
          </Cell>
          <Cell access onPress={() => {}}>
            <CellHeader>
              <Image source={{ uri: 'https://weui.io/images/icon_tabbar.png' }} />
            </CellHeader>
            <CellBody>标题文字</CellBody>
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
        >
          <Cell onPress={() => {}}>
            <CellBody><Text style={{ fontSize: 14, color: '#999' }}>more</Text></CellBody>
          </Cell>
        </RadioCells>
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
          disabled
        />
        <CellsTitle>开关</CellsTitle>
        <Cells>
          <Cell>
            <CellBody>标题文字</CellBody>
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
                disabled
                files={this.state.files}
                onChange={this.handleUploadChange}
                onFilePress={file => this.setState({ file, galleryVisible: true })}
              />
              <Gallery
                visible={this.state.galleryVisible}
                source={this.state.file}
                onPress={() => this.setState({ galleryVisible: false })}
              >
                <GalleryDelete
                  onPress={() => {
                    this.handleUploadChange(
                      this.state.files.filter(file => file.uri !== this.state.file.uri))
                    this.setState({ galleryVisible: false })
                  }}
                />
              </Gallery>
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
                options={pickerData1}
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
                options={pickerData2}
                value={this.state.select}
                onChange={this.setSelect}
                placeholder="请选择"
              />
            </CellBody>
            <CellFooter />
          </Cell>
        </Cells>
        <Cells>
          <Cell>
            <CellBody>
              <Slider
                value={this.state.sliderValue}
                onChange={this.handleSliderChange}
              />
            </CellBody>
            <CellFooter />
          </Cell>
        </Cells>
        <Agreement
          value={this.state.agreement}
          onChange={value => this.setState({ agreement: value })}
        >统一该协议</Agreement>

        <Text onPress={() => this.setState({ pickerVisible: true })}>呵呵</Text>
        <Text onPress={this.onToptipsShow}>Toptips</Text>

        <Picker
          visible={this.state.pickerVisible}
          value={this.state.picker}
          type="cascade"
          options={pickerData3}
          onChange={(value) => { this.setState({ picker: value, pickerVisible: false }); console.log(value) }}
          onClose={() => this.setState({ pickerVisible: false })}
        />
        <Toptips visible={this.state.toptipsVisible}>
          Oops, something is wrong!
        </Toptips>
        <View style={{ height: 100 }} />
      </ScrollView>
    )
  }
}

export default CellScene
