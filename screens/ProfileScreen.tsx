import React, { useState, useEffect } from "react";
import { StyleSheet, Image, TextInput, Button } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import { Text, View } from "../components/Themed";

import { profileInfo } from "../model/profileInfo";
import { setUserInfo } from "../firebase/profile";
import { auth, firestore } from "../firebase/firebaseSetUp";

const usersRef = firestore.collection("users");

export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [sex, setSex] = useState("");
  const [fitzType, setFitzType] = useState("");
  const [DOB, setDOB] = useState("");
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    let currentUser = auth.currentUser;
    if (currentUser) {
      usersRef
        .doc(currentUser.uid)
        .get()
        .then((document) => {
          const userData = document.data();
          if (userData) {
            setName(userData.fullName);
            setEmail(userData.email);
            setHeight(userData.height || null);
            setWeight(userData.weight || null);
            setSex(userData.sex || null);
            setFitzType(userData.fitzType || null);
            setDOB(userData.DOB || null);
          }
        })
        .catch((error) => alert(error));
    }
  }, []);

  const edit = () => {
    setEditMode(true);
  };
  const done = () => {
    let newUserData: profileInfo = {
      fullName: name,
      email: email,
      height: height,
      weight: weight,
      sex: sex,
      fitzType: fitzType,
      DOB: DOB,
    };
    console.log(newUserData);
    setUserInfo(newUserData);
    setEditMode(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button
          onPress={editMode ? done : edit}
          title={editMode ? "Done" : "Edit"}
          disabled={false}
        />
      </View>

      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={require("../assets/images/icon.png")}
        />
        <TextInput
          style={styles.name}
          onChangeText={(name) => setName(name)}
          value={name}
          editable={false}
        />
        <TextInput
          style={styles.primaryUserInfo}
          onChangeText={(email) => setEmail(email)}
          value={email}
          editable={false}
        />
      </View>

      <View style={styles.body}>
        <View style={styles.listContainer}>
          <Text>Height (in):</Text>
          <TextInput
            style={
              editMode
                ? styles.secondaryUserInfoEditMode
                : styles.secondaryUserInfo
            }
            onChangeText={(height) => setHeight(height)}
            value={height}
            editable={editMode}
            placeholder={"Not Set"}
          />
        </View>

        <View style={styles.listContainer}>
          <Text>Weight (lb):</Text>
          <TextInput
            style={
              editMode
                ? styles.secondaryUserInfoEditMode
                : styles.secondaryUserInfo
            }
            onChangeText={(weight) => setWeight(weight)}
            value={weight}
            editable={editMode}
            placeholder={"Not Set"}
          />
        </View>

        <View style={styles.listContainer}>
          <Text>Sex:</Text>
          <RNPickerSelect
            style={editMode ? pickerSelectStylesEditMode : pickerSelectStyles}
            placeholder={{ label: "Not Set", value: null }}
            onValueChange={(sex) => setSex(sex)}
            items={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
              { label: "Other", value: "other" },
            ]}
            disabled={!editMode}
            value={sex}
          />
        </View>

        <View style={styles.listContainer}>
          <Text>Date of Birth:</Text>
          <TextInput
            style={
              editMode
                ? styles.secondaryUserInfoEditMode
                : styles.secondaryUserInfo
            }
            onChangeText={(DOB) => setDOB(DOB)}
            value={DOB}
            editable={editMode}
            placeholder={"Not Set"}
          />
        </View>

        <View style={styles.listContainer}>
          <Text>FitzPatrick Skin Type:</Text>
          <RNPickerSelect
            style={editMode ? pickerSelectStylesEditMode : pickerSelectStyles}
            placeholder={{ label: "Not Set", value: null }}
            onValueChange={(fitzType) => setFitzType(fitzType)}
            items={[
              { label: "I", value: "I" },
              { label: "II", value: "II" },
              { label: "III", value: "III" },
              { label: "IV", value: "IV" },
              { label: "V", value: "V" },
              { label: "VI", value: "VI" },
            ]}
            disabled={!editMode}
            value={fitzType}
          />
        </View>
      </View>
    </View>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    color: "black",
  },
  inputAndroid: {
    color: "black",
  },
});

const pickerSelectStylesEditMode = StyleSheet.create({
  inputIOS: {
    color: "blue",
  },
  inputAndroid: {
    color: "blue",
  },
});

const styles = StyleSheet.create({
  body: {
    //backgroundColor: "green",
  },
  buttonsContainer: {
    flexDirection: "row-reverse",
    // justifyContent: "space-between",
    //backgroundColor: "#F9C9C9",
  },
  container: {
    flexDirection: "column",
  },
  header: {
    //backgroundColor: "#F9C9C9",
    alignItems: "center",
  },
  listContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "5%",
  },
  name: {
    fontSize: 22,
    color: "#000000",
  },
  primaryUserInfo: {
    fontSize: 16,
    color: "#778899",
  },
  profileImage: {
    height: 100,
    width: 100,
    //backgroundColor: "grey",
    borderRadius: 50,
  },
  secondaryUserInfo: {
    color: "black",
  },
  secondaryUserInfoEditMode: {
    color: "blue",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
