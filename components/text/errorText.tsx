import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native'

type props = {
    message: String;
}

export default function ErrorText({message} : props) {
    return (
    <View style={styles.container}>
        <Text style={styles.error}>{message}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    error: {
        padding: 5,
        fontFamily: 'Roboto',
        fontSize: 14,
        color: '#FF0000'
    },
    container: {
        width: '70%',
        textAlign: 'left'
    }
});