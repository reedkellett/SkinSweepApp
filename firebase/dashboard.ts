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
    // for some reason when it is one entry it is not rendering, figure this out
    return photoData;
  };