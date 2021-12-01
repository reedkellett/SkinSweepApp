import { auth, firestore, fireStorage } from "./firebaseSetUp";
import { ProfileInfo } from "../types";
import { Platform } from "react-native";

const usersRef = firestore.collection("users");

export const getUserInfo = async (): Promise<ProfileInfo> => {
  const currentUser = auth.currentUser;
  let userData: ProfileInfo = { fullName: "", email: "" };

  if (currentUser) {
    await usersRef
      .doc(currentUser.uid)
      .get()
      .then(async (document) => {
        const documentData = document.data();
        if (documentData) {
          userData.fullName = documentData.fullName;
          userData.email = documentData.email;
          userData.height = documentData.height;
          userData.weight = documentData.weight;
          userData.sex = documentData.sex;
          userData.fitzType = documentData.fitzType;
          userData.DOB = documentData.DOB;
          if (documentData.imageURL) {
            let imageRef = fireStorage.ref("profile" + currentUser.uid);
            await imageRef
              .getDownloadURL()
              .then((url) => {
                userData.imageURL = url;
              })
              .catch((error) => alert(error));
          }
        }
      })
      .catch((error) => alert(error));
  }
  return userData;
};

export const setUserInfo = async (userData: ProfileInfo) => {
  const currentUser = auth.currentUser;
  if (currentUser) {
    // handle profile image
    if (userData.imageURL) {
      let imageName = "profile" + currentUser.uid;
      let uploadUri =
        Platform.OS === "ios"
          ? userData.imageURL.replace("file://", "")
          : userData.imageURL;

      // delete image
      await fireStorage
        .ref(imageName)
        .delete()
        .catch((error) => console.log("delete failed"));

      // add image
      const blob: any = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
        };
        xhr.onerror = function (e) {
          console.log(e);
          reject(new TypeError("Network request failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", uploadUri, true);
        xhr.send(null);
      });
      await fireStorage
        .ref(imageName)
        .put(blob)
        .catch((error) => alert(error));
    }

    // set data
    await usersRef
      .doc(currentUser.uid)
      .set(userData)
      .catch((error) => alert(error));
  }
};
