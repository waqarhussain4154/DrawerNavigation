/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator  screenOptions={{
    headerStyle: {
      backgroundColor: '#009387'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      title: 'Overview',
      headerLeft: () => (
        <Icon.Button name='menu' size={25}
          backgroundColor="#009387" onPress={() => {
            navigation.openDrawer()}}>
        </Icon.Button>
      )
    }} />

  </HomeStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>

    <DetailsStack.Screen name="Details" component={DetailsScreen}
      options={{

      }} />
  </DetailsStack.Navigator>
);
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator intialRouteName='Home' >
        <Drawer.Screen name='Home' component={HomeStackScreen} />
        <Drawer.Screen name='Details' component={DetailsStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;