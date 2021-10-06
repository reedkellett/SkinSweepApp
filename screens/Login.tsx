	
import React, { useState, useReducer } from 'react';
// import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity, TextInput, Image} from 'react-native'
import { actionCreators, initialState, reducer } from '../reducers/login'
import logo from '../assets/images/logo.png'
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import { loginApi } from '../api/login';
import ErrorText from '../components/text/errorText';

export default function Login() {
    const navigation = useNavigation()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginState, dispatch] = useReducer(reducer, initialState)

    const login = async() => {
        dispatch(actionCreators.loading());
        try {
            await loginApi(username,password);
            navigation.dispatch(StackActions.push('Root', {user: username}));
          } catch (e) {
            console.log('error')
            dispatch(actionCreators.failure());
          }
    }

    const createAccount = () => {
        const pushAction = StackActions.push('SignUp');
        navigation.dispatch(pushAction);
    }

    return (
        <View style={ styles.container }>
            <Image source={logo} style={styles.logo}/>
            { loginState.error && <ErrorText message="Login Failed, Please Try Again"/>}
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
            <TouchableOpacity style={styles.logIn} onPress={() => login()}>
                { loginState.loading ? <Text>...</Text>: <Text>Log In</Text> }
            </TouchableOpacity>
            <View style={styles.bottomContainer}> 
                <Text style={styles.bottomText}> Don't have an account?</Text>
                <TouchableOpacity onPress={() => createAccount()}>
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
      backgroundColor: '#F9C9C9'
    },
    logo: {
        width: '90%',
        height: '10%',
        marginBottom: '30%'
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