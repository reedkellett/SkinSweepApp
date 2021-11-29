import { AntDesign } from "@expo/vector-icons";
import { StackActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../constants/Colors";

type EntryProps = {
    id: string;
    date: string;
    name: string,
    status: string;
    diagnosis: string;
    confidence: number;
    notes: string;
    imgUrl: string;
    photoId?: string,
  }

export default function EntryPreview(props : EntryProps) {
    const navigation = useNavigation()
    const openEntry = () => {
        navigation.dispatch(StackActions.push('EntryScreen', 
        {id: props.id,
            date: props.date,
            name: props.name,
            diagnosis: props.diagnosis,
            confidence: props.confidence,
            notes: props.notes,
            imgUrl: props.imgUrl,
            photoId: props.photoId
        }));
    }

    function handleDiagnosisColor(status: String){
        if(status){
            switch(status.toLowerCase()) {
                case 'safe':
                    return Colors.green;
                case 'unsure':
                    return Colors.yellow;
                case 'bad': 
                    return Colors.red;
                default: 
                    return Colors.black;
            }
        }
        return Colors.black;
    }
    return (
        <TouchableOpacity onPress={() => openEntry()}>
            <View style={styles.container} >
                <Text style={{marginLeft: 15}}>{props.date}</Text>
                <View style={{flexDirection: 'row'}}>
                <Text style={{color: handleDiagnosisColor(props.status), fontWeight: 'bold', marginRight: 20}}>
                    {props.status.toUpperCase()}
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
  