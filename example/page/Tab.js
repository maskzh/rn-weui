import React from 'react'
import { Text, ScrollView } from 'react-native'
import { Tab } from '../../src'

const TabScene = () =>
  <Tab style={{ marginTop: 64, backgroundColor: '#fbf9fe' }}>
    <ScrollView tabLabel="我的"><Text>My</Text></ScrollView>
    <Text tabLabel="最爱">favorite</Text>
    <Text tabLabel="项目">project</Text>
    <Text tabLabel="喜欢">favorite</Text>
    <Text tabLabel="其他">project</Text>
    <Text tabLabel="其他1">project</Text>
    <Text tabLabel="其他2">project</Text>
    <Text tabLabel="其他3">project</Text>
  </Tab>

export default TabScene
