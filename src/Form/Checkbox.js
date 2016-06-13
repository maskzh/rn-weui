import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
} from 'react-native'
import { Icon } from '../Icon'
import {
  Cells,
  Cell,
  CellHeader,
  CellBody,
  CellText
} from '../Cell'
import xor from 'lodash/xor'

const styles = StyleSheet.create({
  checkbox: {
    fontSize: 23,
    marginRight: 16 * 0.35,
  }
})

class Checkbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value || []
    }
    this.handlePress = this.handlePress.bind(this)
  }

  handlePress(value) {
    return () => {
      this.setState({
        value: xor(this.state.value, [value])
      })
      if (this.props.onChange) this.props.onChange(this.state.value)
    }
  }

  render() {
    const {
      style,
      options,
      ...others
    } = this.props

    const inArray = (v) =>
      this.state.value.filter((a) => a === v).length

    return (
      <Cells style={style} {...others}>
        {options.map((option, idx) =>
          <Cell key={idx} onPress={this.handlePress(option.value)}>
            <CellHeader>
              <Icon name={inArray(option.value) ? 'success' : 'circle'} style={styles.checkbox} />
            </CellHeader>
            <CellBody>
              <CellText>{option.label || option.value}</CellText>
            </CellBody>
          </Cell>
        )}
      </Cells>
    )
  }
}

Checkbox.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  options: PropTypes.array.isRequired,
  style: Icon.propTypes.style,
}

export default Checkbox
