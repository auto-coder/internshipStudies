import * as React from 'react';
import { useWindowDimensions  } from 'react-native'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import HomeScreen from './DrawerScreens/HomeScreen';
import Notifications from './DrawerScreens/NotificationsScreens';



function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} >
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {

  return (
    <Drawer.Navigator
      useLegacyImplementation
      initialRouteName='Home'
      defaultStatus="closed"
      screenOptions={{
        drawerType:'slide',
        drawerItemStyle:{backgroundColor:'#1A3C40'},
        drawerLabelStyle:{color:'#EDE6DB'},
       
   
     
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen}  />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;