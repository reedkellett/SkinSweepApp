import * as React from "react";
import { FlatList, StyleSheet, Image } from "react-native";
import { BackNavBar } from "../components/BackNavBar";
import EntryPreview from "../components/EntryPreview";

import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";

// get folderId from navigation props, and get all entries
const entryListData = [
  { key: '0', value: "Entry 1", date: '5/12/2021', imgUrl: 'https://health.clevelandclinic.org/wp-content/uploads/sites/3/2021/04/moleSkinCancer-1150885505-770x533-1.jpg' },
  { key: '1', value: "Entry 2", date: '3/18/2021', imgUrl: ''},
  { key: '2', value: "Entry 3", date: '2/12/2021', imgUrl: ''},
];

export default function FolderScreen() {
  const mostRecentImageUrl = entryListData[0].imgUrl;
  return (
    <View style={styles.container}>
      <BackNavBar/>
       <Image
          style={styles.img}
          source={{uri: mostRecentImageUrl}}
        />
      <Text style={styles.title}> Entries </Text>
      <FlatList
        style={styles.list}
        data={entryListData}
        renderItem={({ item }) => <EntryPreview id={item.key} date={item.date} classification={''}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: Colors.lightPurple
  },
  img: {
    marginTop: '5%',
    borderRadius: 15,
    width: '50%',
    height: 200
  },
  list: {
    marginTop: 20,
    width: '100%'
  },
  title: {
    color: Colors.black,
    fontSize: 20,
    marginTop: 15
  }
});
