import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  formView: {
    flex: 1,
    backgroundColor: '#FFFF',
    justifyContent: 'space-evenly',
    padding: 30
  },

  formTitle: {
    color: '#000000',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  paddingView: {
    padding: 15,
    paddingHorizontal: 30,
  },

  buttonView: {
    marginTop: 10,
  },

  viewInputStyle: {
    marginVertical: 5,
  },

  inputStyle: {
    fontSize: 14,
    backgroundColor: '#0000000B',
  },

  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
});
