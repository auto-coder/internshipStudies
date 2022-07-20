import React from 'react';
import {
  View,
  FlatList,

} from 'react-native';
import ProductCard from '../Component/ProductCard/ProductCard';
import ProductData from '../ProductData/products.json';

const HomeScreen=({navigation}) =>{
    return (
      <View >
      <FlatList
        keyExtractor={item=>item.id}
        data={ProductData}
        renderItem={({item}) => <ProductCard product={item} onPress={()=>navigation.navigate('Details',{
          itemId: 86,
          otherParam: 'anything you want here',
        })}  />}
        />
      </View>
    );
  }

  export default HomeScreen;