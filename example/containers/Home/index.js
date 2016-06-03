import React, { Component, PropTypes } from 'react'
import Grid from '../Grid'
import { connect } from 'react-redux'
import { setNavStyles } from '../../actions/navigation'

class Home extends Component {
  componentWillMount() {
    this.props.setNavStyles({ backgroundColor: 'black' })
  }
  render() {
    return (
      <Grid navigator={this.props.navigator} />
    )
  }
}

Home.propTypes = {
  setNavStyles: PropTypes.func,
  navigator: PropTypes.object
}

export default connect(null, { setNavStyles })(Home)
