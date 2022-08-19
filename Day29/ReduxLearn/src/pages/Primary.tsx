import {Button, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

function Primary() {
  const [text, setText] = useState('');
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();
  const handleAdd = () => {
    console.log(text);
    dispatch({type: 'ADD_LIST', payload: {name: text}});
  };
  const handleClean = () => {
    console.log(text);
    dispatch({type: 'CLEAN_LIST'});
  };
  const handleUserName = () => {
    console.log(text);
    dispatch({type: 'SET_USERNAME',payload:{userName}});
  };

  return (
    <View>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Yazı Giriniz"
      />
      <TextInput
        value={userName}
        onChangeText={setUserName}
        placeholder="Kullanıcı İsmi"
      />
      <Button title="Ekle" onPress={handleAdd} />
      <Button title="İsim KAYDET" onPress={handleUserName} />
      <Button title="Temizle" onPress={handleClean} />
    </View>
  );
}

export default Primary;
