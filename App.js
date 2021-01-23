import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import GlobalContextProvider from './src/components/GlobalContext';
import CustomDrawer from './src/components/CustomDrawer';

import ROUTES from './src/routes';

const Drawer = createDrawerNavigator();

console.log(ROUTES);

const App = () => {
  return (
    <GlobalContextProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={(props) => <CustomDrawer {...props} />}
          overlayColor='transparent'
          drawerStyle={ { backgroundColor: 'rgb(30, 33, 35)' } }
          lazy
        >
          {
            ROUTES.map((route) => {
              return <Drawer.Screen name={route.name} component={route.component} key={route.name} />
            })
          }
        </Drawer.Navigator>
      </NavigationContainer>
    </GlobalContextProvider>
  );
}

export default App;
