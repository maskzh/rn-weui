import React, { PropTypes } from 'react'
import { View } from 'react-native'

const Flex = ({ direction = 'row', wrap = 'wrap', style, children, ...others }) =>
  <View
    style={[{
      flexDirection: direction,
      flexWrap: wrap
    }, style]}
    {...others}
  >{children}</View>

Flex.propTypes = {
  direction: PropTypes.oneOf(['row', 'column']),
  wrap: PropTypes.oneOf(['wrap', 'nowrap']),
  style: View.propTypes.style,
  children: PropTypes.node,
}

export default Flex
