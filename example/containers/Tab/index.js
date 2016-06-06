import React from 'react'
import { Text, ScrollView } from 'react-native'

import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'

const Tab = () =>
  <ScrollableTabView
    style={{ paddingTop: 64, backgroundColor: '#fbf9fe' }}
    renderTabBar={() => <DefaultTabBar backgroundColor="rgba(255, 255, 255, 0.7)" />}
    tabBarPosition="overlayTop"
  >
    <ScrollView tabLabel="iOS">
      <Text tabLabel="Tab #1">My</Text>
      <Text tabLabel="Tab #2 word word">favorite</Text>
      <Text tabLabel="Tab #3 word word word">project</Text>
      <Text tabLabel="Tab #4 word word word word">favorite</Text>
      <Text tabLabel="Tab #5">project</Text>
    </ScrollView>
    <ScrollView tabLabel="Android">
      <Text tabLabel="Tab #1">My</Text>
      <Text tabLabel="Tab #2 word word">favorite</Text>
      <Text tabLabel="Tab #3 word word word">project</Text>
      <Text tabLabel="Tab #4 word word word word">favorite</Text>
      <Text tabLabel="Tab #5">project</Text>
    </ScrollView>
  </ScrollableTabView>

export default Tab
