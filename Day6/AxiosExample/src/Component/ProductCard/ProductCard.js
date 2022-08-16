import React from 'react';
import {Image, Text, View,TouchableOpacity} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({product}) => {
  return (
    <View style={styles.container} >
        <Image
        style={styles.image}
        source={{uri: product.thumbnailUrl}}
      />  
      <View style={styles.inner_container}>
        <Text style={styles.name}>{product.id}</Text>
        <Text style={styles.price}>{product.title}</Text>
      </View>
      <TouchableOpacity
        style={styles.buyButton}
        onPress={()=>{console.log("Sepete Eklendi")}}
      >
        <Text style={styles.buyText}>Sepete Ekle</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;