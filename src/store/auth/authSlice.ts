import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const storedRole = localStorage.getItem("role");
const initialRole = storedRole ? JSON.parse(storedRole) : false;

const initialState = {
  isAuth: initialRole,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthStatus: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
      localStorage.setItem("role", JSON.stringify(state.isAuth));
    },
  },
});

export const { setAuthStatus } = authSlice.actions;
export default authSlice.reducer;
