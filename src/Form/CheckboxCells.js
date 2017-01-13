import React, { PropTypes } from 'react'
import { StyleSheet } from 'react-native'
import xor from 'lodash/xor'
import { Cells, Cell, CellHeader, CellBody, CellText } from '../Cell'
import { Icon } from '../Icon'
import V from '../variable'

const styles = StyleSheet.create({
  checkbox: {
    fontSize: 23,
    paddingRight: V.weuiCellInnerGapH,
  },
  disabled: {
    opacity: 0.5
  },
})

const CheckboxCells = ({ value, options, onChange, disabled, style, children, ...others }) => {
  const inArray = v =>
    value.filter(a => a === v).length

  return (
    <Cells style={[style, disabled ? styles.disabled : null]} {...others}>
      {options.map((option, idx) =>
        <Cell key={idx} onPress={() => !disabled && onChange(xor(value, [option.value]))}>
          <CellHeader>
            <Icon name={inArray(option.value) ? 'success' : 'circle'} style={styles.checkbox} />
          </CellHeader>
          <CellBody>
            <CellText>{option.label}</CellText>
          </CellBody>
        </Cell>
      )}
      {children}
    </Cells>
  )
}

CheckboxCells.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  options: PropTypes.array.isRequired,
  disabled: PropTypes.bool,
  style: Icon.propTypes.style,
  children: PropTypes.node,
}

export default CheckboxCells
