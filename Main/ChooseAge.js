import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet, Dimensions } from 'react-native'


const ChooseAge = ({ navigation }) => {
  const Redirect = (Goto) => {
    // Save The age on the local Storage
    navigation.navigate('user', { Goto })
  }
  return (
    <View style={styles.container}>
      <TouchableHighlight
        activeOpacity={.9}
        style={styles.btn}
        onPress={() => Redirect('one')}
      >
        <Text style={styles.txt}>
          Age between 3 - 5
        </Text>
      </TouchableHighlight>
      <TouchableHighlight
        activeOpacity={.9}
        style={styles.btn}
        onPress={() => Redirect('two')}
      >
        <Text style={styles.txt}>
          Age between 5 - 8
        </Text>
      </TouchableHighlight>
      <TouchableHighlight
        activeOpacity={.9}
        style={styles.btn}
        onPress={() => Redirect('three')}
      >
        <Text style={styles.txt}>
          Age between 8 - 10
        </Text>
      </TouchableHighlight>
      <TouchableHighlight
        activeOpacity={.9}
        style={styles.btn}
        onPress={() => Redirect('four')}
      >
        <Text style={styles.txt}>
          Age between 10 - 12
        </Text>
      </TouchableHighlight>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  btn: {
    height: 65,
    justifyContent: 'center',
    width: Dimensions.get('window').width - 60,
    elevation: 6,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  txt: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  }
})
export default ChooseAge;