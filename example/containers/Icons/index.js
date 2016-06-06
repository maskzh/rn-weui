import React from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native'
import { Icon } from '../../../src'
import SK from 'react-native-stylekit'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 84,
    backgroundColor: '#fbf9fe',
  },
})


const SwiperScene = () =>
  <ScrollView style={[styles.wrapper]}>
    <View style={[SK.row, SK.center, SK.plr30]}>
      <Icon name="success" msg style={[SK.plr5]} />
      <Icon name="info" msg style={[SK.plr10]} />
      <Icon name="warn" msg style={[SK.plr10]} />
      <Icon name="waiting" msg style={[SK.plr10]} />
      <Icon name="safe_success" msg style={[SK.plr10]} />
      <Icon name="safe_warn" msg style={[SK.plr10]} />
    </View>
    <View style={[SK.row, SK.plr30]}>
      <Icon name="success" style={[SK.plr5]} />
      <Icon name="success_circle" style={[SK.plr5]} />
      <Icon name="success_no_circle" style={[SK.plr5]} />
      <Icon name="info" style={[SK.plr5]} />
      <Icon name="info_circle" style={[SK.plr5]} />
      <Icon name="waiting" style={[SK.plr5]} />
      <Icon name="waiting_circle" style={[SK.plr5]} />
      <Icon name="circle" style={[SK.plr5]} />
      <Icon name="warn" style={[SK.plr5]} />
      <Icon name="download" style={[SK.plr5]} />
      <Icon name="cancel" style={[SK.plr5]} />
      <Icon name="search" style={[SK.plr5]} />
      <Icon name="clear" style={[SK.plr5]} />
    </View>
  </ScrollView>

export default SwiperScene
