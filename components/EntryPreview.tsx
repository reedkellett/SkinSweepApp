import { StackActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../constants/Colors";

type EntryProps = {
    id: string;
    date: string;
    classification: string;
  }

export default function EntryPreview(props : EntryProps) {
    const navigation = useNavigation()
    const openEntry = () => {
        navigation.dispatch(StackActions.push('EntryScreen', {entryId: props.id}));
    }
    return (
        <TouchableOpacity onPress={() => openEntry()}>
            <View style={styles.container} >
                <Text>{"Date: " + props.date}</Text>
                {/* <Text>{"Classification: "  + props.classification}</Text> */}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
      width: '90%',
      height: 30,
      marginLeft: '5%',
      marginBottom: 10,
      borderRadius: 5,
      backgroundColor: Colors.white,
    },
  });
  