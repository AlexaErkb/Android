import * as React from 'react';
import { FlatList } from "react-native";
import { addMultipleGifs, deleteAllGifs } from "./GifManagement";
import Gif from "./Gif";

function App() {
  React.useEffect(() => {
    (async () => {
      await addMultipleGifs(ids);
    })();

    return () => {
      deleteAllGifs();
    };
  }, []);

  const renderItem = (item) => {
    return <Gif gifId={item.item.gifId} gifName={item.item.gifName}/>;
  };

  const keyExtractor = (item, index) => {
    item.gifId.toString();
  };
  return (
    <FlatList
      style={{}}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      
    />
  );
}

const data = [
  { id: 0, gifId: "3oriO0OEd9QIDdllqo", gifName: "Cat" },
  { id: 1, gifId: "11dR2hEgtN5KoM", gifName: "Cat and table" },
  { id: 2, gifId: "RhrAmVUHxjTQvEPBWi", gifName: "Cat and guitar" },
  { id: 3, gifId: "JIX9t2j0ZTN9S", gifName: "Cat and laptop" },
];

const ids = data.map((item) => item.gifId);

export default App;