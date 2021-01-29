import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableHighlight, Image } from 'react-native'
import Colors from "../Colors";

const Home = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <TouchableHighlight
        activeOpacity={.8}
        onPress={() => navigation.navigate('training')}
        style={[styles.Box]}>
        <>
          <Image source={require('../assets/kid.png')} style={styles.Imagebackground} />
          <View style={styles.hiddenLayer}>
          </View>
          <Text style={styles.title}>Training</Text>
        </>
      </TouchableHighlight>
      <TouchableHighlight
        activeOpacity={.8}
        onPress={() => navigation.navigate('listen')}
        style={[styles.Box]}>
        <>
          <Image source={require('../assets/kid.png')} style={styles.Imagebackground} />
          <View style={styles.hiddenLayer}>
          </View>
          <Text style={styles.title}>Listen</Text>
        </>
      </TouchableHighlight>
      <TouchableHighlight
        activeOpacity={.8}
        onPress={() => navigation.navigate('speek')}
        style={[styles.Box]}>
        <>
          <Image source={require('../assets/kid.png')} style={styles.Imagebackground} />
          <View style={styles.hiddenLayer}>
          </View>
          <Text style={styles.title}>Speek</Text>
        </>
      </TouchableHighlight>
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  Box: {
    height: 150,
    width: Dimensions.get('window').width > 350 ? 350 : 300,
    backgroundColor: Colors.White,
    borderRadius: 12,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    position: 'absolute',
    zIndex: 5,
    color: Colors.White,
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  hiddenLayer: {
    height: 150,
    width: Dimensions.get('window').width > 350 ? 350 : 300,
    backgroundColor: Colors.Grey,
    borderRadius: 12,
    opacity: .7,
    position: 'absolute',
    zIndex: 2,
  },
  Imagebackground: {
    height: 150,
    position: 'absolute',
    zIndex: -1,
    width: Dimensions.get('window').width > 350 ? 350 : 300,
    resizeMode: 'cover',
  }
})

export default Home;