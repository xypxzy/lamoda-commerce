import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isToggled: localStorage.getItem('role') ? 
  localStorage.getItem('role') as string :
  false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      toggle: (state) => {
        state.isToggled = !state.isToggled;
        localStorage.setItem('role', JSON.stringify(state.isToggled))
      },
    },
});

export const { toggle } = authSlice.actions;
export default authSlice.reducer;