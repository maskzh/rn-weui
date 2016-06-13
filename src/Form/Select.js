import React, { Component, PropTypes } from 'react'
import {
  Picker,
  View,
  Text,
  Animated,
  Dimensions,
  StyleSheet,
} from 'react-native'

const { width, height } = Dimensions.get('window')
const longSide = width > height ? width : height

const styles = StyleSheet.create({
  picker: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'transparent',
  },
  pickerBox: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#bdc0c7'
  },
  mask: {
    position: 'absolute',
    top: 0,
    backgroundColor: 'transparent',
    height,
    width,
  },
  pickerWrap: {
    flexDirection: 'row'
  },
  pickerWheel: {
    flex: 1
  },
  pickerToolbar: {
    height: 30,
    backgroundColor: '#e6e6e6',
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#c3c3c3',
    alignItems: 'center'
  },
  pickerBtnView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  pickerMoveBtn: {
    color: '#149be0',
    fontSize: 16,
    marginLeft: 20
  },
  pickerCancelBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 20
  },
  pickerTitle: {
    flex: 4,
    color: 'black',
    textAlign: 'center'
  },
  pickerFinishBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 20
  },
  pickerFinishBtnText: {
    fontSize: 16,
    color: '#149be0'
  }
})

class Select extends Component {
  static defaultProps = {
    visiable: false,
    style: { width, height: 250 },
    pickerBtnText: '完成',
    pickerCancelBtnText: '取消',
    showMask: true,
    showDuration: 300,
    selectedValue: [],
    onPickerDone: () => {},
    onPickerCancel: () => {},
    onValueChange: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {
      ...this._getStateFromProps(props),
      slideAnim: new Animated.Value(-height)
    }
    this._pickerCancel = this._pickerCancel.bind(this)
    this._pickerFinish = this._pickerFinish.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const nextState = this._getStateFromProps(nextProps)
    this.setState(nextState)
    if (nextProps.visiable) {
      this.show()
    } else {
      this.hide()
    }
  }

  _getCascadeData(pickerData, pickedValue) {
    const secondArr = pickerData.filter((item) =>
      item.value === pickedValue[0])
    const secondWheelData = secondArr.length ? secondArr[0].children : pickerData[0].children

    const thirdArr = secondWheelData.filter((item) =>
      item.value === pickedValue[1])
    const thirdWheelData = thirdArr.length ? thirdArr[0].children : secondWheelData[0].children

    return {
      secondWheelData,
      thirdWheelData,
    }
  }

  _getStateFromProps(props) {
    // the pickedValue must looks like [wheelone's, wheeltwo's, ...]
    // this.state.selectedValue may be the result of the first pickerWheel
    let { pickerData, selectedValue } = props
    let cascadeData = {}

    // picker 的类型
    this.pickerType = props.pickerData.filter((item) => item.children).length
      ? 'cascade' : 'parallel'

    if (this.pickerType === 'parallel') {
      // compatible single wheel sence
      if (!Array.isArray(selectedValue)) {
        selectedValue = [selectedValue]
      }
      if (!Array.isArray(pickerData[0])) {
        pickerData = [pickerData]
      }
      this.pickedValue = JSON.parse(JSON.stringify(
        selectedValue.length ? selectedValue :
        [pickerData[0][0], pickerData[1] && pickerData[1][0]]
          .concat(pickerData[2] ? pickerData[2][0] : [])
      ))
    } else if (this.pickerType === 'cascade') {
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

  _slideUp() {
    this._isMoving = true
    Animated.timing(
      this.state.slideAnim,
      {
        toValue: 0,
        duration: this.props.showDuration,
      }
    ).start((evt) => {
      if (evt.finished) {
        this._isMoving = false
        this._isPickerShow = true
      }
    })
  }

  _slideDown() {
    this._isMoving = true
    Animated.timing(
      this.state.slideAnim,
      {
        toValue: -height,
        duration: this.props.showDuration,
      }
    ).start((evt) => {
      if (evt.finished) {
        this._isMoving = false
        this._isPickerShow = false
      }
    })
  }

  show() {
    if (this._isMoving) return
    if (!this._isPickerShow) {
      this._slideUp()
    }
  }

  hide() {
    if (this._isMoving) return
    if (this._isPickerShow) {
      this._slideDown()
    }
  }

  _pickerCancel() {
    this.hide()
    this.props.onPickerCancel()
  }

  _pickerFinish() {
    this.hide()
    let pickerLabel
    if (this.pickerType === 'cascade') {
      pickerLabel = this.pickedValue.map((v, i) => {
        if (i === 0) return this.state.pickerData.filter((item) => item.value === v)[0].label
        if (i === 1) return this.state.secondWheelData.filter((item) => item.value === v)[0].label
        if (i === 2) return this.state.thirdWheelData.filter((item) => item.value === v)[0].label
        return false
      })
    }
    this.props.onPickerDone(this.pickedValue, pickerLabel)
  }

  _renderParallelWheel() {
    return this.state.pickerData.map((item, index) =>
      <View style={styles.pickerWheel} key={index}>
        <Picker
          selectedValue={this.state.selectedValue[index]}
          onValueChange={value => {
            this.pickedValue.splice(index, 1, value)
            this.setState({
              selectedValue: JSON.parse(JSON.stringify(this.pickedValue))
            })
            this.props.onValueChange(JSON.parse(JSON.stringify(this.pickedValue)), index)
          }}
        >
          {item.map((o, i) => {
            const isObject = typeof o === 'object' && !!o
            return (
              <Picker.Item
                key={i}
                value={isObject ? o.value : o}
                label={isObject ? o.label : o.toString()}
              />
            )
          })}
        </Picker>
      </View>
    )
  }

  _renderCascadeWheel() {
    let thirdWheel = this.state.thirdWheelData && (
      <View style={styles.pickerWheel}>
        <Picker
          ref={'thirdWheel'}
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
            <Picker.Item
              key={i}
              value={o.value}
              label={o.label}
            />
          )}
        </Picker>
      </View>
    )

    return (
      <View style={[styles.pickerWrap, { width: this.props.style.width || width }]}>
        <View style={styles.pickerWheel}>
          <Picker
            ref={'firstWheel'}
            selectedValue={this.state.firstPickedData}
            onValueChange={value => {
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
              if (this.refs.secondWheel && this.refs.secondWheel.moveTo) {
                this.refs.secondWheel.moveTo(0)
              }
              if (this.refs.thirdWheel && this.refs.thirdWheel.moveTo) {
                this.refs.thirdWheel.moveTo(0)
              }
            }}
          >
            {this.state.firstWheelData.map((o, i) =>
              <Picker.Item
                key={i}
                value={o.value}
                label={o.label}
              />
            )}
          </Picker>
        </View>
        <View style={styles.pickerWheel}>
          <Picker
            ref={'secondWheel'}
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
              if (this.refs.thirdWheel && this.refs.thirdWheel.moveTo) {
                this.refs.thirdWheel.moveTo(0)
              }
            }}
          >
            {this.state.secondWheelData.map((o, i) =>
              <Picker.Item
                key={i}
                value={o.value}
                label={o.label}
              />
            )}
          </Picker>
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
    let mask = this.props.showMask ? (
      <View style={styles.mask} >
        <Text style={{ width, height }} onPress={this._pickerCancel} />
      </View>
    ) : null

    return (
      <Animated.View
        style={[styles.picker, {
          elevation: this.props.pickerElevation,
          width: longSide,
          height: this.props.showMask ? height : this.props.style.height,
          bottom: this.state.slideAnim
        }]}
      >
        {mask}
        <View style={[styles.pickerBox, this.props.style]}>
          <View
            style={[styles.pickerToolbar, this.props.pickerToolBarStyle,
              { width: this.props.style.width || width }]}
          >
            <View style={styles.pickerCancelBtn}>
              <Text
                style={[styles.pickerFinishBtnText, this.props.pickerBtnStyle]}
                onPress={this._pickerCancel}
              >{this.props.pickerCancelBtnText}</Text>
            </View>
            <Text style={[styles.pickerTitle, this.props.pickerTitleStyle]} numberOfLines={1}>
              {this.props.pickerTitle}
            </Text>
            <View style={styles.pickerFinishBtn}>
              <Text
                style={[styles.pickerFinishBtnText, this.props.pickerBtnStyle]}
                onPress={this._pickerFinish}
              >{this.props.pickerBtnText}</Text>
            </View>
          </View>
          <View style={[styles.pickerWrap, { width: this.props.style.width || width }]}>
            {this._renderWheel()}
          </View>
        </View>
      </Animated.View>
    )
  }
}

Select.propTypes = {
  visiable: PropTypes.bool,
  style: View.propTypes.style,
  pickerElevation: PropTypes.number,
  pickerBtnText: PropTypes.string,
  pickerCancelBtnText: PropTypes.string,
  pickerBtnStyle: Text.propTypes.style,
  pickerTitle: PropTypes.string,
  pickerTitleStyle: Text.propTypes.style,
  pickerToolBarStyle: View.propTypes.style,
  showMask: PropTypes.bool,
  showDuration: PropTypes.number,
  pickerData: PropTypes.array.isRequired,
  selectedValue: PropTypes.any.isRequired,
  onPickerDone: PropTypes.func,
  onPickerCancel: PropTypes.func,
  onValueChange: PropTypes.func
}

export default Select
