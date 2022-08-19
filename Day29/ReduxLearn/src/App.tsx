import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Secondary from './pages/Secondary';
import Primary from './pages/Primary';
import UserProvider from './context/Provider';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Primary" component={Primary} />
          <Tab.Screen name="Secondary" component={Secondary} />
        </Tab.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
