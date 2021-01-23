import React from 'react';
import { View, Text, Linking } from 'react-native';

import styles from './styles';
import { SIGN_UP_SCREEN, SIGN_IN_SCREEN } from '../../../../routes';
import store, { actionCreators } from '../../../../services/store';

import RecButton from '../../../RecButton'
import getIsAuthorized from '../../../../utils/getIsAuthorized';
import { TouchableOpacity } from 'react-native-gesture-handler';

const GITHUB_LINK = 'https://github.com/greenwookez/wisdomy-react';

const Footer = ({
  navigation
}) => {
  const isAuthorized = getIsAuthorized()

  const onSignOut = () => { 
    navigation.navigate(SIGN_UP_SCREEN);
    store.dispatch(actionCreators.setUserToken(null))
  }

  return (
    <View style={styles.container}>
      <View style={styles.aboutContainer}>
        <Text style={styles.about}>Release 1.0.0</Text>
        <TouchableOpacity 
          onPress={() => { Linking.openURL(GITHUB_LINK) }}
        >
          <Text style={[styles.about, styles.github]}>
            GitHub
          </Text>
        </TouchableOpacity>
      </View>

      {isAuthorized && <RecButton onPress={onSignOut}>Выйти</RecButton>}
      {!isAuthorized && <RecButton onPress={() => navigation.navigate(SIGN_IN_SCREEN)}>Войти</RecButton>}
      {/* {!isAuthorized && <RecButton onPress={() => navigation.navigate(SIGN_UP_SCREEN)}>Регистрация</RecButton>} */}
    </View>
  )
};

export default Footer;
