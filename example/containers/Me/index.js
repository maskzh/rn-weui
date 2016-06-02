import React, { PropTypes } from 'react'
import {
  ScrollView,
  Text,
} from 'react-native'
// import { Cells, Cell, CellHeader, CellBody, CellFooter, CellDivier } from '../../components/Cell'

const MeScene = () =>
  <ScrollView style={{ flex: 1, backgroundColor: '#EFEFF4' }}>
    <Text>隔阂</Text>
  </ScrollView>

  // <Cells style={{ marginTop: 64 }}>
  //   <Cell>
  //     <CellHeader><Text style={{ fontSize: 17 }}>头部</Text></CellHeader>
  //     <CellBody><Text style={{ fontSize: 17 }}>身体</Text></CellBody>
  //     <CellFooter><Text style={{ fontSize: 17, color: '#888' }}>底部</Text></CellFooter>
  //   </Cell>
  //   <CellDivier />
  //   <Cell>
  //     <CellHeader><Text style={{ fontSize: 17 }}>头部</Text></CellHeader>
  //     <CellBody><Text style={{ fontSize: 17 }}>身体</Text></CellBody>
  //     <CellFooter><Text style={{ fontSize: 17, color: '#888' }}>底部</Text></CellFooter>
  //   </Cell>
  // </Cells>
  // <Cells style={{ marginTop: 20 }}>
  //   <Cell>
  //     <CellHeader><Text style={{ fontSize: 17 }}>头部111</Text></CellHeader>
  //     <CellBody><Text style={{ fontSize: 17 }}>身体</Text></CellBody>
  //     <CellFooter><Text style={{ fontSize: 17, color: '#888' }}>底部</Text></CellFooter>
  //   </Cell>
  // </Cells>

MeScene.propTypes = {
  navigator: PropTypes.object
}


export default MeScene
