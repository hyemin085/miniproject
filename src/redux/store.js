import { configureStore } from "@reduxjs/toolkit";
import { connectRouter, } from "connected-react-router";
import {history} from "./history";

import {attSlice} from "./attendance/attSlice";
import userSlice from "./user/userSlice";


export const store = configureStore({
  reducer: {
    router: connectRouter(history),
    att: attSlice.reducer,
    user: userSlice.reducer,

  },
});