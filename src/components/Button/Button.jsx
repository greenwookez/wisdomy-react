import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const Button = ({
  onPress,
  iconName
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
    >
      <Icon name={iconName} size="36" color="#fff"/>
    </TouchableOpacity>
  );
};

export default Button;
