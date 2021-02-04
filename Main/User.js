import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './Home'
import Mother from './MotherDashBoard'
import Colors from '../style/Colors'

const User = ({ navigation }) => {

  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="initialRoute"
      lazy={false}
      tabBarPosition="bottom"
      swipeEnabled={true}
      tabBarOptions={{
        labelStyle: { fontSize: 12 },
        indicatorStyle: {
          width: 0,
          height: 0,
          elevation: 0,
        },
        allowFontScaling: false,
        showIcon: true,
        activeTintColor: Colors.Primary,
        inactiveTintColor: Colors.Grey,
      }}
    >
      <Tab.Screen name="BeBe" component={Home} />
      <Tab.Screen name="Momy" component={Mother} />
    </Tab.Navigator>

  )
}
export default User;