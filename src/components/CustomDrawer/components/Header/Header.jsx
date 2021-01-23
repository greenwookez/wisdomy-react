import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Гость</Text>
    </View>
  )
};

export default Header;
