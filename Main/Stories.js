import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Dimensions, ScrollView } from "react-native";
import { SwipeablePanel } from 'rn-swipeable-panel';
import Stors from './Storiesdata'
import Colors from '../style/Colors';

const Stories = () => {

  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: true,
    showCloseButton: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
  });
  const [isPanelActive, setIsPanelActive] = useState(false);
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const openPanel = () => {
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(false);
  };
  const openStory = id => {
    setTitle(Stors[id].title)
    setBody(Stors[id].body)
    openPanel()
  }

  return (
    <>
      <View style={styles.wrapper}>
        <SwipeablePanel {...panelProps} isActive={isPanelActive}>
          <View style={styles.storiesHandler}>
            <Text style={styles.Storytitle}>{title}</Text>
            <ScrollView>
              <Text style={styles.body}>{body}</Text>
            </ScrollView>
          </View>
        </SwipeablePanel>
        <ScrollView>
          <TouchableHighlight
            style={styles.storyBox}
            onPress={() => openStory("1")}>
            <>
              <Text style={styles.title}>الذئب في ثوب خروف</Text>
              <Text style={styles.subTitle}>25 دقيقة</Text>
            </>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.storyBox, { backgroundColor: Colors.SecondList }]}
            onPress={() => openStory("2")}>
            <>
              <Text style={styles.title}>النملة والحمامة</Text>
              <Text style={styles.subTitle}>45 دقيقة</Text>
            </>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.storyBox, { backgroundColor: Colors.Primary }]}
            onPress={() => openStory("3")}>
            <>
              <Text style={styles.title}> التضحية من أجل صديق </Text>
              <Text style={styles.subTitle}>40 دقيقة</Text>
            </>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.storyBox, { backgroundColor: Colors.FirstList }]}
            onPress={() => openStory("4")}>
            <>
              <Text style={styles.title}> فكر قبل أن تتكلم</Text>
              <Text style={styles.subTitle}>45 دقيقة</Text>
            </>
          </TouchableHighlight>
        </ScrollView>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  storyBox: {
    padding: 20,
    height: 150,
    marginVertical: 10,
    width: Dimensions.get('window').width - 60,
    backgroundColor: Colors.FirstList,
    borderRadius: 12,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.White,
  },
  subTitle: {
    fontSize: 16,
    position: 'absolute',
    bottom: 20,
    left: 20,
    color: Colors.White,
  }, storiesHandler: {
    padding: 25,
  },
  Storytitle: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: Colors.Black,
    marginBottom: 10,
  }, body: {
    fontSize: 17,
    lineHeight: 30,
  }
})
export default Stories