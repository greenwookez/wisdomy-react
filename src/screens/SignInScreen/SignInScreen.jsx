import React from 'react';
import { Text, View, TextInput, Keyboard  } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import RecButton from '../../components/RecButton';
import Input from '../../components/Input';
import { useForm } from 'react-hook-form';
import styles from './styles';

const SignInScreen = ({
  navigation
}) => {
  const { handleSubmit, control, errors } = useForm();
  const onSubmit = data => {
    Keyboard.dismiss();
    console.log(data);
  };
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.welcome}>Авторизация</Text>
          <Input
            control={control}
            name="nick"
            placeholder="Никнейм"
            autoCompleteType="username"
            textContentType="nickname"
            rules={{
                required: { value: true, message: 'Поле обязательно для ввода'},
            }}
            error={errors.nick}
            errorText={errors?.nick?.message}
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
