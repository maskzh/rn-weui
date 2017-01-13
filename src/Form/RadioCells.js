import React, { PropTypes } from 'react'
import { StyleSheet } from 'react-native'
import { Icon } from '../Icon'
import { Cells, Cell, CellBody, CellText } from '../Cell'
import V from '../variable'

const styles = StyleSheet.create({
  radio: {
    fontSize: 16,
    paddingLeft: V.weuiCellInnerGapH,
  },
  disabled: {
    opacity: 0.5
  },
})

const RadioCells = ({ value, options, onChange, disabled, style, children, ...others }) =>
  <Cells style={[style, disabled ? styles.disabled : null]} {...others}>
    {options.map((option, idx) =>
      <Cell key={idx} onPress={() => !disabled && onChange(option.value)}>
        <CellBody>
          <CellText>{option.label || option.value}</CellText>
        </CellBody>
        {value === option.value ? (
          <Icon name="success_no_circle" style={styles.radio} />
        ) : null}
      </Cell>
    )}
    {children}
  </Cells>

RadioCells.propTypes = {
  value: PropTypes.any,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  style: Icon.propTypes.style,
  children: PropTypes.node,
}

export default RadioCells
