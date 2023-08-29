import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  singInWithFacebook,
  singInWithGoogle,
  logoutFirebase,
} from "../api/firebase/providers";
import { login, logout } from "../store/Auth/authSlice";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../api/firebase/firebaseConfig";

const useAuthStore = () => {
  const user = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();

  const onLoginWhitGoogle = async () => {
    const result = await singInWithGoogle();
    dispatch(login({ ...result, providerData: "google.com" }));
  };

  const onLoginWhitFacebook = async () => {
    const result = await singInWithFacebook();
    dispatch(login({ ...result, providerData: "google.com" }));
  };

  const onLogout = async () => {
    await logoutFirebase();
    dispatch(logout());
  };

  const checkoutSession = async () => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());
      const { uid, displayName, email, photoURL, providerData } = user;
      let providerId = "";
      if (providerData.length > 0) providerId = providerData[0].providerId;

      dispatch(
        login({
          uid,
          displayName,
          email,
          photoURL,
          providerData: providerId,
        })
      );
    });
  };

  return {
    user,
    ...user,
    onLoginWhitGoogle,
    onLoginWhitFacebook,
    onLogout,
    checkoutSession,
  };
};

export default useAuthStore;
