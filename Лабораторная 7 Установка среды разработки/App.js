import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert, Button, Image } from 'react-native';

const App = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Привет!</Text>
      <Button title='Нажми на меня'
      color={'black'}
      onPress={() => Alert.alert('Кнопка нажата')}/>
      <Image source={require('./images/cat.jpg')} 
      style={{width: 200, height: 200, alignSelf: 'center', marginBottom: '5%'}}/>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#bdffbd',
    padding: 8,
  },
  title: {
    textAlign:'center',
    fontWeight: 'bold',
    color: '#3b4247',
    fontSize: 25,
    fontFamily: 'Verdana'
  },
  info: {
    textAlign:'center',
    marginHorizontal: '15%',
    marginBottom: '6%',
    color: 'gray',
    fontSize: 14.5,
    fontFamily: 'Verdana'
  },
  quest: {
    marginTop:'15%',
    textAlign:'center',
    marginHorizontal: '15%',
    color: '#3b4247',
    fontSize: 14.5,
    fontFamily: 'Verdana'
  },
  input: {
    flex:1,
    fontSize: 15,
    height: 40,
    marginTop: '3%',
    padding: '3%',
  },
  button: {
    paddingHorizontal: '3%',
    marginHorizontal: '15%',
    marginTop: '10%',
    backgroundColor: '#3b4247',
    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: 30
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    marginHorizontal: '15%',
    marginBottom: 10,
    paddingHorizontal: '3%',
    borderColor: 'black',
    borderRadius: 30,
  },
});

export default App;