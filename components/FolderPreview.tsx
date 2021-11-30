import { AntDesign } from "@expo/vector-icons";
import { StackActions, useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../constants/Colors";
import { getImageUrl } from "../firebase/picture";

type FolderProps = {
  id: string;
  title: string;
  photoId: string;
}

export default function FolderPreview(props: FolderProps) {
  const [url, setUrl] = useState('')
  const navigation = useNavigation()
  const openFolder = () => {
    console.log("open Folder pressed");
    navigation.dispatch(StackActions.push('FolderScreen', {logId: props.id,logName: props.title, imgUrl: url}));
  };

  useEffect(() => {
    getImageUrl(props.photoId).then(img => setUrl(img))
  }, []);

  return (
    <TouchableOpacity onPress={() => openFolder()}>
      <View style={ styles.container }>
        <Image
          style={styles.img}
          source={{uri: url }}
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
