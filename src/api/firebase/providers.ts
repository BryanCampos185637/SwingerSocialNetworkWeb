import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./firebaseConfig";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  const result = await signInWithPopup(FirebaseAuth, googleProvider);
  return result.user;
};

export const logoutFirebase = async () => {
  await FirebaseAuth.signOut();
};
