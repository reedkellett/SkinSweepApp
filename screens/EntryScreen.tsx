import React, { useState } from 'react';
import Colors from '../constants/Colors';
import { View, Text, TouchableOpacity, TextInput, Image} from 'react-native'
import { StyleSheet } from 'react-native';
import { BackNavBar } from '../components/BackNavBar';
import HeaderText from '../components/text/headerText';

const entryData = {
    name: 'moley',
    date: '12/17/2020',
    diagnosis: 'you are good',
    confidence: '86%',
    notes: 'test'
}

export default function EntryScreen() {
    return (
        <View style={styles.container}>
            <BackNavBar />
            <View style={styles.horizontal}>
               <Image style={styles.img} source={{uri: 'https://health.clevelandclinic.org/wp-content/uploads/sites/3/2021/04/moleSkinCancer-1150885505-770x533-1.jpg'}}/>
               <View style={{flex: 1, flexDirection: 'column', marginLeft: 25}}>
                <Text style={styles.top}> { entryData.name}  </Text>
                <Text style={styles.top}>{entryData.date} </Text>
               </View>
            </View>
            <View style={styles.info}>
                <View style={styles.diagnosis}>
                    <HeaderText style={{paddingLeft: 10, marginBottom: 5}} message={'Diagnosis'} />
                    <Text style={styles.diagnosisText}>{entryData.diagnosis}</Text>
                </View>
                <View style={styles.confidence}>
                    <HeaderText  style={{paddingLeft: 8, marginBottom: 5}} message={'Confidence'} size={12} />
                    <Text style={styles.confidenceText}>{entryData.confidence}</Text>
                </View>
            </View>
            <View style={styles.notes}>
                    <HeaderText style={{paddingLeft: 10, marginBottom: 5}} message={'Additional Notes'} />
                    <Text style={styles.diagnosisText}>{entryData.notes}</Text>
                </View>
            <View style={styles.horizontal}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.lightPurple,
    },
    top: {
        backgroundColor: Colors.white,
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: '75%',
        margin: 5,
        paddingLeft: 10
    },
    horizontal: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        height: '25%',
    },
    img: {
        height: 110,
        width: 110,
        borderRadius: 20,
        borderWidth: 5,
        marginLeft: 30, 
        borderColor: Colors.white,

    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '30%',
        width: '90%',
    },
    diagnosis: {
        width: '70%',
        height: '80%',
    },
    diagnosisText: {
        backgroundColor: Colors.white,
        borderRadius: 10,
        height: '100%',
        color: Colors.black,
        paddingLeft: 10,
    },
    confidence: {
        height: '40%',
        width: '25%',
        marginLeft: '5%',
    },
    confidenceText: {
        backgroundColor: Colors.white,
        borderRadius: 10,
        fontSize: 22,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    notes: {
        height: '25%',
        width: '90%',
    }
});