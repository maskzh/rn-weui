import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
} from 'react-native'
import { Icon } from '../Icon'
import {
  Cells,
  Cell,
  CellBody,
  CellText
} from '../Cell'

const styles = StyleSheet.create({
  radio: {
    fontSize: 16,
  }
})

class Radio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: undefined
    }
  }

  render() {
    const {
      style,
      value,
      options,
      onChange,
      ...others
    } = this.props

    return (
      <Cells style={style} {...others}>
        {options.map((option, idx) =>
          <Cell key={idx} onPress={() => onChange && onChange(option.value, option)}>
            <CellBody><CellText>{option.label || option.value}</CellText></CellBody>
            {value === option.value ? <Icon name="success_no_circle" style={styles.radio} /> : null}
          </Cell>
        )}
      </Cells>
    )
  }
}

Radio.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  options: PropTypes.array.isRequired,
  style: Icon.propTypes.style,
}

export default Radio
