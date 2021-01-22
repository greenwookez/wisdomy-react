import React from 'react';
import { View } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import Button from '../../components/Button';

import SwipeableList from '../../components/SwipeableList'
import Quote from '../../components/Quote'
import styles from './styles';

const HomeScreen = () => {
  return (
    <ScreenWrapper>
      <SwipeableList>
        <Quote
          text="Лучше говорить меньше, но выбирать такие слова, в которых много смысла, чем произносить длинные, но пустые речи, которые столь же бесполезны, сколь легко произносятся."
          author={ { name: 'Ван Гог' } }
        />
      </SwipeableList>
      <View style={styles.buttons}>
        <View style={styles.like}>
          <Button onPress={() => {}} iconName="staro"/>
        </View>
        <View style={styles.favo}>
          <Button onPress={() => {}} iconName="like2"/>
        </View>
      </View>
    </ScreenWrapper>
  )
};

export default HomeScreen;
