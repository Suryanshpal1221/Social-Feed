import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "../Slice/Login/signupSlice";
import loginReducer from "../Slice/Login/loginSlice";

export const store = configureStore({
  reducer: {
    signup: signupReducer,
    login: loginReducer,
  },
});
