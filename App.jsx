import React from 'react';
import {Text, View, TextInput} from 'react-native';
import HeaderDisplay from './components/header.jsx';

const HelloWorldApp = () => {
  return (
  <>
< HeaderDisplay />
   <View className="flex-1 items-center justify-center bg-red-400">

         <Text className="text-gray-800 text-xl">Hello, world!</Text>
    </View>
    </>
  );
};

export default HelloWorldApp;
