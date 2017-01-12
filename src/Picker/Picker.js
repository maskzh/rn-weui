import React, { Component, PropTypes } from 'react'
import { Picker as RNPicker, View, Text, StyleSheet } from 'react-native'
import { Popup, PopupHeader } from '../Popup'

const styles = StyleSheet.create({
  picker: {
    flex: 1
  }
})

const _getCascadeData = (pickerData, pickedValue) => {
  const secondArr = pickerData.filter(item =>
    item.value === pickedValue[0])

  const secondWheelData = secondArr.length ? secondArr[0].children : pickerData[0].children

  const thirdArr = secondWheelData.filter(item =>
    item.value === pickedValue[1])

  const thirdWheelData = thirdArr.length ? thirdArr[0].children : secondWheelData[0].children

  return {
    secondWheelData,
    thirdWheelData,
  }
}

const _getStateFromProps = (props) => {
  let { pickerData, selectedValue } = props
  let cascadeData = {}

  // compatible single wheel sence
  if (!Array.isArray(selectedValue)) {
    selectedValue = [selectedValue]
  }

  // picker 的类型
  this.pickerType = pickerData.filter(item => item.children).length
    ? 'cascade' : 'parallel'

  if (this.pickerType === 'parallel') {
    if (!Array.isArray(pickerData[0])) {
      pickerData = [pickerData]
    }
    this.pickedValue = JSON.parse(JSON.stringify(
      selectedValue.length ? selectedValue :
      [pickerData[0][0]]
        .concat(pickerData[1] ? pickerData[1][0] : [])
        .concat(pickerData[2] ? pickerData[2][0] : [])
    ))
  } else if (this.pickerType === 'cascade') {
    if (!Array.isArray(pickerData)) {
      pickerData = [pickerData]
    }
    // only support three stage
    cascadeData = this._getCascadeData(pickerData, selectedValue)
    this.pickedValue = JSON.parse(JSON.stringify(
      selectedValue.length ? selectedValue :
        [
          pickerData[0].value,
          cascadeData.secondWheelData[0].value
        ].concat(cascadeData.thirdWheelData ? cascadeData.thirdWheelData[0].value : [])
    ))
  }


  return {
    pickerData,
    selectedValue,

    // list of first wheel data
    firstWheelData: pickerData,
    firstPickedData: selectedValue[0],

    // list of second wheel data and pickedData
    secondWheelData: cascadeData.secondWheelData,
    secondPickedData: selectedValue[1],

    // third wheel selected value and pickedData
    thirdWheelData: cascadeData.thirdWheelData,
    thirdPickedData: selectedValue[2],
  }
}

class Picker extends Component {
  static defaultProps = {
    visible: false,
    style: {},
    pickerBtnText: '完成',
    pickerCancelBtnText: '取消',
    duration: 300,
    selectedValue: [],
    onPickerDone: () => {},
    onValueChange: () => {},
    onRequestClose: () => {},
  }

  handlePickerDone({ pickerType, pickedValue, pickerData }) {
    let pickerLabel
    if (this.pickerType === 'cascade') {
      pickerLabel = this.pickedValue.map((v, i) => {
        if (i === 0) return this.state.pickerData.filter(item => item.value === v)[0].label
        if (i === 1) return this.state.secondWheelData.filter(item => item.value === v)[0].label
        if (i === 2) return this.state.thirdWheelData.filter(item => item.value === v)[0].label
        return false
      })
    }
    this.props.onPickerDone(this.pickedValue, pickerLabel)

    this.props.onRequestClose()
  }

  _renderParallelWheel() {
    return this.state.pickerData.map((item, index) =>
      <View style={styles.pickerWheel} key={index}>
        <RNPicker
          selectedValue={this.state.selectedValue[index]}
          onValueChange={(value) => {
            this.pickedValue.splice(index, 1, value)
            this.setState({
              selectedValue: JSON.parse(JSON.stringify(this.pickedValue))
            })
            this.props.onValueChange(JSON.parse(JSON.stringify(this.pickedValue)), index)
          }}
        >
          {item.map((v, i) => <RNPicker.Item key={i} value={v} label={v.toString()} />)}
        </RNPicker>
      </View>
    )
  }

  _renderCascadeWheel() {
    const thirdWheel = this.state.thirdWheelData && (
      <View style={styles.pickerWheel}>
        <RNPicker
          ref={(ref) => { this.thirdWheel = ref }}
          selectedValue={this.state.thirdPickedData}
          onValueChange={(value) => {
            this.pickedValue.splice(2, 1, value)
            this.setState({
              thirdPickedData: value
            })
            this.props.onValueChange(JSON.parse(JSON.stringify(this.pickedValue)), 2)
          }}
        >
          {this.state.thirdWheelData.map((o, i) =>
            <RNPicker.Item
              key={i}
              value={o.value}
              label={o.label}
            />
          )}
        </RNPicker>
      </View>
    )

    return (
      <View style={[styles.pickerWrap, { width: this.width || width }]}>
        <View style={styles.pickerWheel}>
          <RNPicker
            ref={(ref) => { this.firstWheel = ref }}
            selectedValue={this.state.firstPickedData}
            onValueChange={(value) => {
              this.pickedValue.splice(0, 1, value)
              const cascadeData = this._getCascadeData(this.state.pickerData, this.pickedValue)
              // when onPicked, this.pickedValue will pass to the parent
              // when firstWheel changed, second and third will also change
              if (cascadeData.thirdWheelData) {
                this.pickedValue.splice(1, 2,
                  cascadeData.secondWheelData[0].value,
                  cascadeData.thirdWheelData[0].value)
              } else {
                this.pickedValue.splice(1, 2, cascadeData.secondWheelData[0].value)
              }

              this.setState({
                firstPickedData: value,
                secondWheelData: cascadeData.secondWheelData,
                secondPickedData: cascadeData.secondWheelData[0].value,
                thirdWheelData: cascadeData.thirdWheelData,
                thirdPickedData: cascadeData.thirdWheelData && cascadeData.thirdWheelData[0].value
              })

              this.props.onValueChange(JSON.parse(JSON.stringify(this.pickedValue)), 0)
              if (this.secondWheel && this.secondWheel.moveTo) {
                this.secondWheel.moveTo(0)
              }
              if (this.thirdWheel && this.thirdWheel.moveTo) {
                this.thirdWheel.moveTo(0)
              }
            }}
          >
            {this.state.firstWheelData.map((o, i) =>
              <RNPicker.Item
                key={i}
                value={o.value}
                label={o.label}
              />
            )}
          </RNPicker>
        </View>
        <View style={styles.pickerWheel}>
          <RNPicker
            ref={(ref) => { this.secondWheel = ref }}
            selectedValue={this.state.secondPickedData}
            onValueChange={(value) => {
              this.pickedValue.splice(1, 1, value)
              const cascadeData = this._getCascadeData(this.state.pickerData, this.pickedValue)
              if (cascadeData.thirdWheelData) {
                this.pickedValue.splice(2, 1, cascadeData.thirdWheelData[0].value)
              } else {
                this.pickedValue.splice(2, 1)
              }

              this.setState({
                secondPickedData: value,
                thirdWheelData: cascadeData.thirdWheelData,
                thirdPickedData: cascadeData.thirdWheelData && cascadeData.thirdWheelData[0].value
              })
              this.props.onValueChange(JSON.parse(JSON.stringify(this.pickedValue)), 1)
              if (this.thirdWheel && this.thirdWheel.moveTo) {
                this.thirdWheel.moveTo(0)
              }
            }}
          >
            {this.state.secondWheelData.map((o, i) =>
              <RNPicker.Item
                key={i}
                value={o.value}
                label={o.label}
              />
            )}
          </RNPicker>
        </View>
        {thirdWheel}
      </View>
    )
  }

  _renderWheel() {
    let wheel = null
    if (this.pickerType === 'parallel') {
      wheel = this._renderParallelWheel()
    } else if (this.pickerType === 'cascade') {
      wheel = this._renderCascadeWheel()
    }
    return wheel
  }

  render() {
    const {
      style,
    } = this.props

    return (
      <Popup {...others}>
        <PopupHeader />
        {this._renderWheel()}
      </Popup>
    )
  }
}

Picker.propTypes = {
  style: View.propTypes.style,
  pickerBtnText: PropTypes.string,
  pickerCancelBtnText: PropTypes.string,
  pickerBtnStyle: Text.propTypes.style,
  pickerTitle: PropTypes.string,
  pickerTitleStyle: Text.propTypes.style,
  pickerToolBarStyle: View.propTypes.style,
  duration: PropTypes.number,
  pickerData: PropTypes.array.isRequired,
  selectedValue: PropTypes.any.isRequired,
  onPickerDone: PropTypes.func,
  onValueChange: PropTypes.func,
  visible: PropTypes.bool,
  onShow: PropTypes.func,
  onRequestClose: PropTypes.func,
  wrapperStyle: View.propTypes.style,
}

export default Picker
