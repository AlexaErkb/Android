# Подготовка среды. Hello World на React Native
## Цель работы
Получить навыки настройки среды для отладки приложений на React Native.  
## Задания для выполнения
Перейдите на сайт https://snack.expo.io/ и установите на телефон приложение Expo. Отсканируйте QR-код и синхронизируйте Expo-редактор и ваше устройство.  
Используя стрелочную функцию (или класс), задайте компонент, который выведет на экран вашего устройства Hello World.  
Загрузить созданную программу на GitHub в репозиторий Student, используя формат в названии Фамилия (латинскими буквами)_1.  
## Контрольные вопросы
1. Можно ли писать в React Native все на JS?
В React Native логика приложения пишется и работает на JavaScript, в то время как его интерфейс остается полностью нативным.
2. Есть ли в React Native объект кнопка?
Да, есть, добавить ее можно с помощью:  
import { Button } from 'react-native';  
Ей можно задать цвет, текст, звук при нажатии, а также обработать, что будет делать кнопка после нажатия. Кнопку также можно вовсе выключить. Объект находится внутри View.  
![image](https://user-images.githubusercontent.com/70998859/156711865-7f3654c8-abe6-4c6a-9e18-2b0500e941b6.png)  
## Дополнительные задания
Дополнительно: попробовать добавить другие объкты.
Приложение:  
![image](https://user-images.githubusercontent.com/70998859/156572949-3527adea-8704-4de5-9554-602886b40743.png)  
Код:  
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
