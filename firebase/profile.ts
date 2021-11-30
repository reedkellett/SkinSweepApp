import { auth, firestore } from "./firebaseSetUp";
import { ProfileInfo } from "../types";

const usersRef = firestore.collection("users");

export const getUserInfo = async (): Promise<ProfileInfo> => {
  const currentUser = auth.currentUser;
  let userData: ProfileInfo = { fullName: "", email: "" };

  if (currentUser) {
    await usersRef
      .doc(currentUser.uid)
      .get()
      .then((document) => {
        const documentData = document.data();
        if (documentData) {
          userData.fullName = documentData.fullName;
          userData.email = documentData.email;
          userData.height = documentData.height;
          userData.weight = documentData.weight;
          userData.sex = documentData.sex;
          userData.fitzType = documentData.fitzType;
          userData.DOB = documentData.DOB;
          userData.imageURL = documentData.imageURL;
        }
      })
      .catch((error) => alert(error));
  }

  return userData;
};

export const setUserInfo = (userData: ProfileInfo) => {
  const currentUser = auth.currentUser;
  if (currentUser) {
    usersRef
      .doc(currentUser.uid)
      .set(userData)
      .catch((error) => alert(error));
  }
};
