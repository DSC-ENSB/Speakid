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
          <>
            <Text style={styles.title}>الذئب في ثوب خروف</Text>
            <Text style={styles.subTitle}>45 دقيقة</Text>
          </>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.storyBox, { backgroundColor: Colors.SecondList }]}
          onPress={console.log('To Specifique Story')}>
          <>
            <Text style={styles.title}>النملة والحمامة</Text>
            <Text style={styles.subTitle}>25 دقيقة</Text>
          </>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.storyBox, { backgroundColor: Colors.Primary }]}
          onPress={console.log('To Specifique Story')}>
          <>
            <Text style={styles.title}> جميلة والوحش</Text>
            <Text style={styles.subTitle}>40 دقيقة</Text>
          </>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.storyBox, { backgroundColor: Colors.FirstList }]}
          onPress={console.log('To Specifique Story')}>
          <>
            <Text style={styles.title}> المحارب الصغير</Text>
            <Text style={styles.subTitle}>30 دقيقة</Text>
          </>
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
  }, subTitle: {
    fontSize: 16,
    position: 'absolute',
    bottom: 20,
    left: 20,
    color: Colors.White,
  }
})
export default Stories