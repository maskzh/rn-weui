import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { Icon } from '../Icon'

const styles = StyleSheet.create({
  searchBar: {
    position: 'relative',
    paddingTop: 8,
    paddingRight: 10,
    paddingBottom: 8,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEFF4',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    borderColor: '#C7C7C7',
  },
  searchOuter: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#E6E6EA',
    borderRadius: 5,
  },
  searchInner: {
    position: 'relative',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 4,
    paddingBottom: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    marginLeft: 5,
    height: 20,
    fontSize: 14,
    flex: 1,
  },
  searchCover: {
    position: 'absolute',
    top: 1,
    right: 1,
    bottom: 1,
    left: 1,
    height: 26,
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchCoverText: {
    textAlign: 'center',
    color: '#9B9B9B',
    marginLeft: 5,
  },
  searchCancel: {
    marginLeft: 10,
    color: '#09BB07',
  }
})

class SearchBar extends Component {
  static defaultProps = {
    placeholder: '搜索',
    onChange: undefined,
    onClear: undefined,
    onCancel: undefined,
    lang: {
      cancel: '取消'
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      focus: false,
      text: '',
    }
    this.cancelHandle = this.cancelHandle.bind(this)
    this.changeHandle = this.changeHandle.bind(this)
    this.clearHandle = this.clearHandle.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.focus = this.focus.bind(this)
  }

  changeHandle(text) {
    this.setState({ text })
    if (this.props.onChange) this.props.onChange(text)
  }

  cancelHandle(e) {
    this.setState({ focus: false })
    this.blur()
    if (this.props.onCancel) this.props.onCancel(e)
  }

  clearHandle(e) {
    this.setState({ text: '' })
    if (this.props.onClear) this.props.onClear(e)
    if (this.props.onChange) this.props.onChange('')
  }

  handleFocus() {
    this.setState({ focus: true })
  }

  handleBlur() {
    this.setState({ focus: false })
  }

  focus() {
    this.refs.searchInput.focus()
  }

  blur() {
    this.refs.searchInput.blur()
  }

  render() {
    const {
      placeholder,
      lang,
      style,
    } = this.props
    const { focus, text } = this.state

    return (
      <View style={[styles.searchBar, style]}>
        <View style={styles.searchOuter}>
          <View style={styles.searchInner}>
            <Icon name="search" />
            <TextInput
              ref="searchInput"
              style={styles.searchInput}
              placeholder={placeholder}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              onChangeText={this.changeHandle}
              value={text}
              autoCorrect={false}
              blurOnSubmit={!false}
              returnKeyType="search"
            />
            {text ? (
              <Text onPress={this.clearHandle}>
                <Icon name="clear" style={styles.clearIcon} />
              </Text>
            ) : null}
          </View>
          {(focus || text) ? null :
            <TouchableOpacity style={styles.searchCover} onPress={this.focus}>
              <Icon name="search" />
              <Text style={styles.searchCoverText}>{placeholder}</Text>
            </TouchableOpacity>
          }
        </View>
        {!focus ? null :
          <Text style={styles.searchCancel} onPress={this.cancelHandle}>{lang.cancel}</Text>}
      </View>
    )
  }
}

SearchBar.propTypes = {
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  onCancel: PropTypes.func,
  lang: PropTypes.object,
  style: View.propTypes.style,
  placeholder: PropTypes.string,
}

export default SearchBar
