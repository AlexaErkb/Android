import * as React from 'react';
import { useEffect } from 'react';
import { ScrollView, Text, View, FlatList, StyleSheet, BackHandler, Alert, TextInput, Image } from 'react-native';
import './1.jpg';
import './2.jpg';
import './3.jpg';
import './4.jpg';
import './5.jpg';
import './6.jpg';
import './7.jpg';
import './8.jpg';


const Items = (props) => {
  return (
    <View style={{}}>
      <View style={{backgroundColor:'#e8e3df'}}>
        <Text style={styles.mainText}>{props.name}</Text>
      </View>
      <View style={styles.items}>
        <Image source={require(props.img)} style={{width: '70px', height: '70px', borderRadius: '70px', marginTop: '5%'}}/>
        <Text style={styles.text}>{props.description}</Text>
      </View>
    </View>
  );
}

export default function App() {
  const renderItem = (item) => {
    return (
      <Items
        img={item.item.img}
        name={item.item.name}
        description={item.item.description}
      ></Items>
    );
  };

  const keyExtractor = (item) => {
    item.id;
  };

  const toBack = () => {
    Alert.alert("Предупреждение", "Вы точно хотите выйти?", [
      {
        text: "Отмена",
        onPress: () => null,
        style: "cancel"
      },
      { 
        text: "Да", 
        onPress: () => BackHandler.exitApp() 
    }
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", toBack);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", toBack);
  }, []);


  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.textInput}>Зоотовары</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'center',
    marginLeft: '10%',
    fontSize: 20,
    fontFamily: 'Verdana'
  },
  items: {
    flexDirection: 'row',
    width: "100%",
    height: 100,
  },
  mainText: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: 450,
  },
  header: {
    width: "100%",
    height: 60,
    backgroundColor: "#dcdcdc",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    fontWeight: 'bold',
    width: "100%",
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 25,
  },
});

const data = [
  {
    id: 0,
    img: './1.jpg',
    name: "Костюм пчелы",
    description: "Бзз Бзз",
  },
  {
    id: 1,
    img: './2.jpg',
    name: "Костюм моряка",
    description: "Для плавания",
  },
  {
    id: 2,
    img: './8.jpg',
    name: "Человек паук",
    description: "Лазает по стенам",
  },
  {
    id: 3,
    img: './3.jpg',
    name: "Игрушка",
    description: "Веселые игрушки",
  },
  {
    id: 4,
    img: './4.jpg',
    name: "Бэтмен",
    description: "Костюм бэтмена для вашего кота",
  },
  {
    id: 5,
    img: './5.jpg',
    name: "Пальто",
    description: "Модное пальто",
  },
  {
    id: 6,
    img: './6.jpg',
    name: "Тельняшка",
    description: "Тельняшка для самых морских котов",
  },
  {
    id: 7,
    img: './7.jpg',
    name: "Стич",
    description: "Как в мультике"
  },
];