import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native'
import Colors from "../style/Colors";


const Question = (props) => {
  const [isTrueEnabled, setIsTrueEnabled] = useState(false);
  const [isFalseEnabled, setIsFalseEnabled] = useState(false);
  const toggleTrueSwitch = () => {
    setIsTrueEnabled(!isTrueEnabled)
    setIsFalseEnabled(false)
  };
  const toggleFalseSwitch = () => {
    setIsFalseEnabled(!isFalseEnabled)
    setIsTrueEnabled(false)
  };

  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={styles.QuestionTitle}>{props.title} </Text>
      <View style={styles.OptionsBox}>
        <TouchableOpacity
          onPress={toggleFalseSwitch}
          style={isFalseEnabled ? styles.selectedOption : styles.option}>
          <Text
            style={isFalseEnabled ? styles.selectedTxtOption : styles.Optiontxt}
          >لا</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleTrueSwitch}
          style={isTrueEnabled ? styles.selectedOption : styles.option}>
          <Text
            style={isTrueEnabled ? styles.selectedTxtOption : styles.Optiontxt}>نعم</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}
const styles = StyleSheet.create({

  QuestionTitle: {
    color: Colors.Secondary,
    fontSize: 18,
  },
  OptionsBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  option: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    margin: 10,
    borderRadius: 24,
    borderColor: Colors.FirstList,
    borderWidth: 1,
  },
  selectedOption: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    margin: 10,
    borderRadius: 24,
    borderColor: Colors.FirstList,
    backgroundColor: Colors.FirstList,
    borderWidth: 1,
  },
  Optiontxt: {
    color: Colors.FirstList,
    fontSize: 16,
    fontWeight: "bold",
  },
  selectedTxtOption: {
    color: Colors.White,
    fontSize: 16,
    fontWeight: "bold",
  }
})
export default Question;