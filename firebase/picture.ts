import { auth, fireStorage, firestore } from "./firebaseSetUp";


export async function uploadImageAsync(uri: string, timestamp: string) {
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
      xhr.open("GET", uri, true);
      xhr.send(null);
    });
    const ref = fireStorage.ref().child(timestamp);
    await ref.put(blob);
  }

const entriesRef = firestore.collection("entries");
export async function addUrlToDatabase(timestamp: string, id: string) {
    await entriesRef.doc(id).set({
        photoId: timestamp
    })
}

const logRef = firestore.collection("photolog");
export async function addDataToEntry(entryId: string, photoId: string, logName: string, title: string, notes?: string){
    // const logExists = await logRef.where('name', '==', logName).get().then(doc => {
    //     if (!doc.exists) {
    //         console.log('No such document!');
    //     } else {
    //         console.log('Document data:', doc.data());
    //     }
    // })
    // console.log('joshy', logExists)
    await logRef.doc(logName).set({
        name: logName,
        photoId: photoId,
        userId: auth.currentUser?.uid,
    })
    await entriesRef.doc(entryId).update({
        name: title,
        userId: auth.currentUser?.uid,
        date: new Date().toISOString().split("T")[0],
        notes: notes,
        logName: logName,
        status: 'unsure'
    })
}

export async function getImageUrl(photoId?: string) {
    if(photoId){
        const ref = fireStorage.ref().child(photoId);
        const url = await ref.getDownloadURL()
        return url;
    }
}