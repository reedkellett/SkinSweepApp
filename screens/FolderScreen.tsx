import * as React from "react";
import { FlatList, StyleSheet, Image } from "react-native";
import { BackNavBar } from "../components/BackNavBar";
import EntryPreview from "../components/EntryPreview";
import HeaderText from "../components/text/headerText";

import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import { navRoute } from "../types";

// get folderId from navigation props, and get all entries
const entryListData = [
  { key: '0', value: "Entry 1", date: '5/12/2021', diagnosis: 'safe', imgUrl: 'https://health.clevelandclinic.org/wp-content/uploads/sites/3/2021/04/moleSkinCancer-1150885505-770x533-1.jpg'},
  { key: '1', value: "Entry 2", date: '3/18/2021', diagnosis: 'bad'},
  { key: '2', value: "Entry 3", date: '2/12/2021', diagnosis: 'unsure'},
];

export default function FolderScreen({route} : any) {
  const mostRecentImageUrl = route.params.imgUrl;
  return (
    <View style={styles.container}>
      <BackNavBar/>
       <Image
          style={styles.img}
          source={{uri: mostRecentImageUrl}}
        />
      <HeaderText style={styles.title} message={'Entries'}/>
      <View style={styles.box}>
        <View style={styles.header}>
          <Text style={{color: Colors.black, fontSize: 16}}>Date</Text>
          <Text style={{color: Colors.black, fontSize: 16}}>Diagnosis</Text>
        </View>
        <FlatList
          style={styles.list}
          data={entryListData}
          renderItem={({ item }) => <EntryPreview id={item.key} date={item.date} diagnosis={item.diagnosis}/>}
        />
      </View>
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
    width: '100%'
  },
  title: {
    marginTop: 15,
    marginBottom: 10,
  },
  box: {
    width: '95%',
    height: '50%',
    backgroundColor: Colors.white,
    borderRadius: 15,
    paddingTop: 10,
    justifyContent: 'center'
  },
  header: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: Colors.gray,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
});
