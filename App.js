import React from 'react';
import GlobalContextProvider from './src/components/GlobalContext';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import FavouritesScreen from './src/screens/FavouritesScreen';
import CustomDrawer from './src/components/CustomDrawer';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <GlobalContextProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={props => <CustomDrawer {...props} />}
          overlayColor='transparent'
          drawerStyle={{backgroundColor: 'rgb(30, 33, 35)'}}
          lazy
        >
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Favourites" component={FavouritesScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </GlobalContextProvider>
  );
}

export default App;
