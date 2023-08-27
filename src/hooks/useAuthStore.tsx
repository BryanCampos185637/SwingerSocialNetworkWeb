import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { singInWithGoogle } from "../api/firebase/providers";
import { login, logout } from "../store/Auth/authSlice";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../api/firebase/firebaseConfig";

const useAuthStore = () => {
  const user = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();

  const onLoginWhitGoogle = async () => {
    const result = await singInWithGoogle();
    dispatch(login({ ...result }));
  };

  const onLogout = async () => {
    dispatch(logout())
  };

  
  const checkoutSession = async () => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());
      const { uid, displayName, email, photoURL } = user;
      dispatch(login({ uid, displayName, email, photoURL }));
    });
  };

  return {
    user,
    ...user,
    onLoginWhitGoogle,
    onLogout,
    checkoutSession,
  };
};

export default useAuthStore;
