import * as React from "react";
import { StyleSheet, Image, FlatList } from "react-native";

import { Text, View } from "../components/Themed";

const name = "Reed Kellett";

const profileData = [
  { key: "Height", value: 69 },
  { key: "Weight", value: 156 },
  { key: "Sex", value: "Male" },
  { key: "Date of Birth", value: "Jun 12, 1999 (22)" },
  { key: "Fitzpatrick Skin Type", value: "Not Set" },
  { key: "Email", value: "reed.kellett@gmail.com" },
];

export default function ProfileScreen() {
  return (
    <View style={{ flexDirection: "column", alignItems: "center" }}>
      <Image
        style={{
          height: 60,
          width: 60,
          backgroundColor: "grey",
          borderRadius: 50,
        }}
        source={require("../assets/images/icon.png")}
      />
      <Text>{name}</Text>
      <FlatList
        data={profileData}
        renderItem={({ item }) => <Text>{`${item.key}: ${item.value}`}</Text>}
      />
    </View>

    // <View style={styles.container}>
    //   <Text style={styles.title}>Profile</Text>
    //   <View
    //     style={styles.separator}
    //     lightColor="#eee"
    //     darkColor="rgba(255,255,255,0.1)"
    //   />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
