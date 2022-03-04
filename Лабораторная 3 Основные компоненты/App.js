import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Button, Alert, ScrollView } from 'react-native';

const FixedDimensionsBasics = () => {
  return (
    <ScrollView horizontal={true}>
      <View style={{backgroundColor: 'red'}}> 
      <Text style={styles.title}>Hellow</Text>
      </View>
      <View style={{backgroundColor: 'orange'}}>
      <Text style={styles.middle1}>world</Text>
      </View>
      <View style={{backgroundColor: 'yellow'}}>
      <Text style={styles.text}>Hello</Text>
      <Button
      color='black'
      onPress={() => Alert.alert('Читать далее')}
      title="Читать далее"/>
      </View>
      <View style={{backgroundColor: 'green'}}> 
      <Text style={styles.title}>Hellow</Text>
      </View>
      <View style={{backgroundColor: 'lightblue'}}> 
      <Text style={styles.title}>Hellow</Text>
      </View>
      <View style={{backgroundColor: 'blue'}}> 
      <Text style={styles.title}>Hellow</Text>
      </View>
      <View style={{backgroundColor: 'violet'}}> 
      <Text style={styles.title}>Hellow</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Times New Roman',
    marginTop: 40,
    margin: 10

  },
  title: {
    fontSize: 30,
    fontFamily: 'Times New Roman',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 60
  },
  middle1: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Times New Roman',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop:60
  },
  middle2: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Times New Roman',
    alignContent: 'center',
    justifyContent: 'center'
  }
})

export default FixedDimensionsBasics;