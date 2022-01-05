import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  mainView: {
    flex: 1,
    backgroundColor: '#FFFF',
    color: '#FFFF'
  },

  containerHeader: {
    height: '10%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#181414',
    padding: 15
  },

  boxCallList: {
    flex: 1,
    marginTop: 10,
    minHeight: 75,
  },

  titlePost: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5
  },

  textPost: {
    textTransform: 'capitalize',
    fontSize: 13,
    textAlign: 'center'
  },

  contentMain: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },

});
