import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Quote = ({
  text,
  author,
}) => {
  return (
    <View style={styles.content}>
      <Text style={styles.quote}>
        {text}
      </Text>
      <Text style={styles.author}>
        {author.name}
      </Text>
    </View>
  )
};

export default Quote;