import React, { PropTypes } from 'react'
import {
  Text,
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  p: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
    lineHeight: 15 * 1.6,
  }
})

const P = (props) =>
  <Text style={[styles.p, props.style]}>
    {props.children}
  </Text>

P.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node
}

export default P
