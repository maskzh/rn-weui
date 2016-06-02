import React, { Component } from 'react'
import Parse from 'parse/react-native'
// import Relay from 'react-relay'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './App'
import env from './env'

function setup(): Component {
  console.disableYellowBox = true

  Parse.initialize('example')
  Parse.serverURL = `${env.serverURL}/parse`

  // Relay.injectNetworkLayer(
  //   new Relay.DefaultNetworkLayer(`${env.serverURL}/graphql`, {
  //     fetchTimeout: 30000,
  //     retryDelays: [5000, 10000],
  //   })
  // )

  class Root extends Component {
    constructor() {
      super()
      this.state = {
        isLoading: true,
        store: configureStore(() => this.setState({ isLoading: false })),
      }
    }
    render() {
      if (this.state.isLoading) {
        return null
      }
      return (
        <Provider store={this.state.store}>
          <App />
        </Provider>
      )
    }
  }

  return Root
}

global.LOG = (...args) => {
  console.log('/------------------------------\\')
  console.log(...args)
  console.log('\\------------------------------/')
  return args[args.length - 1]
}

export default setup
