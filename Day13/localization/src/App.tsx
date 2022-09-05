import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import I18n from './lang/_i18n';

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};

const Hello: React.FC<Props> = ({
  name,
  baseEnthusiasmLevel = 0
}) => {
  const [enthusiasmLevel, setEnthusiasmLevel] = React.useState(
    baseEnthusiasmLevel
  );

  const [lang,setLang]=useState('en')

  const onIncrement = () =>
    setEnthusiasmLevel(enthusiasmLevel + 1);
  const onDecrement = () =>
    setEnthusiasmLevel(
      enthusiasmLevel > 0 ? enthusiasmLevel - 1 : 0
    );

  const getExclamationMarks = (numChars: number) =>
    numChars > 0 ? Array(numChars + 1).join('!') : '';

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
      {I18n.t('hi', {locale: lang})} 
      {name} 
      {getExclamationMarks(enthusiasmLevel)}</Text>
      <View>
        <Button
          title="İngilizce Diline Çevir"
          accessibilityLabel="increment"
          onPress={()=>setLang('en')}
          color="blue"
        />
        <Button
          title="Türkçe Diline Çevir "
          accessibilityLabel="increment"
          onPress={()=>setLang('tr')}
          color="black"
        />
        <Button
          title="Arapça Diline Çevir"
          accessibilityLabel="decrement"
          onPress={()=>setLang('ar')}
          color="red"
        />
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16
  }
});

export default Hello;


// const Hello = () =>{

//   return (
//     <View style={styles.container}>
    
//       <Text style={styles.greeting}>
//         {I18n.t('hi', {locale: 'ar'})} 
//       </Text>

//     </View>
//   );
// };