import React from "react";
import { View, Image, Text, TouchableHighlight } from "react-native";

const folderName = "Left Elbow Mole";
const priority = 1;

export default function FolderPreview() {
  const openFolder = () => {
    console.log("open Folder pressed");
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
