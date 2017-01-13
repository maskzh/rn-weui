import React, { PropTypes } from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  section: {
    marginBottom: 22.5
  }
})

const Section = ({ style, children }) =>
  <View style={[styles.section, style]}>{children}</View>

Section.propTypes = {
  style: View.propTypes.style,
  children: PropTypes.node
}

export default Section
