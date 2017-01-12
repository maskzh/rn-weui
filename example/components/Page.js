import React, { PropTypes } from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  page: {
    paddingTop: 64,
    backgroundColor: '#fbf9fe'
  },
  spacing: {
    paddingLeft: 15,
    paddingRight: 15,
  }
})

const Page = (props) => {
  const {
    spacing,
    style,
    children
  } = props

  return (
    <View style={[styles.page, spacing ? styles.spacing : {}, style]}>{children}</View>
  )
}

Page.propTypes = {
  spacing: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
  children: PropTypes.node,
}

export default Page
