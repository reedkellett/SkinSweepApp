import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { RNCamera } from "react-native-camera";
import { Text, View } from "./Themed";

export default function CameraView(camera: RNCamera) {
  const [img, setImg] = useState([undefined, ""]);

  async function takePicture() {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      setImg([data.base64, data.uri]);
    }
  }

  function processPhoto() {}
  return (
    <View>
      <RNCamera
        ref={(ref) => {
          camera = ref as RNCamera;
        }}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: "Permission to use camera",
          message: "We need your permission to use your camera",
          buttonPositive: "Ok",
          buttonNegative: "Cancel",
        }}
      />
      <View style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}>
        <TouchableOpacity
          onPress={takePicture.bind(camera)}
          style={styles.takePhoto}
        >
          <Text style={{ fontSize: 14 }}> SNAP </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  preview: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  takePhoto: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    margin: 20,
  },
});
