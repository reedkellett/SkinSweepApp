import React, { useState, useEffect } from "react";
import { StyleSheet, Image, TextInput, Button, Platform } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Text, View } from "../components/Themed";

import { setUserInfo } from "../firebase/profile";
import Colors from "../constants/Colors";
import { logout } from "../firebase/auth";
import { ProfileInfo } from "../types";
import { getUserInfo } from "../firebase/profile";

const addImageIcon =
  "https://cdns.iconmonstr.com/wp-content/assets/preview/2018/240/iconmonstr-plus-circle-thin.png";

export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [sex, setSex] = useState("");
  const [fitzType, setFitzType] = useState("");
  const [DOB, setDOB] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [imageURL, setImageURL] = useState(addImageIcon);

  useEffect(() => {
    getUserInfo().then((userData) => {
      setName(userData.fullName);
      setEmail(userData.email);
      setHeight(userData.height || "");
      setWeight(userData.weight || "");
      setSex(userData.sex || "");
      setFitzType(userData.fitzType || "");
      setDOB(userData.DOB || "");
      setImageURL(userData.imageURL || addImageIcon);
    });

    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const signOut = () => {
    logout();
  };

  const edit = () => {
    setEditMode(true);
  };
  const done = () => {
    let newUserData: ProfileInfo = {
      fullName: name,
      email: email,
      height: height,
      weight: weight,
      sex: sex,
      fitzType: fitzType,
      DOB: DOB,
      imageURL: imageURL,
    };
    console.log(newUserData);
    setUserInfo(newUserData);
    setEditMode(false);
  };

  const pickImage = async () => {
    console.log("pick image");
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImageURL(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button
          onPress={editMode ? done : edit}
          title={editMode ? "Done" : "Edit"}
          disabled={false}
        />
        <Button title="Logout" onPress={signOut} />
      </View>

      <View style={styles.header}>
        <TouchableOpacity onPress={pickImage} disabled={!editMode}>
          <Image
            style={editMode ? styles.profileImageEditMode : styles.profileImage}
            source={{ uri: imageURL }}
          />
        </TouchableOpacity>
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
          <Text style={styles.labels}>Height (in):</Text>
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
          <Text style={styles.labels}>Weight (lb):</Text>
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
          <Text style={styles.labels}>Sex:</Text>
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
          <Text style={styles.labels}>Date of Birth:</Text>
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
          <Text style={styles.labels}>FitzPatrick Skin Type:</Text>
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
    backgroundColor: Colors.lightPurple,
  },
  buttonsContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    backgroundColor: Colors.lightPurple,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colors.lightPurple,
  },
  header: {
    alignItems: "center",
    backgroundColor: Colors.lightPurple,
  },
  labels: {
    color: "#000000",
  },
  listContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "5%",
    backgroundColor: Colors.lightPurple,
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
    // backgroundColor: "#FFFFFF",
    borderRadius: 50,
  },
  profileImageEditMode: {
    height: 100,
    width: 100,
    // backgroundColor: "#FFFFFF",
    borderRadius: 50,
    borderColor: "blue",
    borderWidth: 1,
    opacity: 0.5,
  },
  secondaryUserInfo: {
    color: "black",
  },
  secondaryUserInfoEditMode: {
    backgroundColor: "white",
    color: "blue",
    width: 80,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
