import * as React from "react";
import { FlatList, StyleSheet, Linking, Image } from "react-native";

import { Text, View } from "../components/Themed";
import { PhotoLogEntry, Resource } from "../types";
import FolderPreview from "../components/FolderPreview";
import Colors from "../constants/Colors";
import HeaderText from "../components/text/headerText";
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../firebase/firebaseSetUp";
import { useEffect } from "react";
import { getPhotolog, getResources } from "../firebase/dashboard";
import { useState } from "react";

const dataSource = [
  {
    id: "1",
    title: "left elbow mole",
    imgUrl:
      "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2021/04/moleSkinCancer-1150885505-770x533-1.jpg",
  },
  {
    id: "2",
    title: "right hand rash",
    imgUrl:
      "https://images.everydayhealth.com/images/common-types-of-rashes-01-rm-1440x810.jpg",
  },
  {
    id: "3",
    title: "right arm mole",
    imgUrl:
      "https://www.aimatmelanoma.org/wp-content/uploads/Untitled-design-70-300x300.png",
  },
  {
    id: "4",
    title: "neck bumb",
    imgUrl:
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/shutterstock_716416951_thumb-732x549.jpg",
  },
  {
    id: "5",
    title: "backne",
    imgUrl:
      "https://www.sanovadermatology.com/wp-content/uploads/2021/06/AdobeStock_285892730-scaled.jpeg",
  },
];


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
              imgUrl={item.imgUrl}
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
              <Image style={styles.img} source={{uri: item.imgUrl}}/>
              <Text style={styles.resource}>{item.title}</Text>
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
    height: "60%",
    backgroundColor: Colors.white,
    borderRadius: 15,
    paddingTop: 15,
    justifyContent: "center",
  },
  box2: {
    width: "95%",
    height: "20%",
    backgroundColor: Colors.white,
    borderRadius: 15,
    paddingTop: 15,
    justifyContent: "center",
  },
  resourceButton: {
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 10,
  },
  resource: {
    justifyContent: "center",
    color: Colors.black,
    fontSize: 18,
  },
  img: {
    height: 50
  }
});
