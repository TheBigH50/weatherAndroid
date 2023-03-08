import React from 'react';
import {Text, View, TextInput} from 'react-native';

export default function HeaderDisplay() {
  let [text, setText] = React.useState('');

  return (
    <View className="flex-1 flex-col bg-red-900">
      <Text className="text-2xl">Here is a component</Text>
      <TextInput
        className="border rounded-md border-black"
        defaultValue="Input info here"
        value={text}
        onChange={e => setText(e.target.value)}></TextInput>
    </View>
  );
}
