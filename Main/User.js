import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Home'
import Mother from './MotherDashBoard'
import Colors from '../style/Colors'

const User = ({ navigation, route }) => {
  const props = route.params
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
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          size = 25;
          if (route.name === 'Kid') {
            iconName = 'color-palette';
          } else if (route.name === 'mother') {
            iconName = 'thermometer';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}

    >
      <Tab.Screen name="Kid" component={Home} />
      <Tab.Screen name="mother" component={Mother} props={props} />
    </Tab.Navigator>

  )
}
export default User;