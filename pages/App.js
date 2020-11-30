import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import SplashScreen from './src/pages/splashscreen';
import Register from './src/pages/Register';
import Login from './src/pages/login';
import Home from './src/pages/home';
import profil from './src/pages/home';




 const AuthStack = createStackNavigator(
 {
  login: {screen : Login},
  Register: {screen : Register},
  profil: {screen:profil}
 
 
  
 });

 const MainStack = createStackNavigator({
  Home: {screen: Home}
 });

 const Navigators = createSwitchNavigator({
  Auth: { screen: AuthStack},
  Main: { screen: MainStack}
 });

 export default createAppContainer(Navigators);