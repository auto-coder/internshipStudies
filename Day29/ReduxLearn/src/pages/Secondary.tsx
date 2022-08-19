import {Text, View, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

function Secondary() {
  const list = useSelector((s: any) => s.nameList);
  const myUserName=useSelector((s:any)=>s.userName)
  return (
    <View>
      <Text>USERNAME:  {myUserName}</Text>
      <FlatList
        keyExtractor={(_, index: any) => index.toString()}
        data={list}
        renderItem={({item}: any) => <Text>{item}</Text>}
      />
    </View>
  );
}

export default Secondary;
