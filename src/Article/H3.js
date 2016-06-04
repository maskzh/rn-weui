import React, { PropTypes } from 'react'
import {
  StyleSheet,
} from 'react-native'
import Text from '../Text'

const styles = StyleSheet.create({
  h3: {
    fontSize: 15,
    fontWeight: '400',
  }
})

const H3 = (props) =>
  <Text style={[styles.h3, props.style]}>
    {props.children}
  </Text>

H3.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
  children: PropTypes.node
}

export default H3
