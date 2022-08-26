import React, {useState} from 'react';
import {Text, View, TextInput, FlatList, StyleSheet} from 'react-native';
import Button from './components/Button';

const App = () => {
  const [text, setText] = useState('');
  const [list, setList] = useState<any>([]);
  const renderElements = ({item}: any) => <Text>{item}</Text>;

  function addToList() {
    if (!text) {
      return;
    }

    setList([...list, text]);
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(_, i) => i.toString()}
        testID="list"
        data={list}
        renderItem={renderElements}
      />
      <TextInput
        testID="input-area"
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Add Note..."
      />
      <Button title={'Selamlar'} onClick={addToList} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
  input: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});
