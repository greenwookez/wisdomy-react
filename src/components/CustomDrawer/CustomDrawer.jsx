import React from 'react';
import { SafeAreaView } from 'react-native';
import {
  DrawerItem,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import Header from './components/Header';
import Footer from './components/Footer';
import { HOME_SCREEN, FAVOURITES_SCREEN } from '../../routes';
import styles from './styles';

const CustomDrawer = ({ navigation, progress }) => {
  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });
  return (
    <Animated.View style={[styles.drawerContainer, { transform: [{ translateX }] }]}>
      <SafeAreaView style={styles.content}>
        <Header />
        <DrawerItem label="Цитаты" onPress={() => navigation.navigate(HOME_SCREEN)} labelStyle={styles.label} activeTintColor="#fff"/>
        <DrawerItem label="Избранное" onPress={() => navigation.navigate(FAVOURITES_SCREEN)} labelStyle={styles.label}  activeTintColor="#fff"/>
        <Footer navigation={navigation}/>
      </SafeAreaView>
    </Animated.View>
  )
};

export default CustomDrawer;
