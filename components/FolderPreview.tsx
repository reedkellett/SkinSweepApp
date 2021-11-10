import { AntDesign } from "@expo/vector-icons";
import { StackActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../constants/Colors";
import { Status } from "../types";

const folderName = "Left Elbow Mole";
const priority = 1;

type FolderProps = {
  id: string;
  imgUrl: string;
  title: string;
  status: Status
}

export default function FolderPreview(props: FolderProps) {
  const navigation = useNavigation()
  const openFolder = () => {
    console.log("open Folder pressed");
    navigation.dispatch(StackActions.push('FolderScreen', {folderId: props.id, imgUrl: props.imgUrl}));
  };

  return (
    <TouchableOpacity onPress={() => openFolder()}>
      <View style={ styles.container }>
        <Image
          style={styles.img}
          source={{uri: props.imgUrl}}
        />
         <Text style={styles.title}>{props.title}</Text>
         <AntDesign style={styles.arrow} name="arrowright" size={18} color="gray" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginLeft: '5%',
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.gray,
    backgroundColor: Colors.white,
  },
  img: {
    height: 80,
    width: 80,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  title: {
    fontSize: 20,
  },
  arrow: {
    marginRight: 5,
    opacity: 0.7,
  }
});
