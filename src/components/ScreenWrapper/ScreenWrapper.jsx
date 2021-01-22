import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import styles from './styles';

const ScreenWrapper = ({
  children
}) => {
  return (
    <SafeAreaView
      style= {styles.safeArea}
    >
      <View style={styles.container}>
        <StatusBar barStyle="light-content" networkActivityIndicatorVisible = {true}/>
        {children}
      </View>
    </SafeAreaView>
  )
};

export default ScreenWrapper;
