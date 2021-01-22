import React from 'react';
import { Text, View, TextInput  } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import RecButton from '../../components/RecButton'
import styles from './styles';

const SignInScreen = ({
  navigation
}) => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.welcome}>Авторизация</Text>
          <TextInput
            style={styles.input}
            placeholder="Nickname or email"
            placeholderTextColor="#888"
            returnKeyType={"nickname"}
            autoCapitalize="none"
            autoCompleteType="username"
            autoCorrect="false"
            keyboardAppearance="dark"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#888"
            returnKeyType={"nickname"}
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect="false"
            keyboardAppearance="dark"
          />
          <RecButton btnStyle={styles.button}>Войти в аккаунт</RecButton>
        </View>
      </View>
    </ScreenWrapper>
  )
};

export default SignInScreen;
