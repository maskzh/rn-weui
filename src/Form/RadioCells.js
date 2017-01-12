import React, { PropTypes } from 'react'
import { StyleSheet } from 'react-native'
import { Icon } from '../Icon'
import { Cells, Cell, CellBody, CellText } from '../Cell'
import V from '../variable'

const styles = StyleSheet.create({
  radio: {
    fontSize: 16,
    paddingLeft: V.weuiCellInnerGapH,
  }
})

const RadioCells = ({ value, options, onChange, style, children, ...others }) =>
  <Cells style={style} {...others}>
    {options.map((option, idx) =>
      <Cell key={idx} onPress={() => onChange(option.value)}>
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
  onChange: PropTypes.func,
  options: PropTypes.array.isRequired,
  style: Icon.propTypes.style,
  children: PropTypes.node,
}

export default RadioCells
