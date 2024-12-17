import { doc, getDoc, setDoc } from "firebase/firestore";
import { db, storage } from "../config";
import { ref, uploadBytes } from "firebase/storage";

export const addUser = async (userId, userData) => {
  try {
    await setDoc(doc(db, "users", userId), userData, { merge: true });
    console.log("User added:", userId);
  } catch (error) {
    console.error("Error adding user:", error);
  }
};

export const addPost = async (userId, post) => {
  try {
    await setDoc(
      doc(db, "posts", userId),
      { userId, posts: post },
      { merge: true }
    );
    console.log("Post added:", userId);
  } catch (error) {
    console.error("Error adding post:", error);
  }
};

export const getUser = async (userId) => {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("User data:", docSnap.data());
    return docSnap.data();
  } else {
    console.log("No such document!");
    return null;
  }
};

export const uploadImage = async (userId, file, fileName) => {
  try {
    const imageRef = ref(storage, `profilePhotos/${userId}/${fileName}`);

    console.log("Uploading to:", imageRef.fullPath);
    const result = await uploadBytes(imageRef, file);
    console.log("Upload result:", result);
    return imageRef;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};
