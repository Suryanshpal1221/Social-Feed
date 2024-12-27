import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  data: {},
};

export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
});

export const {} = signupSlice.actions;

export default signupSlice.reducer;

// export const signup = createAsyncThunk(
//   "signup",
//   async ({ username, email, password }, { rejectWithValue }) => {
//     try {
//       const res = await fetch("http://localhost:8000/auth/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, email, password }),
//       });

//       const data = await res.json();

//       if (!data.success) {
//         return rejectWithValue(data.message);
//       }
//       return data;
//     } catch (error) {
//       // On server or network error, reject with a custom message
//       return rejectWithValue("Server time out.");
//     }
//   }
// );
