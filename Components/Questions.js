import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Colors from "../style/Colors";


const Questions = (props) => {
  const [isFalseEnabled, setIsFalseEnabled] = useState(false);

  const togglSwitch = (id) => {
    console.log(id)
    const SelectedOption = props.answers.filter(el => props.answers.indexOf(el) === id);
    setIsFalseEnabled(!isFalseEnabled)
  };

  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={styles.QuestionTitle}>{props.title} </Text>
      <View style={styles.OptionsBox}>
        {props.answers.map((elem, index) => {
          return (
            <TouchableOpacity
              key={index.toString()}
              onPress={() => togglSwitch(index)}
              style={isFalseEnabled ? styles.selectedOption : styles.option}>
              <Text
                style={isFalseEnabled ? styles.selectedTxtOption : styles.Optiontxt}
              >{elem}</Text>
            </TouchableOpacity>
          )
        })
        }


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
    flexWrap: 'wrap',
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
export default Questions;