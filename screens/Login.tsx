	
import React, { useState } from 'react';
// import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity, TextInput } from 'react-native'

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>SkinSweep</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#003f5c"
                onChangeText={(username) => setUsername(username)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
            />
            <TouchableOpacity style={styles.logIn} onPress={() => console.log('login ' + username + ' ' + password)}>
                <Text>Log In</Text>
            </TouchableOpacity>
            <View style={styles.bottomContainer}> 
                <Text style={styles.bottomText}> Don't have an account?</Text>
                <TouchableOpacity onPress={() => console.log('create')}>
                    <Text style={styles.create}> Create One </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F08585'
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: '30%'
    },
    input: {
        backgroundColor: "#FFFFFF",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        padding: 20,
    },
    logIn: {
        width: '30%',
        height: '5%',
        borderRadius: 40,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#7884F8'
    },
    bottomContainer: {
        flexDirection: 'row',
        marginTop: '10%'
    },
    bottomText: {
        fontFamily: 'Monospace',
        fontSize: 12,
    },
    create: {
        fontFamily: 'Monospace',
        fontSize: 12,
        color: '#7884F8',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    }
  });