import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

var date =
  new Date().getDate() +
  '/' +
  (parseInt(new Date().getMonth()) + 1) +
  '/' +
  new Date().getFullYear();

const Hello = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30, color: '#8b0000' }}> Hello World!</Text>
      <Text style={{ fontSize: 20, color: 'green' }}>Сегодня: {date}</Text>
      <Image style={{width: 200, height: 200}} source={require('./assets/cat.png')}
      />
    </View>
  );
};

export default Hello;

