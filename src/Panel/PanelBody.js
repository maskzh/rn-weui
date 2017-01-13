import React, { PropTypes } from 'react'
import { View } from 'react-native'

const PanelBody = ({ children, style, ...others }) => {
  const childrenWithProps = React.Children.map(children, (child, idx) => {
    if (idx === 0) {
      return React.cloneElement(child, { first: true })
    }
    return child
  })

  return (
    <View style={style} {...others}>
      {childrenWithProps}
    </View>
  )
}

PanelBody.propTypes = {
  children: PropTypes.node,
  style: View.propTypes.style,
}

export default PanelBody
