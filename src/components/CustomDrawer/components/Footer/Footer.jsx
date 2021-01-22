import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import {
  DrawerItem,
} from '@react-navigation/drawer';
import RecButton from '../../../RecButton'

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.aboutContainer}>
        <Text style={styles.about}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Text>
      </View>
      <RecButton>Войти</RecButton>
      <RecButton>Регистрация</RecButton>
    </View>
  )
};

export default Footer;
