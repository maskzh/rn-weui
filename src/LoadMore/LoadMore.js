import React, { PropTypes } from 'react'
import { View, Text, ActivityIndicator, Dimensions, StyleSheet } from 'react-native'
import { create } from '../StyleSheet'
import V from '../variable'

const { width } = Dimensions.get('window')
const styles = create({
  loadMore: {
    width: width * 0.65,
    marginTop: 14 * 1.5,
    marginBottom: 14 * 1.5,
    marginLeft: width * 0.175,
    marginRight: width * 0.175,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loadMoreLine: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: V.weuiLineColorLight,
    marginTop: 14 * 2.4,
  },
  loadMoreTips: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 14 * 1.6,
    android: {
      lineHeight: Math.round(14 * 1.6),
    },
  },
  loadMoreLineTips: {
    position: 'relative',
    top: 0 - (14 * 0.9),
    paddingLeft: 14 * 0.55,
    paddingRight: 14 * 0.55,
    color: V.weuiTextColorGray,
  },
  loadMoreDotTips: {
    paddingLeft: 14 * 0.16,
    paddingRight: 14 * 0.16,
    top: 0 - (14 * 1.2),
  },
  dot: {
    width: 4,
    height: 4,
    backgroundColor: V.weuiLineColorLight,
    borderRadius: 12
  }
})

const LoadMore = ({ loading, showLine, showDot, style, textStyle, children, ...others }) =>
  <View
    style={[
      styles.loadMore,
      showLine ? styles.loadMoreLine : {},
      showDot ? styles.loadMoreDot : {},
      style
    ]}
    {...others}
  >
    {loading ? <ActivityIndicator style={{ marginRight: 5 }} /> : false}
    <Text
      style={[
        styles.loadMoreTips,
        showLine ? styles.loadMoreLineTips : {},
        showDot ? styles.loadMoreDotTips : {},
        textStyle,
      ]}
    >
      {showDot ? <View style={styles.dot} /> : false}
      {children}
    </Text>
  </View>

LoadMore.propTypes = {
  loading: PropTypes.bool,
  showLine: PropTypes.bool,
  showDot: PropTypes.bool,
  style: View.propTypes.style,
  textStyle: Text.propTypes.style,
  children: PropTypes.node
}

export default LoadMore
