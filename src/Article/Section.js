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
  style: View.propTypes.style,
  children: PropTypes.node
}

export default Section
