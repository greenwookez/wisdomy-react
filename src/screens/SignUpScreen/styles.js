import { StyleSheet, Dimensions} from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  content: {
    width: width * 0.8,
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
  },
  welcome: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 24,
    marginBottom: 30,
  },
  input: {
    width: width * 0.8,
    height: 50,
    backgroundColor: 'rgb(33,34,36)',
    marginBottom: 25,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    color: "#fff",
    fontWeight: '600',
  },
  button: {
    marginTop: 30,
    width: width * 0.8,
    backgroundColor: 'rgb(33,34,36)',
  }
});

export default styles;
