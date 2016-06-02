import React, { Component, PropTypes } from 'react'
import GridScene from '../GridScene'
import { connect } from 'react-redux'
import { setNavStyles } from '../../actions/navigation'

class Home extends Component {
  componentWillMount() {
    this.props.setNavStyles({ backgroundColor: 'black' })
  }
  render() {
    return (
      <GridScene navigator={this.props.navigator} />
    )
  }
}

Home.propTypes = {
  setNavStyles: PropTypes.func,
  navigator: PropTypes.object
}

export default connect(null, { setNavStyles })(Home)
