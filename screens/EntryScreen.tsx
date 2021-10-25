import styled from 'styled-components/native';
import React, { useState } from 'react';
import { StackActions, useNavigation } from '@react-navigation/native';
import Colors from '../constants/Colors';
import { View, Text, TouchableOpacity, TextInput, Image} from 'react-native'
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const entryData = {
    name: 'moley',
    date: '12/17/2020',
    diagnosis: 'you are good',
    confidence: '86%'
}

export default function EntryScreen() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.back} onPress={() => navigation.dispatch(StackActions.pop(1))}>
                <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.horizontal}>
               <Image style={styles.img} source={{uri: 'https://health.clevelandclinic.org/wp-content/uploads/sites/3/2021/04/moleSkinCancer-1150885505-770x533-1.jpg'}}/>
               <View style={{flex: 1, flexDirection: 'column', marginLeft: 25}}>
                <TextInput style={styles.input} value={entryData.name} />
                <TextInput style={styles.input} value={entryData.date} editable={false} />
               </View>
            </View>
            <View style={styles.horizontal}>
                <Text style={styles.diagnosis}>{entryData.diagnosis}</Text>
                <Text style={styles.confidence}>{entryData.confidence}</Text>
            </View>
            <View style={styles.horizontal}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      backgroundColor: Colors.lightPurple,
      border: 'solid 1px blue'
    },
    input: {
        backgroundColor: Colors.white,
        borderRadius: 15,
        height: 40,
        width: '80%',
        margin: 5,
        paddingLeft: 10
    },
    horizontal: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: '30%',
        border: 'solid 1px red'
    },
    img: {
        height: '50%',
        width: '50%',
        borderRadius: 20,
        borderWidth: 5,
        marginLeft: 10, 
        borderColor: Colors.white,

    },
    diagnosis: {
        width: '70%',
        height: '60%',
        backgroundColor: Colors.white,
        marginLeft: '5%',
        borderRadius: 15
    },
    confidence: {
        display: 'flex',
        width: '20%',
        borderRadius: 15,
        marginLeft: '2%',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30%',
        backgroundColor: Colors.white,
    },
    back: {
        marginTop: '10%',
        backgroundColor: '#FFFFFF',
        opacity: 0.5,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50
    }
});