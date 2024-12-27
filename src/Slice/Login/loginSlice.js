import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  data: {},
};

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {},
});

export const {} = loginSlice.actions;

export default loginSlice.reducer;

// export const login = createAsyncThunk(
//   "login",

//   async ({ username, password }, { rejectWithValue }) => {
//     console.log("Whyyyyee");
//     try {
//       const res = await fetch("http://localhost:8000/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       });
//       console.log("res :::::", res);
//       const data = await res.json();

//       if (!data.success) {
//         console.log("Error");
//         return rejectWithValue(data.message);
//       }

//       return data;
//     } catch (error) {
//       console.log("Helllllme");
//       return rejectWithValue("Server time out.");
//     }
//   }
// );
