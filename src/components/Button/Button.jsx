import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const Button = ({
  onPress,
  iconName,
  size
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
    >
      <Icon name={iconName} size={size} color="#fff"/>
    </TouchableOpacity>
  );
};

export default Button;

Button.defaultProps = {
  size: 36
};
