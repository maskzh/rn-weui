import React, { PropTypes } from 'react'
import {
  StyleSheet,
} from 'react-native'
import Text from '../Text'

const styles = StyleSheet.create({
  h1: {
    fontSize: 17,
    fontWeight: '400',
    marginBottom: 17 * 0.75,
  }
})

const H1 = (props) =>
  <Text style={[styles.h1, props.style]}>
    {props.children}
  </Text>

H1.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
  children: PropTypes.node
}

export default H1
