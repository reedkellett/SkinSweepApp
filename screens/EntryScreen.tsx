import styled from 'styled-components/native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Colors from '../constants/Colors';
import { View, Text, TouchableOpacity, TextInput, Image} from 'react-native'
import { StyleSheet } from 'react-native';


export default function EntryScreen() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.horizontal}>
               <Image style={styles.img} source={{uri: 'https://health.clevelandclinic.org/wp-content/uploads/sites/3/2021/04/moleSkinCancer-1150885505-770x533-1.jpg'}}/>
               <View style={{flex: 1, flexDirection: 'column', marginLeft: 25}}>
                <Text> Name </Text>
                <Text> Date </Text>
               </View>
            </View>
            <View style={styles.horizontal}></View>
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
        width: '50%'
    }
});