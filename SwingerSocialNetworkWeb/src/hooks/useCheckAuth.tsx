import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../api/firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { login, logout } from "../store/Auth/authSlice";

const useCheckAuth = () => {
  const dispatch = useDispatch();

  const checkoutSession = async () => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());
      const { uid, displayName, email, photoURL } = user;
      dispatch(login({ uid, displayName, email, photoURL }));
    });
  };

  return { checkoutSession };
};

export default useCheckAuth;
