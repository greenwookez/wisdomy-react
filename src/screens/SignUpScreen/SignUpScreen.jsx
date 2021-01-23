import React from 'react';
import { Text, View, Keyboard, TouchableOpacity  } from 'react-native';
import { useForm } from 'react-hook-form';

import CoomingSoon from '../../components/CoomingSoon'
import store, { actionCreators } from '../../services/store'
import usersApi from '../../services/api/usersApi'
import ScreenWrapper from '../../components/ScreenWrapper';
import RecButton from '../../components/RecButton';
import Input from '../../components/Input';
import { signUp } from '../../services/api/usersApi';
import { SIGN_IN_SCREEN } from '../../routes';
import styles from './styles';
import { HOME_SCREEN } from '../../routes';

const SignUpScreen = ({ navigation }) => {
  return (
    <ScreenWrapper>
      <CoomingSoon />
    </ScreenWrapper>
  )

  const { handleSubmit, control, errors } = useForm();

  const onSubmit = async (data) => {
    Keyboard.dismiss();

    await usersApi.signUp(data)

    const { jwt: userToken } = await usersApi.signIn(data)

    if (userToken) {
      store.dispatch(actionCreators.setUserToken(userToken))
      navigation.navigate(HOME_SCREEN)
    }
  };

  const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.welcome}>Регистрация</Text>
          <Input
            control={control}
            name="nick"
            placeholder="Никнейм"
            autoCompleteType="username"
            textContentType="nickname"
            rules={{
                required: { value: true, message: 'Поле обязательно для ввода'},
                minLength: { value: 4, message: 'Никнейм слишком короткий'},
                maxLength: { value: 20, message: 'Никнейм слишком длинный'},
            }}
            error={errors.nick}
            errorText={errors?.nick?.message}
          />
          <Input
            control={control}
            name="email"
            placeholder="Электронная почта"
            autoCompleteType="email"
            textContentType="emailAddress"
            rules={{
                required: { value: true, message: 'Поле обязательно для ввода'},
                pattern: { value: EMAIL_REGEX, message: 'Неверная электронная почта'}
            }}
            error={errors.email}
            errorText={errors?.email?.message}
          />
          <Input
            control={control}
            name="password"
            placeholder="Пароль"
            autoCompleteType="password"
            textContentType="newPassword"
            rules={{
                required: { value: true, message: 'Поле обязательно для ввода'},
                minLength: { value: 4, message: 'Пароль слишком короткий'},
                maxLength: { value: 20, message: 'Пароль слишком длинный'},
            }}
            error={errors.password}
            errorText={errors?.password?.message}
            secureTextEntry={true}
          />
          <RecButton onPress={handleSubmit(onSubmit)} btnStyle={styles.button}>Создать аккаунт</RecButton>
          <View style={styles.helpContainer}>
            <Text style={styles.help}>Уже есть акканут?</Text>
            <TouchableOpacity onPress={() => { navigation.navigate(SIGN_IN_SCREEN) }} style={styles.helpButton}><Text style={styles.helpButtonLabel}>Войдите</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  )
};

export default SignUpScreen;
