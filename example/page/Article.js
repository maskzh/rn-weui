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
  LoadMore,
  Preview,
  PreviewHeader,
  PreviewBody,
  PreviewFooter,
  PreviewItem,
  PreviewLabel,
  PreviewValue,
  ButtonPreview,
} from '../../src'


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
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
      <LoadMore loading={!false}>Loading</LoadMore>
      <LoadMore showLine={!false}>No Data</LoadMore>
      <LoadMore showLine={!false} showDot={!false} />
    </Article>
    <Preview>
      <PreviewHeader>
        <PreviewItem>
          <PreviewLabel>Total</PreviewLabel>
          <PreviewValue>$44.50</PreviewValue>
        </PreviewItem>
      </PreviewHeader>
      <PreviewBody>
        <PreviewItem>
          <PreviewLabel>Product</PreviewLabel>
          <PreviewValue>Name</PreviewValue>
        </PreviewItem>
        <PreviewItem>
          <PreviewLabel>Description</PreviewLabel>
          <PreviewValue>Cras sit amet nibh libero, in gravida </PreviewValue>
        </PreviewItem>
        <PreviewItem>
          <PreviewLabel>Details</PreviewLabel>
          <PreviewValue>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
          </PreviewValue>
        </PreviewItem>
      </PreviewBody>
      <PreviewFooter>
        <ButtonPreview primary={!false}>Action</ButtonPreview>
      </PreviewFooter>
    </Preview>
    <Preview style={{ marginTop: 20 }}>
      <PreviewHeader>
        <PreviewItem>
          <PreviewLabel>Total</PreviewLabel>
          <PreviewValue>$44.50</PreviewValue>
        </PreviewItem>
      </PreviewHeader>
      <PreviewBody>
        <PreviewItem>
          <PreviewLabel>Product</PreviewLabel>
          <PreviewValue>Name</PreviewValue>
        </PreviewItem>
        <PreviewItem>
          <PreviewLabel>Description</PreviewLabel>
          <PreviewValue>Cras sit amet nibh libero, in gravida </PreviewValue>
        </PreviewItem>
        <PreviewItem>
          <PreviewLabel>Details</PreviewLabel>
          <PreviewValue>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
          </PreviewValue>
        </PreviewItem>
      </PreviewBody>
      <PreviewFooter>
        <ButtonPreview>Action</ButtonPreview>
        <ButtonPreview primary={!false}>Action</ButtonPreview>
      </PreviewFooter>
    </Preview>
  </View>

export default ArticleScene
