import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icone from "react-native-vector-icons/Ionicons";
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import styles from '../style/RegisterStyle'
import Colors from '../style/Colors'


const Register = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState('');
  const [isSecure, setIsSecure] = useState(true)
  const [isProgressing, setIsProgressing] = useState(false)
  const [err, setError] = useState(null);


  const handleSubmit = () => {
    if (userName === '') { setError('User name is required') }
    else if (pswd.length < 8) { setError('password must contain 8 letters or more ') }
    else {
      setIsProgressing(true)
      auth()
        .createUserWithEmailAndPassword(email, pswd)
        .then((response) => {
          const uid = response.user.uid;
          const data = {
            id: uid,
            email,
            displayName: userName,
            password: pswd,
          };
          const usersRef = database().ref(`user/${uid}`);
          usersRef
            .set(data)
            .then(() => {
              navigation.navigate('DiagonsticForum')
            })
        })
        .catch((err) => {
          setIsProgressing(false)
          setError(err.message);
        });
    }

    if (err != null) {
      console.log(err)
    };
  }

  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <View style={styles.textbox}>
          <Text style={styles.heading}>Create an account </Text>
          <Text style={styles.subHeading}>Stay healty </Text>
        </View>
        <View>
          <TextInput
            name="Child Name"
            placeholder="Child name"
            required
            style={styles.input}
            placeholderTextColor="grey"
            onChangeText={(text) => setUserName(text)}
            value={userName}
          />
          <TextInput
            name="email"
            required={true}
            placeholder="e-mail"
            keyboardType="email-address"
            style={styles.input}
            placeholderTextColor="grey"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <View style={styles.secureEntry}>
            <TextInput
              name="pswd"
              placeholder="password"
              secureTextEntry={isSecure}
              style={styles.input}
              placeholderTextColor="grey"
              onChangeText={(text) => setPswd(text)}
              value={pswd}
            />
            <View style={styles.btnHandler}>
              {isSecure ?
                <Icone.Button
                  name="eye"
                  onPress={() => setIsSecure(!isSecure)}
                  size={22}
                  backgroundColor="transparent"
                  color={Colors.BLACK}
                >
                </Icone.Button>
                :
                <Icone.Button
                  name="eye-off"
                  onPress={() => setIsSecure(!isSecure)}
                  size={22}
                  backgroundColor="transparent"
                  color={Colors.BLACK}
                >
                </Icone.Button>
              }
            </View>
          </View>
        </View>
        {isProgressing ?
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            disabled={true}>
            <ActivityIndicator size="small" color={Colors.White} />
          </TouchableOpacity>
          :
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={handleSubmit}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>
        }

        <Text style={[styles.link, { color: "#000" }]}>
          Already have an account ?
        <Text style={styles.link} onPress={() => navigation.navigate('login')}>
            Log in
        </Text>
        </Text>
      </View>
    </View >
  );
};
export default Register;
