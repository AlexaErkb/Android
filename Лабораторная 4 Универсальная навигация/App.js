import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/Home'
import FavoriteScreen from './screens/Favorite'
import RecentScreen from './screens/Recent'
import MyProfile from './screens/MyProfile'
import Profile1 from './screens/Profile1'
import Profile2 from './screens/Profile2'
import Profile3 from './screens/Profile3'
import Profile4 from './screens/Profile4'
import Profile5 from './screens/Profile5'
import Profile6 from './screens/Profile6'

const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Osnova = (props) => {
    return (
    <AppStack.Navigator initialRouteName='Контакты'>
    <AppStack.Screen name="Контакты" component={HomeScreen} options={{ headerShown: false }}/>
    <AppStack.Screen name="Недавние" component={RecentScreen}/>
    <AppStack.Screen name="Избранное" component={FavoriteScreen} />
    <AppStack.Screen name="Мой профиль" component={MyProfile} />
    <AppStack.Screen name="Контакт 1" component={Profile1} />
    <AppStack.Screen name="Контакт 2" component={Profile2} />
    <AppStack.Screen name="Контакт 3" component={Profile3} />
    <AppStack.Screen name="Контакт 4" component={Profile4} />
    <AppStack.Screen name="Контакт 5" component={Profile5} />
    <AppStack.Screen name="Контакт 6" component={Profile6} />
    </AppStack.Navigator>
    );
}

const Recent = (props) => {
  return(
  <AppStack.Navigator initialRouteName='Недавние'>
  <AppStack.Screen name="Недавние" component={RecentScreen} options={{ headerShown: false }}/>
  </AppStack.Navigator>);
}

const Fav = (props) => {
  return(
  <AppStack.Navigator initialRouteName='Избранное'>
  <AppStack.Screen name="Избранное" component={FavoriteScreen} options={{ headerShown: false }}/>
  <AppStack.Screen name="Контакт 1" component={Profile1} />
  <AppStack.Screen name="Контакт 2" component={Profile2} />
  <AppStack.Screen name="Контакт 3" component={Profile3} />
  <AppStack.Screen name="Контакт 4" component={Profile4} />
  <AppStack.Screen name="Контакт 5" component={Profile5} />
  <AppStack.Screen name="Контакт 6" component={Profile6} />
  </AppStack.Navigator>);
}

const DrawerNav = () => {
  return(
    <Drawer.Navigator initialRouteName='Контакты'>
      <Drawer.Screen name='Контакты' component={Osnova} />
      <Drawer.Screen name='Недавние' component={Recent} />
      <Drawer.Screen name='Избранное' component={Fav} />
  </Drawer.Navigator>
  );
}

const Main = () => {
  return(<NavigationContainer>
      <DrawerNav />
 </NavigationContainer>);
}


export default Main;