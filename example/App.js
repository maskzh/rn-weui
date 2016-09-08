import React from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import StatusBar from './components/StatusBar'
import Navigator from './Navigator'

const styles = StyleSheet.create({
  page: {
    flex: 1
  }
})

const App = () =>
  <View style={styles.page}>
    <StatusBar />
    <Navigator />
  </View>

export default App
