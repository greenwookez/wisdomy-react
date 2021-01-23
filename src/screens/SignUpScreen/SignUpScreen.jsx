import React from 'react';
import { Text, View, TextInput, Keyboard  } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import RecButton from '../../components/RecButton';
import Input from '../../components/Input';
import { useForm, Controller } from 'react-hook-form';
import styles from './styles';

const SignUpScreen = ({
  navigation
}) => {
  const { handleSubmit, control } = useForm();
  const onSubmit = data => {
    Keyboard.dismiss();
    console.log(data);
  }
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.welcome}>Регистрация</Text>
          <Input control={control} name="nick" placeholder="Nickname" autoCompleteType="username" textContentType="nickname"/>
          <Input control={control} name="email" placeholder="Email" autoCompleteType="email" textContentType="emailAddress"/>
          <Input control={control} name="password" placeholder="Password" autoCompleteType="password" textContentType="newPassword"/>
          <RecButton onPress={handleSubmit(onSubmit)} btnStyle={styles.button}>Создать аккаунт</RecButton>
        </View>
      </View>
    </ScreenWrapper>
  )
};

export default SignUpScreen;
