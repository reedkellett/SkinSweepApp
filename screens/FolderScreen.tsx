import * as React from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { StackActions } from "@react-navigation/native";
import { Text, View } from "../components/Themed";
import { AntDesign } from "@expo/vector-icons";

const entryListData = [
  { key: 0, value: "Entry 1" },
  { key: 1, value: "Entry 2" },
  { key: 2, value: "Entry 3" },
  { key: 3, value: "Entry 4" },
  { key: 4, value: "Entry 5" },
  { key: 5, value: "Entry 6" },
];

export default function FolderScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <FlatList
          data={entryListData}
          renderItem={({ item }) => <Text>{`${item.key}: ${item.value}`}</Text>}
        />
      </View>
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.dispatch(StackActions.pop(1))}
      >
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  back: {
    marginTop: "10%",
    backgroundColor: "#FFFFFF",
    opacity: 0.5,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
  },
});
