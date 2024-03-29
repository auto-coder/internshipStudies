import React from 'react';
import {Image, Text, View,TouchableOpacity} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({product,onPress}) => {
  return (
    <View style={styles.container} >
        <Image
        style={styles.image}
        source={{uri: product.image}}
      />  
      <View style={styles.inner_container}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>
      <TouchableOpacity
        style={styles.buyButton}
        onPress={onPress}
      >
        <Text style={styles.buyText}>Sepete Ekle ve Git</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;