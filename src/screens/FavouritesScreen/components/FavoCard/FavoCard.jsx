import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../../../components/Button';
import styles from './styles';

const FavoCard = ({
  text,
  author,
  first
}) => {
  return (
    <View style={[styles.favoContainer, !first && styles.notFirst]}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.footer}>
        <Text style={styles.author}>{author.name}</Text>
        <View style={styles.buttonContainer}>
          <Button onPress={() => {}} iconName="delete" size={25}/>
        </View>
      </View>
    </View>
  )
};

export default FavoCard;
