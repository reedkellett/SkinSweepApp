import * as React from "react";
import { Button, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { logout } from "../firebase/auth";
import { Ionicons } from '@expo/vector-icons';

import { StackActions, useNavigation } from "@react-navigation/native";
import { Camera } from 'expo-camera';
import { useState } from "react";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { addUrlToDatabase, uploadImageAsync } from "../firebase/picture";
import Colors from "../constants/Colors";

export default function ScannerScreen() {
  const navigation = useNavigation()
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  let camera: any = null;

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const snap = async () => {
    if (camera) {
      let photo = await camera.takePictureAsync();
      console.log(photo)
      const id = Math.floor(Math.random() * 100).toString();
      const time = new Date().toISOString()
      uploadImageAsync(photo.uri, time)
      addUrlToDatabase(time, id);
      navigation.dispatch(StackActions.push('InputScreen', {entryId: id, photoId: time}));
    }
  };


  const signOut = () => {
    logout();
    //navigation.dispatch(StackActions.pop(1));
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={ref => { camera = ref;}}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Ionicons name="camera-reverse-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.snap}
            onPress={() => {
              snap()
            }}>
            <Ionicons name="camera-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  snap: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: Colors.white,
    opacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gray
  }
});
