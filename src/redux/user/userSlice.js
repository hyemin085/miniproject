import {login, logout} from "./login";
import {createSlice} from "@reduxjs/toolkit";
import ChangeName from "../../components/ChangeUser/ChangeName";
import {nicknameChange} from "./profile";



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
    [logout.fulfilled]: (state) => {
      state.isLogin = false;

    },
    [login.fulfilled]: (state) => {
      state.userId = "";
      state.name = "";
      state.isLogin = true;
    },
    [nicknameChange.fulfilled]: (state, {payload}) => {
      // state.user = updatedUser;
      console.log("실행");
    },
  },
});

export const {loginCheck} = userSlice.actions;

export default userSlice;