import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './Button.style';

const Button = ({title, onClick,theme='primary'}: any) => {
  return (
    <TouchableOpacity
      testID="button-touchable"
      style={styles[theme].container}
      onPress={onClick}>
      <Text testID="button-title" style={styles[theme].title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
