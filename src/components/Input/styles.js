import { StyleSheet, Dimensions} from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
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
});

export default styles;
