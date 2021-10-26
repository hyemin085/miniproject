import {login, logout} from "./login";
import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userId: "",
    name: "",
    isLogin: false,
  },
  reducers: {
    loginCheck: (state, {payload}) => {
      state.isLogin = true;
      state.userId = JSON.parse(payload).userId;
      state.name = JSON.parse(payload).name;

    },
  },
  extraReducers: {
    [login.fulfilled]: (state) => {
      state.userId = "";
      state.name = "";
      state.isLogin = true;
    },
    [logout.fulfilled]: (state) => {
      state.isLogin = false;
    }
  },
});

export const {loginCheck} = userSlice.actions;

export default userSlice.reducer;