import React, { useState } from 'react'
import { View, Image, Text, StyleSheet, Dimensions, ScrollView, TouchableHighlight } from 'react-native'
import Icone from 'react-native-vector-icons/Ionicons'
import SoundPlayer from 'react-native-sound-player'
import Colors from '../style/Colors'


const Listen = () => {
  const playSound = (fn) => {
    try {
      SoundPlayer.playSoundFile(fn, 'mp3')
    } catch (e) {
      console.log(`cannot play the sound file`, e)
    }
  }
  return (
    <View style={styles.wrapper}>
      <View style={styles.top}>
        <TouchableHighlight
          onPress={() => playSound('listento')}
          underlayColor='lightgrey'
          style={styles.player}
        >
          <Icone
            color={Colors.SecondList}
            size={80}
            name="volume-high" />
        </TouchableHighlight>
      </View>
      <View style={styles.bottom}>
        <ScrollView>
          <TouchableHighlight
            style={styles.sound}
            underlayColor={Colors.SecondList}
            onPress={() => playSound('aaa')}>
            <Text style={styles.txt}>1</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.sound}
            underlayColor={Colors.SecondList}
            onPress={() => playSound('ba')}>
            <Text style={styles.txt}>2</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.sound}
            underlayColor={Colors.SecondList}
            onPress={() => playSound('cha')}>
            <Text style={styles.txt}>3</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.sound}
            underlayColor={Colors.SecondList}
            onPress={() => playSound('da')}>
            <Text style={styles.txt}>4</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.sound}
            underlayColor={Colors.SecondList}
            onPress={() => playSound('daa')}>
            <Text style={styles.txt}>5</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.sound}
            underlayColor={Colors.SecondList}
            onPress={() => playSound('fa')}>
            <Text style={styles.txt}>6</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.sound}
            underlayColor={Colors.SecondList}
            onPress={() => playSound('gha')}>
            <Text style={styles.txt}>7</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.sound}
            underlayColor={Colors.SecondList}
            onPress={() => playSound('ha')}>
            <Text style={styles.txt}>8</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.sound}
            underlayColor={Colors.SecondList}
            onPress={() => playSound('haa')}>
            <Text style={styles.txt}>9</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.sound}
            underlayColor={Colors.SecondList}
            onPress={() => playSound('ja')}>
            <Text style={styles.txt}>10</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.sound}
            underlayColor={Colors.SecondList}
            onPress={() => playSound('kaa')}>
            <Text style={styles.txt}>11</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.sound}
            underlayColor={Colors.SecondList}
            onPress={() => playSound('kha')}>
            <Text style={styles.txt}>12</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.sound}
            underlayColor={Colors.SecondList}
            onPress={() => playSound('ma')}>
            <Text style={styles.txt}>13</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.sound}
            underlayColor={Colors.SecondList}
            onPress={() => playSound('pa')}>
            <Text style={styles.txt}>14</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.sound}
            underlayColor={Colors.SecondList}
            onPress={() => playSound('raa')}>
            <Text style={styles.txt}>15</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.sound}
            underlayColor={Colors.SecondList}
            onPress={() => playSound('ta')}>
            <Text style={styles.txt}>16</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.sound}
            underlayColor={Colors.SecondList}
            onPress={() => playSound('taa')}>
            <Text style={styles.txt}>17</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.sound}
            underlayColor={Colors.SecondList}
            onPress={() => playSound('tha')}>
            <Text style={styles.txt}>18</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.sound}
            underlayColor={Colors.SecondList}
            onPress={() => playSound('wa')}>
            <Text style={styles.txt}>19</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.sound}
            underlayColor={Colors.SecondList}
            onPress={() => playSound('za')}>
            <Text style={styles.txt}>20</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.sound}
            underlayColor={Colors.SecondList}
            onPress={() => playSound('s')}>
            <Text style={styles.txt}>21</Text>
          </TouchableHighlight>
        </ScrollView>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
  },
  top: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 6,
  },
  player: {
    backgroundColor: Colors.White,
    borderRadius: 22,
    padding: 25,
  },
  sound: {
    height: 75,
    borderRadius: 12,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.FirstList,
  },
  txt: {
    color: Colors.White,
    fontSize: 18,
    fontFamily: 'bold'
  }
})
export default Listen;