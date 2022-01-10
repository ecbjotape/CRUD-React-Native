import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  mainView: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  containerHeader: {
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#181414',
    padding: 15
  },

  containerContent: {
    flex: 1
  },

  renderListTasks: {
    flex: 1,
  },

  boxCallList: {
    flex: 1,
    marginTop: 10,
    minHeight: 75,
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#189',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },

  addWrapper: {
    width: 80,
    height: 60,
    backgroundColor: '#189',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },

  addText: {
    color: '#FFF'
  },

  tasksWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },

  items: {
    marginTop: 30,
  },

  centerContent: {
    alignItems: 'center'
  },

  warningTasks: {
    textTransform: 'uppercase',
  },

  logoModal: {
    resizeMode: 'contain',
    height: 150,
  },

  writeTaskWrapper: {
    margin: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  contentMain: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },

  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },

  itemText: {
    maxWidth: '80%',
  },

  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },

  contentTask: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  buttonTask: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 150,
  },
});
