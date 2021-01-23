import React from 'react';
import { useForm } from 'react-hook-form';
import { Text, View, Keyboard  } from 'react-native';

import store, { actionCreators } from '../../services/store'
import ScreenWrapper from '../../components/ScreenWrapper';
import RecButton from '../../components/RecButton';
import Input from '../../components/Input';
import usersApi from '../../services/api/usersApi'

import styles from './styles';

const SignInScreen = () => {
  const { handleSubmit, control, errors } = useForm();

  const onSubmit = async (data) => {
    Keyboard.dismiss();

    const { jwt: userToken } = await usersApi.signIn(data)

    if (userToken) {
      store.dispatch(actionCreators.setUserToken(userToken))
    }
  }

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.welcome}>Авторизация</Text>
          <Input
            control={control}
            name="email"
            placeholder="Email"
            autoCompleteType="email"
            textContentType="emailAddress"
            rules={{
                required: { value: true, message: 'Поле обязательно для ввода'},
            }}
            error={errors.email}
            errorText={errors?.email?.message}
          />
          <Input
            control={control}
            name="password"
            placeholder="Password"
            autoCompleteType="password"
            textContentType="newPassword"
            rules={{
                required: { value: true, message: 'Поле обязательно для ввода'},
            }}
            error={errors.password}
            errorText={errors?.password?.message}
          />
          <RecButton onPress={handleSubmit(onSubmit)} btnStyle={styles.button}>Войти в аккаунт</RecButton>
        </View>
      </View>
    </ScreenWrapper>
  )
};

export default SignInScreen;
