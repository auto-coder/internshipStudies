import * as React from 'react';
import { View, Text, Button } from 'react-native';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}
export default HomeScreen;