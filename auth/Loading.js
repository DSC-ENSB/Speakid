import React from 'react';
import { View, ActivityIndicator } from 'react-native'


const Loading = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size='large' color="royalblue" />
    </View>
  )
}
const styles = {
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 16,
  }
}
export default Loading;