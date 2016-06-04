import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'
import {
  Article,
  Section,
  H1,
  H2,
  H3,
  P,
  // Text
} from '../../../src'


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 64,
    backgroundColor: '#fbf9fe',
  },
})


const ArticleScene = () =>
  <View style={styles.wrapper}>
    <Article>
      <H1>大标题</H1>
      <Section>
        <H2>章标题</H2>
        <Section>
          <H3>小标题</H3>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute
          </P>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute
          </P>
        </Section>
      </Section>
    </Article>
  </View>

export default ArticleScene
