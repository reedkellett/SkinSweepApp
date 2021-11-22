import { PhotoLogEntry } from "../types";
import { getUserId } from "./auth";
import { auth, firestore  } from "./firebaseSetUp";

const entriesRef = firestore.collection("entries");

export const getPhotolog = async():Promise<PhotoLogEntry[]> => {
    let photoData: PhotoLogEntry[] = [];
    entriesRef
    .where('userId', '==', getUserId())
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            let convertedData: PhotoLogEntry = {
                id: doc.id,
                imgUrl: doc.data().imgUrl,
                name: doc.data().name,
                status: doc.data().status
            }
            photoData.push(convertedData);
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
    return photoData;
    // console.log('joshhhh')
    // console.log(photoData)
    // return photoData;
    // let currentUser = auth.currentUser;
    // if (currentUser) {
    //     console.log(currentUser.uid)
    //     console.log(entriesRef)
    //     let response = await entriesRef.where('userId', '==', currentUser.uid).get()
    //         .then((document) => {
    //             console.log('d', document)
    //             // const test = document.data();
    //             // console.log('here', test)
    //         })
    //         .catch((error) => alert(error));
    //     return response
    // }
    // return null;
  };