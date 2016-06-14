import React, { PropTypes } from 'react'
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
import $V from '../variable'

const styles = StyleSheet.create({
  checkbox: {
    fontSize: 23,
    marginRight: $V.baseFontSize * 0.35,
  }
})

const CheckboxCells = (props) => {
  const {
    value,
    onChange,
    style,
    options,
    ...others
  } = props

  const inArray = (v) =>
    value.filter((a) => a === v).length

  return (
    <Cells style={style} {...others}>
      {options.map((option, idx) =>
        <Cell key={idx} onPress={() => onChange(xor(value, [option.value]))}>
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

CheckboxCells.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  options: PropTypes.array.isRequired,
  style: Icon.propTypes.style,
}

export default CheckboxCells
