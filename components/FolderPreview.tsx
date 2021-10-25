import { StackActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, Text, TouchableHighlight } from "react-native";

const folderName = "Left Elbow Mole";
const priority = 1;

type props = {
  id: string;
}

export default function FolderPreview({id}: props) {
  const navigation = useNavigation()
  const openFolder = () => {
    console.log("open Folder pressed");
    navigation.dispatch(StackActions.push('EntryScreen', {entryId: id}));
  };

  return (
    <TouchableHighlight onPress={() => openFolder()}>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          borderWidth: 5,
          borderColor: "red",
          padding: 5,
        }}
      >
        <Text style={{}}>{folderName}</Text>
        <Image
          style={{
            height: 60,
            width: 60,
            backgroundColor: "grey",
            borderRadius: 50,
          }}
          source={require("../assets/images/icon.png")}
        />
      </View>
    </TouchableHighlight>
  );
}
