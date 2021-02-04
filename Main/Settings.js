import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icone from "react-native-vector-icons/Ionicons";
import auth from '@react-native-firebase/auth'

import Colors from '../style/Colors';

const Settings = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.signOutButton}>
        <Icone.Button
          name="person-remove"
          size={22}
          color={Colors.White}
          backgroundColor='transparent'
          iconStyle={{ marginRight: 2 }}
          onPress={() => auth().signOut()}
        >
        </Icone.Button>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  signOutButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    elevation: 2,
    backgroundColor: Colors.Primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 75,
    width: 75,
    borderRadius: 50,
  }
})
export default Settings;