import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Button = ({
  children,
  onPress,
  btnStyle
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, btnStyle]}
    >
      <Text style={styles.buttonLabel}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
