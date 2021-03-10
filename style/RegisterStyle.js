import { StyleSheet, Dimensions } from 'react-native';
import Colors from './Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GREY,
  },
  footer: {
    flex: 1,
    backgroundColor: Colors.White,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: "space-evenly",
    alignItems: 'center',
    zIndex: 2,
  },
  inActive: { display: 'none' },
  heading: {
    position: "relative",
    top: 10,
    marginBottom: 10,
    fontSize: 22,
    color: Colors.BLACK,
    fontWeight: 'bold',
    fontFamily: 'Montserrat Regular',
    textAlign: "left",
  },
  textbox: {
    alignSelf: "flex-start",
    marginLeft: 40,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 20,
    color: 'grey',
    fontFamily: 'Montserrat Regular',
    textAlign: "left",
  },
  button: {
    elevation: 2,
    alignSelf: 'center',
    marginVertical: 15,
    width: Dimensions.get('window').width - 60,
    textAlign: 'center',
    padding: 15,
    backgroundColor: Colors.FirstList,
    borderRadius: 8,
    fontFamily: 'Montserrat Regular',
    fontWeight: 'bold',
  },
  input: {
    marginVertical: 10,
    width: Dimensions.get('window').width - 60,
    backgroundColor: Colors.Grey,
    borderColor: Colors.Grey,
    borderRadius: 12,
    borderWidth: 1,
    paddingLeft: 20,
  },
  buttonText: {
    fontSize: 17,
    fontFamily: 'Montserrat Regular',
    alignSelf: 'center',
    color: Colors.White,
  },
  link: {
    marginVertical: 10,
    fontFamily: 'Montserrat Regular',
    color: Colors.FirstList,
  },
  btnHandler: {
    position: 'absolute',
    right: 5,
    zIndex: 888,
  },
  secureEntry: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;