import { auth, firestore } from "./firebaseSetUp";
import { profileInfo } from "../model/profileInfo";

const usersRef = firestore.collection("users");

// This is done in profilescreen use effect
// export const getUserInfo = () => {
//   let currentUser = auth.currentUser;
//   var userInfo: profileInfo = {};
//   if (currentUser) {
//     usersRef
//       .doc(currentUser.uid)
//       .get()
//       .then((document) => {
//         const userData = document.data();
//         if (userData) {
//           userInfo = userData;
//         }
//       })
//       .catch((error) => alert(error));
//   } else {
//     throw new Error("current user not found");
//   }
//   return userInfo;
//   // return happens before firebase call
// };

export const setUserInfo = (userData: profileInfo) => {
  let currentUser = auth.currentUser;
  if (currentUser) {
    usersRef
      .doc(currentUser.uid)
      .set(userData)
      .catch((error) => alert(error));
  }
};
