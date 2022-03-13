import * as React from 'react';
import { List } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import { Avatar } from 'react-native-elements';
import Lightbox from 'react-native-lightbox';
import { Icon } from 'react-native-elements';
import { Divider, Card } from 'react-native-elements';
import { Text, View, Image, StyleSheet, Button, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Profile4() {
  return (<ScrollView style={{marginTop:20}}>
    <Lightbox renderContent={()=> {
      return(
        <Image
          source={require('../cat4.jpg')}
          style={{ width: 400, height: 400, borderRadius: 1000}}
        />
      )
    }}>
      <Image
        source={require('../cat4.jpg')}
        style={{ width: 200, height: 200, borderRadius: 1000, flex:1,         justifyContent: 'center', alignSelf:'center' }}
      />
    </Lightbox>
    <Text style={{ justifyContent: 'center', alignSelf:'center', fontWeight: 'bold', fontSize:30, fontFamily:'lucida grande', margin:10}}>Настюшка</Text>
    <ScrollView horizontal={true} style={{flex:1, justifyContent: 'center', alignSelf:'center'}}>
      <Card>
      <Icon name='message-circle' type='feather'/>
      <Text>Написать</Text>
      </Card>
      <Card>
      <Icon name='phone' type='feather'/>
      <Text>Вызов</Text>
      </Card>
      <Card>
      <Icon name='video' type='feather'/>
      <Text>Видео</Text>
      </Card>
      <Card>
      <Icon name='mail' type='feather'/>
      <Text>Почта</Text>
      </Card>
    </ScrollView>
    <Card>
    <Text style={{ fontWeight: 'bold' }}>Телефон</Text>
    <Text>88006283572</Text>
    </Card>
    <Card>
    <Text style={{ fontWeight: 'bold' }}>Email</Text>
    <Text>nastena@catco.ru</Text>
    </Card>
  </ScrollView>
);}