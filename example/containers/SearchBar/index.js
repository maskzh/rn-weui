import React, { Component } from 'react'
import {
  Image,
  Text
} from 'react-native'
import Page from '../../components/Page'
import {
  SearchBar,
  Panel,
  PanelHeader,
  PanelBody,
  PanelFooter,
  Media,
  MediaHeader,
  MediaBody,
  MediaTitle,
  MediaDescription,
} from '../../../src'
import SampleData from './nameDB'

const appMsgIcon = <Image source={{ uri: 'http://weui.github.io/weui/images/icon_nav_button.png' }} />


class SearchBarScene extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      results: [],
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(text) {
    const keywords = [text]
    let results = SampleData.filter(/./.test.bind(new RegExp(keywords.join('|'), 'i')))

    if (results.length > 3) results = results.slice(0, 3)
    this.setState({
      results,
      searchText: text,
    })
  }

  render() {
    return (
      <Page>
        <SearchBar onChange={this.handleChange} />
        {!this.state.searchText ? null :
          <Panel style={{ marginTop: 0 }}>
            <PanelHeader>英文名字</PanelHeader>
            <PanelBody>
              {this.state.results.length > 0 ?
                this.state.results.map((item, i) =>
                  <Media key={i} type="appmsg">
                    <MediaHeader>{appMsgIcon}</MediaHeader>
                    <MediaBody>
                      <MediaTitle>{item}</MediaTitle>
                      <MediaDescription>
                        由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
                      </MediaDescription>
                    </MediaBody>
                  </Media>
                ) : <Media><Text>找不到了！</Text></Media>
              }
            </PanelBody>
            <PanelFooter access>查看更多</PanelFooter>
          </Panel>
        }
      </Page>
    )
  }
}


export default SearchBarScene
