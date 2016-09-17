import React, { PropTypes } from 'react'
import { View, StyleSheet } from 'react-native'
import { Icon } from '../Icon'
import CellText from './CellText'
import $V from '../variable'

const styles = StyleSheet.create({
  cellBody: {
    flex: 1,
  },
  error: {
    flex: 1,
    color: $V.globalWarnColor,
  },
})
const CellBody = (props) => {
  const { error, children, style, ...others } = props
  const childrenWithProps = React.Children.map(children, (child) => {
    if (typeof child === 'string') {
      return <CellText style={[error ? styles.error : null]}>{child}</CellText>
    }
    return React.cloneElement(child, { style: [child.props.style,
      error ? styles.error : null
    ] })
  })
  return (
    <View style={[styles.cellBody, style, error ? { flexDirection: 'row' } : null]} {...others}>
      {childrenWithProps}
      {error ? <Icon name="warn" /> : false}
    </View>
  )
}
CellBody.propTypes = {
  error: PropTypes.bool,
  children: PropTypes.node,
  style: View.propTypes.style,
  others: PropTypes.object
}

export default CellBody
