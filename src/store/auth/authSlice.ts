import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const storedRole = localStorage.getItem('role');
const initialRole = storedRole ? JSON.parse(storedRole) : false;

const initialState = {
  isToggled: initialRole
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      toggle: (state, action: PayloadAction<boolean>) => {
          state.isToggled = action.payload;
        localStorage.setItem('role', JSON.stringify(state.isToggled))
      },
    },
});

export const { toggle } = authSlice.actions;
export default authSlice.reducer;
