import React from 'react';
import { TextInput, Text } from 'react-native';
import { Controller } from 'react-hook-form';
import styles from './styles';

const Input = ({
  control,
  name,
  rules,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ onChange, value }) => (
        <>
          <TextInput
            style={[styles.input, props.error && styles.inputError]}
            placeholderTextColor="#888"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardAppearance="dark"
            returnKeyType="done"
            value={value}
            onChangeText={(text) => onChange(text)}
            {...props}
          />
          {props.errorText && (
            <Text style={styles.error}>{props.errorText}</Text>
          )}
        </>
      )}
      defaultValue=""
    />
  )
}

export default Input;
