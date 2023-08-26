
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const storedRole = localStorage.getItem('role');
const initialRole = storedRole ? JSON.parse(storedRole) : false;

const initialState = {
  isAuth: initialRole
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
<<<<<<< HEAD
      toggle: (state, action: PayloadAction<boolean>) => {
        state.isToggled = action.payload;
        localStorage.setItem('role', state.isToggled)
=======
      setAuthStatus: (state, action: PayloadAction<boolean>) => {
        state.isAuth = action.payload;
        localStorage.setItem('role', JSON.stringify(state.isAuth))
>>>>>>> main
      },
    },
});

export const { setAuthStatus } = authSlice.actions;
export default authSlice.reducer;
