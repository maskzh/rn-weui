import React, { PropTypes } from 'react'
import {
  StyleSheet,
} from 'react-native'
import Text from '../Text'

const styles = StyleSheet.create({
  h2: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 16 * 0.3,
  }
})

const H2 = (props) =>
  <Text style={[styles.h2, props.style]}>
    {props.children}
  </Text>

H2.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
  children: PropTypes.node
}

export default H2
