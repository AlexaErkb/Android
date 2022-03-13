import * as React from 'react';
import { List } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import { Avatar } from 'react-native-elements';
import { Divider } from 'react-native-elements';
import { Text, View, Image, StyleSheet, Button, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function FavoriteScreen(){
  const navigation = useNavigation();

  function toProfile(i) {
        navigation.navigate("Контакт " + i);
  }
  function toMyProfile() {
        navigation.navigate("Мой профиль")
  }
  return(<ScrollView style={{marginTop:20}}>
    <List.Item
    title="Петя"
    bottomDivider
    titleStyle={{ fontWeight: 'bold'}}
    onPress= {() => toProfile("3")}
    left={props => <Avatar rounded size={80} source={require('../cat3.jpg')} />}
    />
    <Divider orientation="horizontal" />
    <List.Item
    title="Настюшка"
    bottomDivider
    titleStyle={{ fontWeight: 'bold'}}
    onPress= {() => toProfile("4")}
    left={props => <Avatar rounded size={80} source={require('../cat4.jpg')} />}
    />
    <Divider orientation="horizontal" />
    <List.Item
    title="Миша"
    titleStyle={{ fontWeight: 'bold'}}
    onPress= {() => toProfile("5")}
    left={props => <Avatar rounded size={80} source={require('../notcat.jpg')} />}
    bottomDivider
    />
  </ScrollView>
);
}