import {
    deleteObject,
    getDownloadURL,
    getStorage,
    ref as getStorageRef,
    uploadBytes,
} from 'firebase/storage';
import { addDoc, deleteDoc, updateDoc, Timestamp } from 'firebase/firestore';
import firebaseApp, { DB_COLLECTION } from '../scripts/config';

// general todos:
// 1. handle more picture formats
// 2. add error handlers with descriptive error feedback

async function uploadPicture(docId, file, bucket = DB_COLLECTION) {
    const storage = getStorage(firebaseApp);
    const storageRef = getStorageRef(storage, `${bucket}/${docId}.jpg`);

    // todo: add error handling
    const snapshot = await uploadBytes(storageRef, file, {
        contentType: 'image/jpg',
    });

    const downloadUrl = await getDownloadURL(snapshot.ref);

    return downloadUrl;
}

async function deletePicture(docId, bucket = DB_COLLECTION) {
    const storage = getStorage(firebaseApp);
    const storageRef = getStorageRef(storage, `${bucket}/${docId}.jpg`);

    try {
        await deleteObject(storageRef);
        console.log('picture deleted');
    } catch (error) {
        console.error(error);
        // todo: add error handling
    }
}

async function addMember(colRef, values, picture) {
    values.joinDate = Timestamp.fromDate(values.joinDate);

    const docRef = await addDoc(colRef, values);

    if (picture) {
        const downloadUrl = await uploadPicture(docRef.id, picture);
        await updateMember(docRef, { picture: downloadUrl }, null);
    }

    return docRef.id;
}

/*
 * Returns: boolean - `true` if updated else `false`
 * */
async function updateMember(docRef, values, picture) {
    if (picture) {
        // upload picture first to get downloadUrl
        // todo: finish this method to upload picture
        const downloadUrl = await uploadPicture(docRef.id, picture);
        values['picture'] = downloadUrl;
    }

    try {
        await updateDoc(docRef, values);
        return true;
    } catch (error) {
        console.error(error);
    }

    return false;
}

async function deleteMember(docRef) {
    await deleteDoc(docRef);
    await deletePicture(docRef.id);
}

export { uploadPicture, deletePicture, addMember, deleteMember, updateMember };