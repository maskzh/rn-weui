import React, { Component, PropTypes } from 'react'
import {
  ScrollView,
  StyleSheet,
  RefreshControl,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import { setNavStyles } from '../../actions/navigation'

const styles = StyleSheet.create({
  row: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 20,
    backgroundColor: '#3a5795',
    margin: 5,
  },
  text: {
    alignSelf: 'center',
    color: '#fff',
  },
  scrollview: {
    flex: 1,
    marginTop: 44
  },
})

const Row = (props) =>
  <TouchableWithoutFeedback onPress={() => props.onClick(props.data)} >
    <View style={styles.row}>
      <Text style={styles.text}>
        {`${props.data.text} ( ${props.data.clicks} clicks`}
      </Text>
    </View>
  </TouchableWithoutFeedback>


class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isRefreshing: false,
      loaded: 0,
      rowData: Array.from(new Array(20)).map(
        (val, i) => ({ text: `Initial row ${i}`, clicks: 0 })),
    }
  }
  componentWillMount() {
    this.props.setNavStyles({ backgroundColor: 'black' })
  }
  _onClick(row) {
    row.clicks++
    this.setState({
      rowData: this.state.rowData,
    })
  }
  _onRefresh() {
    this.setState({ isRefreshing: true })
    setTimeout(() => {
      // prepend 10 items
      const rowData = Array.from(new Array(10))
      .map((val, i) => ({
        text: `Loaded row ${+this.state.loaded + i}`,
        clicks: 0,
      }))
      .concat(this.state.rowData)

      this.setState({
        loaded: this.state.loaded + 10,
        isRefreshing: false,
        rowData,
      })
    }, 5000)
  }
  render() {
    const rows = this.state.rowData.map((row, ii) =>
      <Row key={ii} data={row} onClick={this._onClick} />)
    return (
      <ScrollView
        style={styles.scrollview}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh}
            tintColor="#ff0000"
            title="Loading..."
            colors={['#ff0000', '#00ff00', '#0000ff']}
            progressBackgroundColor="#ffff00"
          />
        }
      >
        {rows}
      </ScrollView>
    )
  }
}

List.propTypes = {
  setNavStyles: PropTypes.func
}

export default connect(null, { setNavStyles })(List)
