import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { FirebaseAuth } from "./firebaseConfig";

export const singInWithGoogle = async () => {
  const googleProvider = new GoogleAuthProvider();
  const result = await signInWithPopup(FirebaseAuth, googleProvider);
  return result.user;
};

export const singInWithFacebook = async () => {
  const facebookProvider = new FacebookAuthProvider();
  const result = await signInWithPopup(FirebaseAuth, facebookProvider);
  return result.user;
};

export const logoutFirebase = async () => {
  await FirebaseAuth.signOut();
};
