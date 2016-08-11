import React, { PropTypes } from 'react'
import { View, StyleSheet } from 'react-native'
import $V from '../variable'

const styles = StyleSheet.create({
  cellHeader: {
    marginRight: 5,
  },
  image: {
    width: 24,
    height: 24,
  },
  error: {
    color: $V.globalWarnColor
  }
})

const CellHeader = (props) => {
  const { error, children, style, ...others } = props
  const childrenWithProps = React.Children.map(children, child => {
    if (child.type.displayName === 'Image' && !child.props.style) {
      return React.cloneElement(child, { style: [styles.image, child.props.style] })
    }
    if (error && child.type.name === 'Label') {
      return React.cloneElement(child, { style: [child.props.style, styles.error] })
    }
    return child
  })
  return <View style={[styles.cellHeader, style]} {...others}>{childrenWithProps}</View>
}
CellHeader.propTypes = {
  error: PropTypes.bool,
  children: PropTypes.node,
  style: View.propTypes.style,
  others: PropTypes.object
}

export default CellHeader
