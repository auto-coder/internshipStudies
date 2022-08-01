
import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';



const App = () => {

  const [date, setDate] = React.useState(new Date(1598051730000));

  const onChange = (event:any, selectedDate:any) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode:any) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return(
    <View>
      <Button onPress={showDatepicker} title="Show date picker!" />
      <Button onPress={showTimepicker} title="Show time picker!" />
      <Text>selected: {date.toLocaleString()}</Text>

    </View>
  );
}

export default App;
