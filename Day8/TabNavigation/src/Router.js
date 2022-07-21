import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from './TabScreens/HomeScreen';
import SettingsScreen from './TabScreens/SettingsScreen';
import DetailsScreen from './Screens/DetailsScreen';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Homes" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settingss" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'nutrition'
            : 'nutrition-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'ios-information-circle-sharp' : 'ios-information-circle-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} color={color}  size={size}/>;
      },
       headerShown: false ,
      tabBarActiveTintColor: '#16b',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Settings" component={SettingsStackScreen} options={
        { 
          tabBarBadge: "Waiting!",
          tabBarBadgeStyle:{ backgroundColor: '#16b' }
        }
        } />
    </Tab.Navigator>
  );
}

export default MyTabs;