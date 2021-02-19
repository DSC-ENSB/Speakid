import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Colors from '../style/Colors'

const Tips = () => {
  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <Text style={styles.tip}> إجراء محادثاتٍ مع الطفل</Text>
        <Text style={styles.tip}> الإشارة إلى الألوان والأشكال</Text>
        <Text style={styles.tip}> الذهاب إلى التسوق مع الطفل</Text>
        <Text style={styles.tip}> التحدث مع الطفل بشكلٍ مباشر</Text>
        <Text style={styles.tip}>  السماح للطفل بالتفاعل مع الأطفال الآخرين</Text>
        <Text style={styles.tip}> قص صور لأشياء يحبها الطفل وتركيبها أو تقسيمها إلى فئات</Text>
        <Text style={styles.tip}> يجب على الوالدين إعطاء الطفل كامل الانتباه عندما يتحدث إليه</Text>
        <Text style={styles.tip}> مشاهدة برامج على التلفاز والهاتف المحمول، والتحدث معه حول مضمونها</Text>
        <Text style={styles.tip}>  يجب على الوالدين عدم الإجابة عن الطفل في حال توجه أحدٍ بالسؤال إليه</Text>
        <Text style={styles.tip}> يجب على الوالدين استخدام الإيماءات عند التحدث للطفل أو الإشارة إلى الأشياء</Text>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
  },
  tip: {
    fontSize: 22,
    elevation: 2,
    backgroundColor: Colors.White,
    padding: 10,
    borderRightColor: Colors.FirstList,
    borderRightWidth: 4,
    borderRadius: 8,
    lineHeight: 50,
    color: Colors.Black,
    marginVertical: 5,
  }
})
export default Tips;