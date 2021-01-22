import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    flex: 1,
  },
  quote: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '400',
    marginBottom: 20,
  },
  author: {
    color: '#999',
    fontSize: 22,
    fontWeight: '800',
  },
  buttons: {
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  like: {
    justifyContent: 'flex-start',
    flex: 1,
    marginLeft: 20,
  },
  favo: {
    marginRight: 20,
  },
});

export default styles;
