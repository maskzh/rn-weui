import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'

class Playground extends Component {
  constructor() {
    super()
    const content = []
    const define = (name, render) => {
      content.push(<Example key={name} render={render} />)
    }
    const Module = require('F8Header')
    Module.__cards__(define)
    this.state = { content }
  }

  render() {
    return (
      <View style={{ backgroundColor: '#336699', flex: 1 }}>
        {this.state.content}
      </View>
    )
  }
}

class Example extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const content = this.props.render(this.state.inner, (inner) => this.setState({ inner }))
    return (
      <View>
        {content}
      </View>
    )
  }
}
Example.propTypes = {
  render: PropTypes.func
}

export default Playground
