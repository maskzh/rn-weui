import React, { PropTypes } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  section: {
    marginBottom: 22.5
  }
})

const Section = (props) =>
  <View style={[styles.section, props.style]}>
    {props.children}
  </View>

Section.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
  children: PropTypes.node
}

export default Section
