import HomeScreen from './screens/HomeScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

export const HOME_SCREEN = 'HomeScreen';
export const FAVOURITES_SCREEN = 'FavouritesScreen';
export const SIGN_IN_SCREEN = 'SignInScreen';
export const SIGN_UP_SCREEN = 'SignUpScreen';

const ROUTES = [
  {
    component: HomeScreen,
    name: HOME_SCREEN,
  },
  {
    component: FavouritesScreen,
    name: FAVOURITES_SCREEN,
  },
  {
    component: SignInScreen,
    name: SIGN_IN_SCREEN,
  },
  {
    component: SignUpScreen,
    name: SIGN_UP_SCREEN,
  },
];

export default ROUTES;
