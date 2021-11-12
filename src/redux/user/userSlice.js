import {login, logout} from "./login";
import {createSlice} from "@reduxjs/toolkit";
import {nicknameChange, pwdChange} from "./profile";



const userSlice = createSlice({
  name: 'user',
  initialState: {
    userId: "",
    name: "",
    isLogin: false,
    data:{},
  },
  reducers: {
    loginCheck: (state, {payload}) => {
      state.isLogin = true;
      state.userId = JSON.parse(payload).userId;
      state.name = JSON.parse(payload).name;
    },
    updateName : (state, action) => {
      state.name = action.payload;
    }
  },
  extraReducers: {
    [logout.fulfilled]: (state) => {
      state.isLogin = false;

    },
    [login.fulfilled]: (state) => {
      state.userId = "";
      state.name = "";
      state.isLogin = true;
    },
    [nicknameChange.fulfilled]: (state, {payload: updateName}) => {
      state.data = updateName;
    },
  },
});

export const {loginCheck} = userSlice.actions;

export default userSlice;