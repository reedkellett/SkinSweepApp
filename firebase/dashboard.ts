import { auth, firestore,  } from "./firebaseSetUp";

const entriesRef = firestore.collection("entries");

export const getPhotolog = async() => {
    let currentUser = auth.currentUser;
    if (currentUser) {
        console.log(currentUser.uid)
        console.log(entriesRef)
        let response = await entriesRef.where('userId', '==', currentUser.uid).get()
            .then((document) => {
                console.log('d', document)
                // const test = document.data();
                // console.log('here', test)
            })
            .catch((error) => alert(error));
        return response
    }
    return null;
  };