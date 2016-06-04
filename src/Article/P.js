import React, { PropTypes } from 'react'
import {
  StyleSheet,
} from 'react-native'
import Text from '../Text'

const styles = StyleSheet.create({
  p: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
  }
})

const P = (props) =>
  <Text style={[styles.p, props.style]}>
    {props.children}
  </Text>

P.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
  children: PropTypes.node
}

export default P
