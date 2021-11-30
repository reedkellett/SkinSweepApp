import * as React from "react";
import { FlatList, StyleSheet, Linking, Image } from "react-native";

import { Text, View } from "../components/Themed";
import { PhotoLogEntry, Resource } from "../types";
import FolderPreview from "../components/FolderPreview";
import Colors from "../constants/Colors";
import HeaderText from "../components/text/headerText";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useEffect } from "react";
import { getPhotolog, getResources } from "../firebase/dashboard";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";


export default function DashboardScreen() {
  const [photoLog, setPhotoLog] = useState<PhotoLogEntry[]>([]);
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
      getPhotolog().then(data => setPhotoLog(data));
      getResources().then(data => setResources(data))
  }, []);

  return (
    <View style={styles.container}>
      <HeaderText style={styles.header} message={"Photo Log"} />
      <View style={styles.box}>
        <FlatList
          style={styles.list}
          data={photoLog}
          renderItem={({ item }) => (
            <FolderPreview
              key={item.id}
              id={item.id}
              title={item.name}
              photoId={item.photoId}
            />
          )}
        />
      </View>
      <HeaderText style={styles.header} message={"Resources"} />
      <View style={styles.box2}>
        <FlatList
          style={styles.list}
          data={resources}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
              <View style={styles.resourceContainer}>
                <Image style={styles.img} source={{uri: item.imgUrl}}/>
                <Text style={styles.resource}>{item.title}</Text>
                <AntDesign style={styles.arrow} name="arrowright" size={18} color="gray" />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.lightPurple,
  },
  list: {
    width: "100%",
    height: "100%",
  },
  header: {
    marginTop: 20,
    marginBottom: 10,
  },
  box: {
    width: "95%",
    height: "55%",
    backgroundColor: Colors.white,
    borderRadius: 15,
    paddingTop: 15,
    justifyContent: "center",
  },
  box2: {
    width: "95%",
    height: "25%",
    backgroundColor: Colors.white,
    borderRadius: 15,
    paddingTop: 15,
    justifyContent: "center",
  },
  resource: {
    color: Colors.black,
    fontSize: 18,
  },
  resourceContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    marginLeft: '5%',
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.gray,
    alignItems: 'center',
    marginBottom: 10,
  },
  img: {
    width: '20%',
    height: 50,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  arrow: {
    marginRight: 5,
    opacity: 0.7,
  }
});
