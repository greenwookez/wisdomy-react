import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import { SIGN_UP_SCREEN, SIGN_IN_SCREEN } from '../../../../routes';
import store, { actionCreators } from '../../../../services/store';

import RecButton from '../../../RecButton'
import getIsAuthorized from '../../../../utils/getIsAuthorized';

const Footer = ({
  navigation
}) => {
  const isAuthorized = getIsAuthorized()

  return (
    <View style={styles.container}>
      <View style={styles.aboutContainer}>
        <Text style={styles.about}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Text>
      </View>
      {isAuthorized && <RecButton onPress={() => { navigation.navigate(SIGN_UP_SCREEN); store.dispatch(actionCreators.setUserToken(null)) }}>Выйти</RecButton>}
      {!isAuthorized && <RecButton onPress={() => navigation.navigate(SIGN_IN_SCREEN)}>Войти</RecButton>}
      {!isAuthorized && <RecButton onPress={() => navigation.navigate(SIGN_UP_SCREEN)}>Регистрация</RecButton>}
    </View>
  )
};

export default Footer;
