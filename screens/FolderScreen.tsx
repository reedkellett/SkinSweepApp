import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FlatList, StyleSheet, Image } from "react-native";
import { BackNavBar } from "../components/BackNavBar";
import EntryPreview from "../components/EntryPreview";
import HeaderText from "../components/text/headerText";

import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import { getEntries } from "../firebase/dashboard";

export default function FolderScreen({route} : any) {
  const [entries, setEntries] = useState<any[]>([]);

  useEffect(() => {
    getEntries(route.params.logId).then(data => setEntries(data));
  }, []);

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
          <Text style={{color: Colors.black, fontSize: 16}}>Status</Text>
        </View>
        <FlatList
          style={styles.list}
          data={entries}
          renderItem={({ item }) => 
          <EntryPreview 
            key={item.id} 
            id={item.id} 
            date={item.date} 
            name={item.name}
            diagnosis={ item.diagnosis}
            confidence={ item.confidence}
            notes={item.notes}
            imgUrl={item.imgUrl}
            status={item.status}/>}
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
