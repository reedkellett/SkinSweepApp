import { StackActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { TextInput, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { addDataToEntry } from "../firebase/picture";
import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";


export default function InputScreen({route} : any) {
    const navigation = useNavigation()
    const [logName, onChangeLog] = React.useState("");
    const [titleText, onChangeText] = React.useState("");
    const [notes, onChangeNotes] = React.useState("");

    function submit() {
        if( logName && titleText && notes) {
            const {entryId, photoId} = route.params;
            addDataToEntry(entryId,photoId, logName, titleText, notes);
            navigation.dispatch(StackActions.push('Root'));
        }
    }
    return (
        <View style={ styles.container}>
            <Text style={styles.title}> Entry Info: </Text>
             <TextInput
                style={styles.input}
                onChangeText={onChangeLog}
                placeholder={'Log Name...'}
                placeholderTextColor={Colors.gray}
                value={logName}
                />
             <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder={'Title...'}
                placeholderTextColor={Colors.gray}
                value={titleText}
                />
            <TextInput
            style={styles.notes}
            onChangeText={onChangeNotes}
            placeholder={'Notes...'}
            value={notes}
            />
            <View style={ styles.submit }>
                <TouchableOpacity onPress={submit}>
                    <Text style={{color: Colors.white, fontWeight: 'bold'}}> Submit </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles =  StyleSheet.create({ 
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: Colors.lightPurple
    },
    title: {
        fontSize: 42,
        fontWeight: 'bold',
        marginBottom: 40
    },
    input: {
        backgroundColor: "#FFFFFF",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        paddingLeft: 20,
      },
    notes: {
        backgroundColor: "#FFFFFF",
        borderRadius: 30,
        width: "70%",
        height: 120,
        marginBottom: 20,
        alignItems: "center",
        paddingLeft: 20,
      },
    submit: {
        backgroundColor: Colors.purple,
        width: "50%",
        height: 35,
        borderColor: Colors.white,
        borderWidth: 1,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
})