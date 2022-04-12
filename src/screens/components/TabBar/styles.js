import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  tabView: {
    alignSelf: 'center',
    width: width * 0.95,
    flexDirection: 'row',
    backgroundColor: '#fff',
   marginVertical: height * 0.02,
    borderRadius: width * 0.15,
    borderColor:'#000',
    borderWidth:0.5,
    padding: '1%',
    justifyContent: 'space-around',
  },
  tab: {
    width: width * 0.43,
    height: height * 0.05,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.15,
  },
  label: {
    fontSize: width * 0.04,
    color: '#9196b5',
    fontFamily: 'Montserrat-Regular',
  },
});

export default styles;
