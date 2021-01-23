import { StyleSheet, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  swipeable: {
    flex: 1
  },
  container: {
    flex: 1,
  }
})

export default styles;
