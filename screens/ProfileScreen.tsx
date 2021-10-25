import React, { useState, useReducer } from "react";
import { StyleSheet, Image, TextInput, Button } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import { Text, View } from "../components/Themed";

const nameBE = "Reed Kellett ";
const emailBE = "reed.kellett@gmail.com";
const heightBE = "70";
const weightBE = "160";
const sexBE = "male";
const DOBBE = "1999-06-12";
const fitzTypeBE = "IV";

export default function ProfileScreen() {
  const [name, setName] = useState(nameBE);
  const [email, setEmail] = useState(emailBE);
  const [height, setHeight] = useState(heightBE);
  const [weight, setWeight] = useState(weightBE);
  const [sex, setSex] = useState(sexBE);
  const [fitzType, setFitzType] = useState(fitzTypeBE);
  const [DOB, setDOB] = useState(DOBBE);
  const [editMode, setEditMode] = useState(false);

  // const cancel = () => {
  //   setEditMode(false);
  //   console.log("cancel");
  // };
  const edit = () => {
    setEditMode(true);
  };
  const done = () => {
    // send updated info to BE
    setEditMode(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        {/* <Button onPress={cancel} title="Cancel" disabled={!editMode} /> */}
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
  inputAndriod: {
    color: "black",
  },
});

const pickerSelectStylesEditMode = StyleSheet.create({
  inputIOS: {
    color: "blue",
  },
  inputAndriod: {
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
