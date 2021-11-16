import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native'
import Colors from '../../constants/Colors';

type props = {
    message: String;
    style?: any,
    size?: number;
}

export default function HeaderText({message, style, size} : props) {
    return (
    <View style={style}>
        <Text style={styles(size).header}>{message}</Text>
    </View>
    );
}

const styles =(size?: number ) => StyleSheet.create({
    header: {
        color: Colors.black,
        fontWeight: 'bold',
        fontSize: size ? size : 20
    },
});