import * as React from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Text, View } from "../components/Themed";

const entryListData = [
  { key: 0, value: "Entry 1" },
  { key: 1, value: "Entry 2" },
  { key: 2, value: "Entry 3" },
  { key: 3, value: "Entry 4" },
  { key: 4, value: "Entry 5" },
  { key: 5, value: "Entry 6" },
];

export default function FolderScreen() {
  return (
    <SafeAreaView>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <FlatList
          data={entryListData}
          renderItem={({ item }) => <Text>{`${item.key}: ${item.value}`}</Text>}
        />
      </View>
    </SafeAreaView>
  );
}
