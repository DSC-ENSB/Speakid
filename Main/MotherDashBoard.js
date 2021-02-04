import React, { useState, useEffect } from 'react'
import Icone from 'react-native-vector-icons/Ionicons'
import { View, Text, StyleSheet, Dimensions, Button } from 'react-native'
import Colors from '../style/Colors'
import auth from '@react-native-firebase/auth'

const Mother = ({ navigation }) => {
  const [stories, setStories] = useState(null)
  const GetStories = () => {
    // function to fetch stories from firebase 
    setStories(['One', 'Two', 'Three'])
    console.log(stories)
  }
  const goToStory = () => {
    // function to redirect mother to specifque story
  }
  useEffect(() => {
    GetStories()
  }, [])
  return (
    <View>
      <View style={styles.nav}>
        <Icone.Button
          name="settings"
          onPress={() => console.log('Hello')}
          size={22}
          backgroundColor="transparent"
          color={Colors.Black}
        >
        </Icone.Button>
      </View>
      <Button
        onPress={() => auth().signOut()}
        title='Log-out'
      >
      </Button>
      <View style={styles.statistcs}>
        <Text>Statistcs ...</Text>
      </View>
      <View style={styles.motherDutty}>
        <View style={styles.motherDuttyStories}>
          <Text>Stories</Text>
        </View>
        <View style={styles.motherDuttyOthers}>
          <Text>Others</Text>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  nav: {
    height: 73,
    position: 'relative',
    top: 0,
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    backgroundColor: Colors.White,
    elevation: 2,
  },
  statistcs: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    backgroundColor: Colors.White,
    borderRadius: 12,
    width: Dimensions.get('window').width - 40,
    elevation: 4,
    marginVertical: 10,
  },
  motherDutty: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  motherDuttyStories: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.White,
    borderRadius: 12,
    margin: 4,
    width: 150,
    elevation: 4,
  },
  motherDuttyOthers: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    backgroundColor: Colors.White,
    width: 150,
    borderRadius: 12,
    elevation: 4,
  }

})
export default Mother;