import * as React from "react";
import { Button, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { logout } from "../firebase/auth";

import { useNavigation } from "@react-navigation/native";
import { StackActions } from "@react-navigation/native";

export default function ScannerScreen() {
  const navigation = useNavigation();

  const signOut = () => {
    logout();
    //navigation.dispatch(StackActions.pop(1));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scanner</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button title="log out" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
