import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../config";
import { setUserInfo, clearUserInfo } from "../redux/reducers/userSlice";
import { addUser, getUser } from "./firestore";

export const registerToApp = async (login, email, password) => {
  console.log("Creds: ", login, email, password);
  try {
    const credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = credentials.user;

    await addUser(user.uid, {
      uid: user.uid,
      email: user.email,
      displayName: login,
    });
  } catch (error) {
    console.log("REGISTARTION ERROR:", error);
  }
};

export const loginToApp = async ({ email, password }, dispatch) => {
  console.log("Login Creds: ", email, password);

  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    const user = credentials.user;

    dispatch(
      setUserInfo({
        uid: user.uid,
        email: user?.email,
        displayName: user?.displayName,
        profilePhoto: user?.photoURL,
      })
    );
    return user;
  } catch (error) {
    console.log("LOGIN ERROR:", error);
    throw error;
  }
};

export const logoutFromApp = async (dispatch) => {
  try {
    await signOut(auth);
    dispatch(clearUserInfo());
  } catch (error) {
    console.error("LOGOUT ERROR:", error);
  }
};

export const authStateChanged = (dispatch) => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userData = await getUser(user.uid);

      dispatch(
        setUserInfo({
          ...userData,
          uid: user.uid,
          email: user.email,
        })
      );
    } else {
      dispatch(clearUserInfo());
    }
  });
};
