import React from 'react';
import {
  View,
  Text,
  Button,

} from 'react-native';

const DetailsScreen=({route,navigation}) =>{
    const { itemId, otherParam } = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Button title='Go Back' onPress={()=>navigation.goBack()}/>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
  
      </View>
    );
  }

  export default DetailsScreen;