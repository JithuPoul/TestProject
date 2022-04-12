import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonContainer: {
    marginTop: height * 0.002,
    width: width * 0.2,
    // height: height * 0.035,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'green',
    padding: '1%',
  },
  buttonContainer2: {
    marginTop: height * 0.03,
    width: width * 0.5,
    // height: height * 0.035,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'green',
    padding: '1%',
  },
  boxContainer: {
    paddingTop: height * 0.01,
    backgroundColor: 'white',
    elevation: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    margin: height * 0.01,
    borderRadius: 10,
  },
  item: {
    margin: width * 0.02,
    marginBottom: height * 0.01,
  },
  headerStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  itemPhoto: {
    width: width * 0.42,
    height: height * 0.15,
    backgroundColor: '#ededed',
    borderRadius: 5,
    overflow: 'visible',
  },
  itemPhoto2: {
    width: width * 0.9,
    height: height * 0.3,
    backgroundColor: '#ededed',
    borderRadius: 5,
    overflow: 'visible',
  },
  listContainer: {
    marginTop: height * 0.01,
    flex: 1,
  },
  listContainer2: {
    marginVertical: height * 0.02,
  },
  emptyContainer: {
    margin: width * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeStyle: {
    position: 'absolute',
    top: 1,
    right: 1,
  },
  name: {
    height: height * 0.06,
    width: width * 0.42,
    alignItems: 'flex-start',
  },
  nameView: {
    marginVertical: width * 0.03,
    marginHorizontal: width * 0.03,
  },
  loaderContainer: {
    height: height * 1,
    width: width * 1,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  indicator: {
    height: height * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: width * 0.03,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 15,
    marginHorizontal: 10,
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: width * 0.01,
  },
  itemText: {
    color: 'black',
    marginTop: 5,
    marginBottom: 5,
    width: width * 0.4,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  itemText2: {
    color: '#FAA311',
    marginTop: 5,
    width: width * 0.4,
    textAlign: 'left',
  },
  descStyle: {
    paddingVertical: width * 0.02,
  },
  descriptionText: {
    color: 'black',
    marginTop: 2,
    width: width * 0.42,
    textAlign: 'left',
  },
  sectionList: {
    paddingLeft: width * 0.03,
    paddingRight: width * 0.03,
    paddingTop: height * 0.01,
    paddingBottom: height * 0.01,
  },
});

export default styles;
