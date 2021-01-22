import React from 'react';
import GlobalContextProvider from './src/components/GlobalContext';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import FavouritesScreen from './src/screens/FavouritesScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import CustomDrawer from './src/components/CustomDrawer';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <GlobalContextProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={(props) => <CustomDrawer {...props} />}
          overlayColor='transparent'
          drawerStyle={{backgroundColor: 'rgb(30, 33, 35)'}}
          lazy
        >
          <Drawer.Screen name="HomeScreen" component={HomeScreen} />
          <Drawer.Screen name="FavouritesScreen" component={FavouritesScreen} />
          <Drawer.Screen name="SignInScreen" component={SignInScreen} />
          <Drawer.Screen name="SignUpScreen" component={SignUpScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </GlobalContextProvider>
  );
}

export default App;
