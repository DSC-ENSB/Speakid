import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Dimensions, ScrollView } from "react-native";
import Colors from '../style/Colors';

const Stories = () => {
  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <TouchableHighlight
          style={styles.storyBox}
          onPress={console.log('To Specifique Story')}>
          <Text style={styles.title}>الذئب في ثوب خروف</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.storyBox}
          onPress={console.log('To Specifique Story')}>
          <Text style={styles.title}>النملة والحمامة</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.storyBox}
          onPress={console.log('To Specifique Story')}>
          <Text style={styles.title}>النملة والحمامة</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.storyBox}
          onPress={console.log('To Specifique Story')}>
          <Text style={styles.title}>النملة والحمامة</Text>
        </TouchableHighlight>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  storyBox: {
    height: 150,
    marginVertical: 10,
    width: Dimensions.get('window').width - 60,
    backgroundColor: Colors.Primary,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color: Colors.White,
  }
})
export default Stories