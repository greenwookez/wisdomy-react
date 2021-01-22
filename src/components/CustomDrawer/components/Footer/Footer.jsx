import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import RecButton from '../../../RecButton'

const Footer = ({
  navigation
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.aboutContainer}>
        <Text style={styles.about}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Text>
      </View>
      <RecButton onPress={() => navigation.navigate('SignInScreen')}>Войти</RecButton>
      <RecButton onPress={() => navigation.navigate('SignUpScreen')}>Регистрация</RecButton>
    </View>
  )
};

export default Footer;
