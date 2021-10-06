import * as React from "react";
import { FlatList, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

const dataSource = [
  { key: "1", text: "Entry 1" },
  { key: "2", text: "Entry 2" },
  { key: "3", text: "Entry 3" },
  { key: "4", text: "Entry 4" },
  { key: "5", text: "Entry 5" },
  { key: "6", text: "Entry 6" },
  { key: "7", text: "Entry 7" },
  { key: "8", text: "Entry 8" },
  { key: "9", text: "Entry 9" },
];

export default function DashboardScreen({
  navigation,
}: RootTabScreenProps<"Dashboard">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Overview Information</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <FlatList
        data={dataSource}
        renderItem={({ item }) => <Text>{item.text}</Text>}
        numColumns={3}
      />
    </View>
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
