import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import logo from "../assets/images/logo.png";
import { useNavigation } from "@react-navigation/native";
import { StackActions } from "@react-navigation/native";
import { login } from "../firebase/auth";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createAccount = () => {
    const pushAction = StackActions.push("SignUp");
    navigation.dispatch(pushAction);
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
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
      <TouchableOpacity
        style={styles.logIn}
        onPress={() => login(email, password)}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Log In</Text>
      </TouchableOpacity>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}> Don't have an account?</Text>
        <TouchableOpacity onPress={() => createAccount()}>
          <Text style={styles.create}> Create One </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9C9C9",
  },
  logo: {
    width: "90%",
    height: "10%",
    marginBottom: "30%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: "30%",
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    paddingLeft: 20,
  },
  logIn: {
    width: "30%",
    height: "5%",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7884F8",
  },
  bottomContainer: {
    flexDirection: "row",
    marginTop: "10%",
  },
  bottomText: {
    fontSize: 14,
  },
  create: {
    fontSize: 14,
    color: "#7884F8",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
