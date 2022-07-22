import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry,Button,BottomNavigation, BottomNavigationTab, Layout, Text ,Icon,CheckBox,Calendar} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();


const UsersScreen = ({navigation}:any) => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>HOME</Text>
    <Button onPress={()=>navigation.navigate('Orders')} accessoryLeft={ <Icon name='facebook'  />}>Facebook</Button>
    <CheckBox checked >  Kontrol Edildi</CheckBox>
    <Calendar >Takvim</Calendar>
  </Layout>
);

const OrdersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>ORDERS</Text>
  </Layout>
);

const BottomTabBar = ( { state, navigation }: any  ) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='USERS'/>
    <BottomNavigationTab title='ORDERS'/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Users' component={UsersScreen}/>
    <Screen name='Orders' component={OrdersScreen}/>
  </Navigator>
);
const App = () => (
  <ApplicationProvider {...eva} theme={eva.light} >
   <IconRegistry icons={EvaIconsPack} />
   <NavigationContainer>
     <TabNavigator/>
   </NavigationContainer>
  </ApplicationProvider>
 );
export default App;
