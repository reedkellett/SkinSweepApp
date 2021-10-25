	
import React, { useState, useReducer } from 'react';
// import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity, TextInput} from 'react-native'
import { actionCreators, initialState, reducer } from '../reducers/signup'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import { signupAPI } from '../api/auth';
import ErrorText from '../components/text/errorText';

export default function SignUp() {
    const navigation = useNavigation()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [state, dispatch] = useReducer(reducer,initialState)

    const signup = async() => {
        if(validatation()) {
            dispatch(actionCreators.loading());
            try {
                const response = await signupAPI(email, password);
                navigation.dispatch(StackActions.push('Root', {user: response.id}));
            } catch (e) {
                console.log('error')
                dispatch(actionCreators.failure());
            }
        }
    }

    function validatation() {
        let reg = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
        if(!reg.test(email)){
            dispatch(actionCreators.formError("Invalid email"))
            return false;
        }
        if(password != password2){
            dispatch(actionCreators.formError("Passwords do not match"))
            return false;
        }
        return true;
    }
    

    return (
        <View style={ styles.container }>
            <Text style={styles.title}>Create Account</Text>
            { state.errorMsg  && <ErrorText message={state.errorMsg}/>}
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#003f5c"
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
            />
             <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(password2) => setPassword2(password2)}
            />
            <TouchableOpacity style={styles.logIn} onPress={() => signup()}>
                {/* { state.loading ? <Text>...</Text>:  */}
                <Text style={{color: '#fff', fontWeight: 'bold'}}>Sign Up</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.back} onPress={() => navigation.dispatch(StackActions.pop(1))}>
                <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
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
        width: '80%',
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