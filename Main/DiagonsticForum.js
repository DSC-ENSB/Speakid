import React from 'react'
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'
import Colors from '../style/Colors'
import Question from '../Components/Question'
import Questions from '../Components/Questions'

const ChooseAge = ({ navigation }) => {

  const Redirect = () => navigation.navigate('user')

  return (
    <>
      <View style={styles.noticeBox}>
        <Text style={styles.title}>الأسئلة قد تكون  طويلة نوعا ما </Text>
        <Text style={[styles.title, { fontSize: 16 }]}> من أجلهم نستحمل </Text>
      </View>
      <View style={styles.container}>
        <ScrollView>
          <Question title="هل لطفلكم توأم ؟" />
          <Question title="هل عانى أو يعاني أحد أو كل الأخوة من اضطرابات اللغة ؟" />
          <Question title="هل عانى أو يعاني أحد الأبوين من أحد اضطرابات اللغة ؟" />
          <Questions title="إذا كان الجواب بنعم فما هو نوع الاضطراب**  ؟" answers={[`الاضطرابات النطقية`, `تأخر الكلام`, `تأخر اللغة وتأخر النمو اللغوي`, `اضطراب الكلام كالتأتأة`]} />
          <Question title="هل تعرض أو يتعرض الطفل لأي نوع من العنف؟ " />
          <Question title="هل يقوم الطفل بتصرفات عنيفة تجاه أقرانه/ اخوته؟" />
          <Question title="هل تلاحظون أي مؤشرات مرض التوحد في طفلكم؟" />
          <Text style={styles.Header}> قبل الولادة </Text>
          <Question title="هل عانت الأم من أمراض مزمنة؟" />
          <Questions title="نوع المرض ؟" answers={[`ارتفاع ضغط الدم`, `السكري`, `الحصبة الألمانية rubéole`, `داء المُقَوَّسَات toxoplasmose`, `مرض اخر`]} />
          <Question title="هل كانت فترة الحمل طبيعية ؟" />
          <Question title="هل عانت الأم من مرض العامل الرايزيسي؟" />
          <Text style={styles.Header}>عند الولادة</Text>
          <Question title="هل ولد طفلكم ولادة مبكرة؟" />
          <Question title="هل ولد طفلكم ولادة مبكرةهل ولد طفلكم ولادة طبيعية أم قيصرية؟ ***" />
          <Question title="هل كان وزن طفلكم أقل أو أكثر من الطبيعي عند الولادة؟" />
          <Question title="هل كان تنفس طفلكم عند الولادة طبيعي؟" />
          <Question title="هل كان صراخ طفلكم عند الولادة طبيعي؟" />
          <Question title="هل كان لون بشرة طفلكم عند الولادة طبيعي؟" />
          <Question title="هل مكث طفلكم في العناية المشددة بعد الولادة مباشرة؟" />
          <Question title="هل عانى طفلكم من لجام اللسان عند الولادة مباشرة؟" />
          <Text style={styles.Header}>بعد الولادة</Text>
          <Question title="هل لاحظتم مشكلة في تحريك اللسان؟" />
          <Question title="هل خضع الطفل لعملية جراحية على مستوى دماغه لسانه أو أنفه؟" />
          <Question title="هل يشخر الطفل عند النوم؟" />
          <Question title="هل يعاني الطفل من نقص في السمع؟" />
          <Question title="هل يعاني الطفل من نقص في الرؤية؟" />
          <Question title="هل يعاني الطفل من أمراض نفسية أو عقلية؟" />
          <Question title="هل يعاني طفلكم عادة من تشنج في عضلات الجسم؟" />
          <Question title="هل عانى أو يعاني طفلكم عادة من ارتفاع في الحرارة؟" />
          <Text style={styles.Header}> مراحل تطور الطفل</Text>
          <Question title="هل كانت مراحل نمو وتطور الطفل عادية (الأكل المشي الحبي...) ؟" />
          <Question title="هل قمتم بتطعيم الطفل في الأوقات المناسبة؟" />
          <Question title="هل يعاني الطفل من صعوبة البدء في نطق الكلمات أو العبارات أو الجمل؟" />
          <Question title="هل يعاني الطفل من تكرار الأصوات أو المقاطع أو الكلمات؟" />
          <Question title="هل طفلكم انطوائي؟" />
          <Question title="هل طفلكم عنيد؟" />
          <Question title="هل يحب طفلكم ويستمتع باللعب؟" />
          <Question title="هل طفلكم كثير الحركة؟" />
          <Question title="هل يجد طفلكم صعوبة في التركيز؟" />
          <Question title="هل يسرح طفلكم عادة؟" />
          <Question title=" هل يشاهد طفلكم التلفاز؟" />
          <Question title="هل يستخدم طفلكم الأجهزة الذكية؟ " />
        </ScrollView>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 32,
    justifyContent: 'space-evenly',
    alignItems: "flex-end",
  },
  noticeBox: {
    height: 120,
    alignSelf: 'center',
    width: Dimensions.get('window').width,
    backgroundColor: Colors.Primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: Colors.White,
    fontSize: 18,
  },
  Header: {
    color: Colors.Black,
    fontSize: 18,
    fontWeight: 'bold',
  }

})
export default ChooseAge;