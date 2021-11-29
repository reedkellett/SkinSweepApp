import { Entry, PhotoLogEntry, Resource } from "../types";
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
                photoId: doc.data().photoId
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

  export const getEntries = async(name: string) => {
    let entries: any[] = [];
    await entriesRef
    .where('logName', '==', name)
    .orderBy('photoId', 'desc')
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            let entryData: Entry = {
                id: doc.id,
                date: doc.data().date,
                imgUrl: doc.data().imgUrl,
                photoId: doc.data().photoId,
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

  const resourcesRef = firestore.collection("resources");

  export const getResources = async():Promise<Resource[]> => {
    let resources: any[] = [];
    await resourcesRef
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            let resourceData: Resource = {
                id: doc.id,
                title: doc.data().title,
                imgUrl: doc.data().imgUrl,
                url: doc.data().url
            }
            resources.push(doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
        return null;
    });
    return resources;
  };