import { auth, firestore } from "./firebaseSetUp";

export const register = (email: string, password: string, fullName: string) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      const uid = response.user?.uid;
      const data = {
        id: uid,
        email: email,
        fullName: fullName,
      };
      const usersRef = firestore.collection("users");
      usersRef
        .doc(uid)
        .set(data)
        .catch((error) => alert(error));
      console.log("register");
    })
    .catch((error) => alert(error));
  console.log(auth.currentUser?.uid);
};

export const login = (email: string, password: string) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      console.log("login");
    })
    .catch((error) => alert(error));
  console.log(auth.currentUser?.uid);
};

export const logout = () => {
  auth.signOut().then(() => {
    console.log("logout");
  });
  console.log(auth.currentUser?.uid);
};
