import React, { useState } from 'react'
import { View, Image, Text, StyleSheet, Dimensions, StatusBar, TouchableHighlight } from 'react-native'
import Icone from 'react-native-vector-icons/Ionicons'
import SoundPlayer from 'react-native-sound-player'
import Colors from '../style/Colors'

const Learn = ({ navigation }) => {
  const playSound = () => {
    try {

      SoundPlayer.playSoundFile('apple', 'mp3')
    } catch (e) {
      console.log(`cannot play the sound file`, e)
    }
  }
  const [answer, setAnswer] = useState(false)
  const SelectOption = id => {
    if (id === '04') {
      setAnswer(true)
    }
    else {
      setAnswer(false)
    }
  }
  return (
    <View style={styles.wrapper}>
      <StatusBar
        backgroundColor={Colors.SecondList}
      />
      <View style={styles.QuestionBox}>
        <Text style={styles.QuestionTxt}>أين التفاحة ؟</Text>
        <TouchableHighlight
          underlayColor='lightgrey'
          style={styles.player}
          onPress={playSound}>
          <Icone
            color={Colors.FirstList}
            size={30}
            name="megaphone-outline" />
        </TouchableHighlight>
      </View>
      <View style={styles.OptionsBox}>
        <View style={styles.row}>
          <TouchableHighlight
            onPress={() => SelectOption('01')}
            underlayColor='grey'
            style={styles.option}>
            <Image source={require('../assets/kiwi.png')} style={styles.image} />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => SelectOption('02')}
            underlayColor='grey'
            style={styles.option}>
            <Image source={require('../assets/orange.png')} style={styles.image} />
          </TouchableHighlight>
        </View>
        <View style={styles.row}>
          <TouchableHighlight
            onPress={() => SelectOption('03')}
            underlayColor='grey'
            style={styles.option}>
            <Image source={require('../assets/banana.png')} style={styles.image} />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => SelectOption('04')}
            underlayColor='grey'
            style={styles.option} >
            <Image source={require('../assets/apple.png')} style={styles.image} />
          </TouchableHighlight>
        </View>
      </View>
      <View style={answer ? styles.resulte : styles.hidden}>
        <Text style={styles.ResTxt}>عمل جيد</Text>
        <TouchableHighlight
          onPress={() => navigation.navigate('learnTwo')}
          style={styles.next}>
          <Text>تم</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  QuestionBox: {
    flex: .3,
    flexDirection: 'row-reverse',
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 25,
  },
  QuestionTxt: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 'bold',
  },
  player: {
    backgroundColor: Colors.White,
    borderRadius: 22,
    padding: 25,
  },
  OptionsBox: {
    flex: .7,

  },
  option: {
    height: 180,
    width: 180,
    backgroundColor: 'lightgrey',
    borderRadius: 12,
  },
  row: {
    display: "flex",
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  image: {
    height: 180,
    width: 180,
    resizeMode: 'contain'
  },
  resulte: {
    display: 'flex',
    position: 'absolute',
    bottom: 0,
    elevation: 8,
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
    backgroundColor: Colors.FirstList,
    height: 120,
    alignItems: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    width: Dimensions.get('window').width,
  },
  next: {
    backgroundColor: Colors.SecondList,
    height: 60,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  ResTxt: {
    color: Colors.White,
    textAlign: "center",
    fontSize: 18,
    fontWeight: 'bold',
  },
  hidden: {
    display: 'none',
  }
})
export default Learn;