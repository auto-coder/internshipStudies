import React, { useState } from 'react';
import {
  View,
  FlatList,
  Text
} from 'react-native';
import ProductCard from './Component/ProductCard/ProductCard';
import axios from 'axios';


const App = () => {
  const [list,setList]=useState("");
  const baseURL="https://jsonplaceholder.typicode.com/photos";
  const rendered= ({item})=>(<ProductCard product={item}/>)
  
  
    axios
    .get(`${baseURL}`)
    .then(function (response) {
     setList(response.data)
   
    })
    .catch(function (error) {
      console.log(`${error} Bir Hata Oluştu`);
    });
  
  

  return (
    <View >
    <FlatList
        keyExtractor={item=>item.id}
        data={list}
        renderItem ={rendered}
    />
    </View>
  );
};


export default App;
