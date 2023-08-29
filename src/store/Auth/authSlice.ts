import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Auth {
  uid?: string | undefined | null;
  email?: string | undefined | null;
  displayName?: string | undefined | null;
  photoURL?: string | undefined | null;
  status?: "checking" | "not-authenticated" | "authenticated";
  providerData: string;
}

const initialState: Auth = {
  uid: "",
  email: "",
  displayName: "",
  photoURL: "",
  status: "checking",
  providerData: "",
};

export const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    login: (state, { payload }: PayloadAction<Auth>) => {
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.status = "authenticated";
      state.providerData = payload.providerData;
    },
    logout: (state) => {
      state.uid = "";
      state.email = "";
      state.displayName = "";
      state.photoURL = "";
      state.status = "not-authenticated";
      state.providerData = "";
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
