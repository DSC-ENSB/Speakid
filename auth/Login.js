import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icone from 'react-native-vector-icons/Ionicons'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import styles from '../style/LoginStyle';
import Colors from '../style/Colors';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState('');
  const [isSecure, setIsSecure] = useState(true)
  const [isProgressing, setIsProgressing] = useState(false);
  const [err, setError] = useState(null);

  const handleSubmit = () => {
    setIsProgressing(true)
    auth()
      .signInWithEmailAndPassword(email, pswd)
      .then((res) => {
        const uid = res.user.uid;
        const usersRef = database().ref(`user/${uid}`);
        usersRef
          .once('value')
          .then((snapShot) => {
            if (!snapShot.exists) {
              setError('User does not exist !');
              return;
            }
            const user = snapShot.val();
            navigation.push('user');
          })
          .catch((err) => {
            setIsProgressing(false)
            setError(err.message);
          });
      })
      .catch((err) => {
        setIsProgressing(false)
        setError(err.message);
      });
    if (err != null) {
      console.log(err.message)
    };
  };
  return (

    <View style={styles.footer}>
      <View style={styles.textbox}>
        <Text style={styles.heading}>Welcome Back !</Text>
        <Text style={styles.subHeading}>Kids Health</Text>
      </View>
      <View>
        <TextInput
          name="email"
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
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      }
      <Text style={[styles.link, { color: Colors.Black }]}>
        If you don't have an account ?
          <Text style={[styles.link, { marginHorizontal: 5 }]} onPress={() => navigation.navigate('register')}>
          Register
          </Text>
      </Text>
      <Text style={[styles.link, { alignSelf: 'flex-end', marginRight: 20 }]} onPress={() => navigation.navigate('resetpswd')}>
        Forget password ?
          </Text>
    </View>
  );
};
export default Login;