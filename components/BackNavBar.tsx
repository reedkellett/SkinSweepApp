import React from "react";
import { StackActions, useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View} from 'react-native'
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export function  BackNavBar() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.back} onPress={() => navigation.dispatch(StackActions.pop(1))}>
                <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    back: {
        marginTop: 15,
        marginLeft: 15,
        backgroundColor: '#FFFFFF',
        opacity: 0.7,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50
    }
});