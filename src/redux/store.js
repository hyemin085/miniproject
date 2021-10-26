import { configureStore } from "@reduxjs/toolkit";
import {attSlice} from "./attendance/att";
import userSlice from "./user/userSlice";
import { connectRouter, } from "connected-react-router";
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory();

export const store = configureStore({
  reducer: {
    att: attSlice.reducer,
    user: userSlice,
    router: connectRouter(history),
  },
});