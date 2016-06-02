import React, { Component } from 'react'
import {
  AppState,
  StyleSheet,
  View
} from 'react-native'
import { connect } from 'react-redux'
import StatusBar from './components/StatusBar'
import Navigator from './Navigator'
// import { version } from './config/env'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

class App extends Component {
  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange)

    // updateInstallation({ version })
    // CodePush.sync({installMode: CodePush.InstallMode.ON_NEXT_RESUME})
  }
  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange)
  }
  handleAppStateChange(appState) {
    if (appState === 'active') {
      // CodePush.sync({installMode: CodePush.InstallMode.ON_NEXT_RESUME})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Navigator />
      </View>
    )
  }
}

function mapStateToProps(state) {
  const {
    navigation: { tab: isLoggedIn }
  } = state
  return {
    isLoggedIn
  }
}

export default connect(mapStateToProps)(App)
