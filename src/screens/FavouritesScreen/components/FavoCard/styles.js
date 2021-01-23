import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  favoContainer: {
    backgroundColor: 'rgb(37,38,40)',
    borderRadius: 10,
    padding: 20,

  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 20,
  },
  author: {
    color: '#999',
    fontSize: 15,
    fontWeight: '800',
  },
  notFirst: {
    marginTop: 20,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonContainer: {
    alignItems: 'flex-end',
    flex: 1,
  }
});

export default styles;
