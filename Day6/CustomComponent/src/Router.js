import React from 'react';
import {
  View,
  FlatList,
  Text,
  Button,

} from 'react-native';
import ProductCard from './Component/ProductCard/ProductCard';
import ProductData from './ProductData/products.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/DetailsScreen';

// function HomeScreen({navigation}) {
//   return (
//     <View >
//     <FlatList
//       keyExtractor={item=>item.id}
//       data={ProductData}
//       renderItem={({item}) => <ProductCard product={item} onPress={()=>navigation.navigate('Details',{
//         itemId: 86,
//         otherParam: 'anything you want here',
//       })}  />}
//       />
//     </View>
//   );
// }

// function DetailsScreen({route,navigation}) {
//   const { itemId, otherParam } = route.params;
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
//       <Button title='Go Back' onPress={()=>navigation.goBack()}/>
//       <Text>Details Screen</Text>
//       <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>otherParam: {JSON.stringify(otherParam)}</Text>

//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: true ,animation:'slide_from_right'}} >
      <Stack.Screen name="Products" component={HomeScreen} options={{ title: 'Products' ,headerStyle: {
            backgroundColor: '#1A3C40',
          },
          headerTintColor: '#EDE6DB',
          headerTitleStyle: {
            fontWeight: 'bold',
          },  
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#1A3C40"
            />
          ),}} />
      <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details' }} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};


export default App;
