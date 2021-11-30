import React, { useEffect, useState } from 'react';
import Colors from '../constants/Colors';
import { View, Text, TouchableOpacity, TextInput, Image} from 'react-native'
import { StyleSheet } from 'react-native';
import { BackNavBar } from '../components/BackNavBar';
import HeaderText from '../components/text/headerText';
import { getImageUrl } from '../firebase/picture';

export default function EntryScreen({route} : any) {
    const [url, setUrl] = useState('')
    //get form feild values from previous screen
    const values = route.params;
    useEffect(() => {
        getImageUrl(values.photoId).then(img => setUrl(img))
      }, []);
   
    return (
        <View style={styles.container}>
            <BackNavBar />
            <View style={styles.horizontal}>
               <Image style={styles.img} source={{uri: url }}/>
               <View style={{flex: 1, flexDirection: 'column', marginLeft: 25}}>
                <View style={styles.top}><Text>{values.name}</Text></View>
                <View style={styles.top}><Text>{values.date} </Text></View>
               </View>
            </View>
            <View style={styles.info}>
                <View style={styles.diagnosis}>
                    <HeaderText style={{paddingLeft: 10, marginBottom: 5}} message={'Diagnosis'} />
                    <View style={styles.diagnosisText}><Text style={{paddingTop: 10}}>{values.diagnosis}</Text></View>
                </View>
                <View style={styles.confidence}>
                    <HeaderText  style={{paddingLeft: 8, marginBottom: 5}} message={'Confidence'} size={12} />
                    <View style={styles.confidenceText}><Text>{values.confidence ? values.confidence + "%" : 'N/A'}</Text></View>
                </View>
            </View>
            <View style={styles.notes}>
                    <HeaderText style={{paddingLeft: 10, marginBottom: 5}} message={'Additional Notes'} />
                    <View style={styles.diagnosisText}><Text style={{paddingTop: 10}}>{values.notes}</Text></View>
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
        height: 30,
        width: '75%',
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        paddingLeft: 10,
        backgroundColor: Colors.white,
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
        marginTop: 10,
        height: '25%',
        width: '90%',
    }
});
