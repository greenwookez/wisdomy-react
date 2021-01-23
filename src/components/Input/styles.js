import { StyleSheet, Dimensions} from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  input: {
    width: width * 0.8,
    height: 50,
    backgroundColor: 'rgb(33,34,36)',
    marginTop:25,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    color: "#fff",
    fontWeight: '600',
  },
  inputError: {
    borderWidth: 1,
    borderColor: 'rgb(196, 106, 213)',
  },
  error: {
    color: 'rgb(196, 106, 213)',
    fontSize: 12,
    position: 'relative',
    top: 5,
  }
});

export default styles;
