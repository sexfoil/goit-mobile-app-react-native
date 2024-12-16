import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  User,
  signOut,
} from "firebase/auth";
import { auth } from "../config";
import { setUserInfo, clearUserInfo } from "../redux/reducers/userSlice";
import { AppDispatch } from "../redux/store/store";
// import { addUser, getUser, updateUserInFirestore } from "./firestore";

export const register = async ({ email, password }) => {
  try {
    const credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = credentials.user;

    // await addUser(user.uid, {
    //   uid: user.uid,
    //   email: user.email,
    //   displayName: user.displayName,
    // });
  } catch (error) {
    console.log("REGISTARTION ERROR:", error);
  }
};

export const login = async ({ email, password }, dispatch) => {
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

export const logout = async (dispatch) => {
  try {
    await signOut(auth);
    dispatch(clearUserInfo());
  } catch (error) {
    console.error("LOGOUT ERROR:", error);
  }
};

// Відстеження змін у стані аутентифікації
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

// Оновлення профілю користувача
// export const updateUserProfile = async (update: { displayName?: string; photoURL?: string }) => {
//   const user = auth.currentUser;
//   if (user) {
//     try {
//       await updateProfile(user, update);
//     } catch (error) {
//       throw error;
//     }
//   }
// };
