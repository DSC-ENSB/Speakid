import React, { useState, useEffect } from 'react'
import Icone from 'react-native-vector-icons/Ionicons'
import { View, Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native'
import Colors from '../style/Colors'
import { LineChart } from "react-native-chart-kit";

const Mother = ({ navigation }) => {
  const [stories, setStories] = useState(null)
  const GetStories = () => {
    // function to fetch stories from firebase
    setStories(['One', 'Two', 'Three'])
    console.log(stories)
  }
  useEffect(() => {
    GetStories()
  }, [])
  return (
    <View>
      <View style={styles.nav}>
        <Icone.Button
          name="settings"
          underlayColor={Colors.Grey}
          onPress={() => navigation.navigate('settings')}
          size={22}
          backgroundColor="transparent"
          color={Colors.Black}
        >
        </Icone.Button>
        <Text style={styles.brand}>Speakid</Text>
      </View>
      <View style={styles.statistcs}>
        <LineChart
          data={{
            labels: ["Sun", "Mon", "Tur", "Wen", "Thr", "fri", "Sat"],
            datasets: [
              {
                data: [
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10
                ]
              }
            ]
          }}
          width={Dimensions.get("window").width - 60} // from react-native
          height={180}
          yAxisSuffix="hr"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#fff",
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#e26a00"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View>
      <View style={styles.motherDutty}>
        <TouchableHighlight
          activeOpacity={.8}
          underlayColor={Colors.Grey}
          onPress={() => navigation.navigate('stories')}
          style={styles.motherDuttyStories}>
          <Text style={styles.text}>Stories</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigation.navigate('tips')}
          activeOpacity={.8}
          underlayColor={Colors.Grey}
          style={styles.motherDuttyOthers}>
          <Text style={styles.text}>TIPS</Text>
        </TouchableHighlight>
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
    paddingHorizontal: 10,
    flexDirection: "row-reverse",
    alignItems: 'center',
    justifyContent: 'space-between',
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
    backgroundColor: Colors.FirstList,
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
    backgroundColor: Colors.SecondList,
    width: 150,
    borderRadius: 12,
    elevation: 4,
  },
  text: {
    color: Colors.White,
    fontWeight: "bold",
    fontSize: 16,
  },
  brand: {
    color: Colors.Primary,
    fontWeight: "bold",
    fontSize: 18,
  }

})
export default Mother;
