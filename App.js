import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, Alert } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Журнал Bright</Text>
      <Card>
        <Text style={styles.back}>Новости</Text>
        <Image style={{justifyContent:"center", alignSelf: "center"}} source={require('./assets/img.png')}/>
        <Text style={styles.paragraph}>Превращаем стресс в своего помощника</Text>
        <Text style={styles.text}>Исследователи Йельского университета заявляют, что люди, которые рассматривают стресс, как возможность личностного роста , отмечают улучшение качества жизни. Сегодня узнаем, как это работает и как увидеть положительные стороны стресса</Text>
        <Button
        title="Learn More"
        color='#841584'
        onPress={() => Alert.alert('Learn More')}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    marginTop: 30,
    marginLeft: 24,
    fontSize: 35,
    fontWeight: 'bold',
  },
  back: {
    fontFamily: 'Times New Roman',
    color: '#841584',
    fontSize: 20,
    margin: 15
  },
  title: {
    margin: 20,
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: "center"
  },
  text: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 15,
    fontSize: 20,
    marginBottom: 20
  }
});
