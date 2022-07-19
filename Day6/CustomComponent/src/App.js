import React from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import ProductCard from './Component/ProductCard/ProductCard';
import ProductData from './ProductData/products.json';


const App = () => {
  
  return (
    <View >
      <FlatList
        keyExtractor={item=>item.id}
        data={ProductData}
        renderItem={({item}) => <ProductCard product={item} />}
        />
    </View>
  );
};


export default App;
