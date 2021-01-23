import React from 'react';
import { View } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import Button from '../../components/Button';

import Quotes from '../../components/Quotes'
import styles from './styles';

const HomeScreen = () => {
  return (
    <ScreenWrapper>
      <Quotes />
      <View style={styles.buttons}>
        <View style={styles.like}>
          {/* <Button onPress={() => {}} iconName="staro"/> */}
        </View>
        <View style={styles.favo}>
          {/* <Button onPress={() => {}} iconName="like2"/> */}
        </View>
      </View>
    </ScreenWrapper>
  )
};

export default HomeScreen;
