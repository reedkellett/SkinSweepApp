import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native'

type props = {
    message: string;
}

export default function ErrorText({message} : props) {
    return (
        <Text style={styles.error}>{message}</Text>
    )
}

const styles = StyleSheet.create({
    error: {
        padding: 5,
        fontFamily: 'Roboto',
        fontSize: 14,
        color: '#FF0000'
    }
});