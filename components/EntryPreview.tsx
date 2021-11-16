import { AntDesign } from "@expo/vector-icons";
import { StackActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../constants/Colors";

type EntryProps = {
    id: string;
    date: string;
    diagnosis: string;
  }

export default function EntryPreview(props : EntryProps) {
    const navigation = useNavigation()
    const openEntry = () => {
        navigation.dispatch(StackActions.push('EntryScreen', {entryId: props.id}));
    }

    function handleDiagnosisColor(diagnosis: String){
        switch(diagnosis) {
            case 'safe':
                return Colors.green;
            case 'unsure':
                return Colors.yellow;
            case 'bad': 
                return Colors.red;
        }
    }
    return (
        <TouchableOpacity onPress={() => openEntry()}>
            <View style={styles.container} >
                <Text style={{marginLeft: 15}}>{props.date}</Text>
                <View style={{flexDirection: 'row'}}>
                <Text style={{color: handleDiagnosisColor(props.diagnosis), fontWeight: 'bold', marginRight: 20}}>
                    {props.diagnosis}
                </Text>
                <AntDesign style={styles.arrow} name="arrowright" size={18} color="gray" />
                </View>
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
      borderRadius: 10,
      borderWidth: 1,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderColor: Colors.gray,
      backgroundColor: Colors.white,
    },
    arrow: {
        marginRight: 5,
        opacity: 0.7,
      }
  });
  