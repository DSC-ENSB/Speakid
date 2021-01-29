import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Loading from './auth/Loading'
import Login from './auth/Login'
import Register from './auth/Register'
import User from './Main/User'

const stack = createStackNavigator()
const App = () => {
  const [user, setUser] = useState(false)
  const navigationOptions = {
    headerShown: false
  }
  setTimeout(() => {
    setUser(true)
  }, 5000)
  return (
    <NavigationContainer>
      <StatusBar
        barStyle='light-content' />
      <stack.Navigator>

        {user ?
          <stack.Screen
            name="user"
            component={User}
            options={navigationOptions}
          />
          :
          <>
            <stack.Screen
              name="Loading"
              component={Loading}
              options={navigationOptions}
            />
            <stack.Screen
              name="register"
              component={Register}
              options={navigationOptions}
            />
            <stack.Screen
              name="login"
              component={Login}
              options={navigationOptions}
            />
          </>
        }

      </stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
