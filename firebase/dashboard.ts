import { Entry, PhotoLogEntry } from "../types";
import { getUserId } from "./auth";
import { auth, firestore  } from "./firebaseSetUp";

const logRef = firestore.collection("photolog");

export const getPhotolog = async():Promise<PhotoLogEntry[]> => {
    let photoData: PhotoLogEntry[] = [];
    await logRef
    .where('userId', '==', getUserId())
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            let convertedData: PhotoLogEntry = {
                id: doc.id,
                imgUrl: doc.data().imgUrl,
                name: doc.data().name,
            }
            photoData.push(convertedData);
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
        return null;
    });
    return photoData;
  };

  const entriesRef = firestore.collection("entries");

  export const getEntries = async(id: string) => {
    let entries: any[] = [];
    await entriesRef
    .where('logId', '==', id)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            let entryData: Entry = {
                id: doc.id,
                date: doc.data().date,
                imgUrl: doc.data().imgUrl,
                status: doc.data().status,
                name: doc.data().name,
                notes: doc.data().notes,
                diagnosis: doc.data().diagnosis,
                confidence: doc.data().confidence
            }
            entries.push(entryData);
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
        return null;
    });
    return entries;
  };