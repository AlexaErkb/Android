import * as React from 'react';
import { View, Image, Text, Button, StyleSheet } from "react-native";
import { getSingleGif } from "./GifManagement";


function Gif(props) {
  const [gif, setGif] = React.useState(props.gifId);

  const handleSelect = async (id) => {
    try {
      setGif(await getSingleGif(id));
    } catch (e) {
      console.error("Couldn't load gif", e);
    }
  };
  handleSelect(gif);
  return (
    <View style={styles.itemContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.itemText}>{props.gifName}</Text>
      </View>
      <Image source={{ uri: gif }} style={{ height: 200 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: '3%',
    borderBottomColor: "#90a397",
    borderBottomWidth: 5,
    marginHorizontal: '5%'
  },
  textContainer: {
    width: "100%",
    height: 80,
    padding: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontFamily: "Verdana",
    fontSize: 30,
    fontWeight: "bold",
  },

});

export default Gif;