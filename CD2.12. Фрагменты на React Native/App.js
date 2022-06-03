import * as React from 'react';
import { Share, Text, View,Image, StyleSheet, Pressable, Button, TouchableOpacity, ImageBackground, Dimensions, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Constants from 'expo-constants';
import { BlurView } from 'expo-blur';

const Stack = createNativeStackNavigator();

const Contacts = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Contacts' }}
        />
        <Stack.Screen 
        name="Profile" 
        component={ProfileScreen} 
        />
        <Stack.Screen 
        name="Call" 
        component={CallScreen} 
        />
        <Stack.Screen 
        name="VideoCall" 
        component={VideoCallScreen} 
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Pressable 
        onPress={() =>
          navigation.navigate('Profile', { name: 'Cat', photo: 'https://avatars.mds.yandex.net/get-pdb/163339/1362e61c-b40c-4f88-aa9e-8ece4409c5ed/s1200', phone: "83649273640" })
        }
        style={styles.button}
      >
      <View style={styles.container}>
        <Image style = {styles.picture}
        source={{
          uri: 'https://avatars.mds.yandex.net/get-pdb/163339/1362e61c-b40c-4f88-aa9e-8ece4409c5ed/s1200',
        }}
        />
         <Text style={styles.text}>Cat 1</Text>
         </View>
      </Pressable>

      <Pressable 
        onPress={() =>
          navigation.navigate('Profile', { name: 'Cat', photo: 'https://proprikol.ru/wp-content/uploads/2019/08/kartinki-nyashnye-kotiki-15.jpg', phone: "89360374539" })
        }
        style={styles.button}
      >
         <View style={styles.container}>
        <Image style = {styles.picture}
        source={{
          uri: 'https://proprikol.ru/wp-content/uploads/2019/08/kartinki-nyashnye-kotiki-15.jpg',
        }}
        />
         <Text style={styles.text}>Cat 2</Text>
         </View>
      </Pressable>

      <Pressable 
        onPress={() =>
          navigation.navigate('Profile', { name: 'Cat', photo: 'https://koteiki.com/wp-content/uploads/2018/04/cat-8-4-1536x1039.jpg', phone: "80273645826" })
        }
        style={styles.button}
      >
          <View style={styles.container}>
        <Image style = {styles.picture}
        source={{
          uri: 'https://koteiki.com/wp-content/uploads/2018/04/cat-8-4-1536x1039.jpg',
        }}
        />
         <Text style={styles.text}>Cat 3</Text>
         </View>
      </Pressable>
      </View>

  );
};

const ProfileScreen = ({ navigation, route }) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
  <View style={styles.profile}>
      <Image style = {styles.profilePicture}
        source={{
          uri: route.params.photo,
        }}
        />
      <Text style={styles.profileText}>{route.params.name}</Text>
      <Text style={styles.phoneNumber}> {route.params.phone} </Text> 

      <View style={styles.actionContainer}>
    
        <TouchableOpacity  style={{flex: 1, marginStart: 30}}
          onPress={() =>
            navigation.navigate('Call', {name: route.params.name, photo: route.params.photo, phone: route.params.phone})
          }>

          <Image style = {styles.icon}
                  source={{
                  uri: 'https://naliboki.stolbtsy-edu.gov.by/files/00524/obj/120/30163/img/540f27e940c088c6138b98cc_5fe55dd98ec52.jpg',
                  }}
                />
        </TouchableOpacity>

        <TouchableOpacity  style={{flex: 1}}>
            <Image style = {styles.icon}
                source={{
                uri: 'https://maxcdn.icons8.com/Share/icon/p1em/Messaging/message1600.png',
                }}
              />
        </TouchableOpacity>

        <TouchableOpacity  style={{flex: 1}}
          onPress={onShare}>
          <Image style = {styles.icon}
            source={{
            uri: 'https://cdn.onlinewebfonts.com/svg/download_309184.png',
            }}
          />
        </TouchableOpacity >
      </View>
    </View>  
)};

const CallScreen = ({ navigation, route }) => {
  return (
      <ImageBackground style={{ flex: 1}} 
        source={{
          uri: route.params.photo,
        }}>
        <View style={{alignItems: "center", justifyContent: "center", flex: 1, backgroundColor: 'rgba(1,1,1,0.7)'}}>
          <Image style={{width: 150, height: 150, borderRadius: 100}} source={{uri:route.params.photo}}/>
          <Text style={{textAlign: "center", fontSize:28, color:"rgb(255,255,255)", fontWeight: "bold"}}>
           Calling {route.params.name}...
          </Text>
          <Text style={{textAlign: "center", fontSize:20, color:"rgb(255,255,255)"}}>{route.params.phone}</Text>
          <TouchableOpacity 
            onPress={() =>
            navigation.navigate('Profile', {name: route.params.name, photo: route.params.photo, phone: route.params.phone})
            }>
          <Image style={{width: 50, height: 50, marginTop: 150}} source={{uri: "https://i.ya-webdesign.com/images/red-phone-icon-png-8.png"}}/>
        </TouchableOpacity>
        </View>
      </ImageBackground>
     
)};

const VideoCallScreen = ({ navigation, route }) => {
  return (
      <ImageBackground style={{ flex: 1}} 
        source={{
          uri: route.params.photo,
        }}>
        <View style={{alignItems: "center", justifyContent: "center", flex: 1, backgroundColor: 'rgba(1,1,1,0.7)'}}>
          <Image style={{width: 150, height: 150, borderRadius: 100}} source={{uri:route.params.photo}}/>
          <Text style={{textAlign: "center", fontSize:28, color:"rgb(255,255,255)", fontWeight: "bold", marginLeft: 20, marginRight: 20}}>
           Starting a video call with {route.params.name}...
          </Text>
          <Text style={{textAlign: "center", fontSize:20, color:"rgb(255,255,255)"}}>{route.params.phone}</Text>
          <TouchableOpacity 
            onPress={() =>
            navigation.navigate('Profile', {name: route.params.name, photo: route.params.photo, phone: route.params.phone})
            }>
          <Image style={{width: 50, height: 50, marginTop: 150}} source={{uri: "https://i.ya-webdesign.com/images/red-phone-icon-png-8.png"}}/>
        </TouchableOpacity>
        </View>
      </ImageBackground>
     
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "rgb(255, 255, 255)"
  },
  profile:{
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 20
  },
  button: {
    height: 100,
    backgroundColor : "rgb(250, 250, 250)",
    borderRadius: 8,
    borderColor: "rgb(1,1,1)",
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
    marginLeft: 20,
    marginTop: 30
  },
  picture: {
    marginTop: 15,
    marginLeft: 15,
    width: 50,
    height: 50,
    borderRadius: 100
  },
  profilePicture: {
    marginTop: 20,
    width: 150,
    height: 150,
    borderRadius: 100
  },
  profileText: {
    fontFamily: 'Verdana',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20
  },
  phoneNumber: {
    fontSize: 20
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    width: 30,
    height: 30,
    marginBottom: 30
  },
  actionContainer: {
    marginRight: 80,
    marginLeft: 80,
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: "center"
  }
});


export default Contacts;