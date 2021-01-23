import React from 'react';
import { TextInput } from 'react-native';
import { Controller } from 'react-hook-form';
import styles from './styles';

const Input = ({
  control,
  name,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ onChange, value }) => (
        <TextInput
          style={styles.input}
          placeholderTextColor="#888"
          autoCapitalize="none"
          autoCorrect="false"
          keyboardAppearance="dark"
          returnKeyType="done"
          value={value}
          onChangeText={(text) => onChange(text)}
          {...props}
        />
      )}
      defaultValue=""
    />
  )
}

export default Input;
