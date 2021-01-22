import React from 'react';
import { Text, View } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import Button from '../../components/Button';
import styles from './styles';

const HomeScreen = ({
  navigation
}) => {
  const kek = () => {

  }

  return (
    <ScreenWrapper>
      <View style={styles.content}>
        <Text style={styles.quote}>Лучше говорить меньше, но выбирать такие слова, в которых много смысла, чем произносить длинные, но пустые речи, которые столь же бесполезны, сколь легко произносятся.</Text>
        <Text style={styles.author}>Винсент Ван Гог</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.like}>
          <Button onPress={kek} iconName="staro"/>
        </View>
        <View style={styles.favo}>
          <Button onPress={kek} iconName="like2"/>
        </View>
      </View>
    </ScreenWrapper>
  )
};

export default HomeScreen;
