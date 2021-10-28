import {createSlice} from "@reduxjs/toolkit";
import {getAtt} from "./att";


const initialState={
  info: [],
}

export const attSlice = createSlice({
  name: "att",
  initialState: initialState,
  reducers: {

  },
  extraReducers: {
    [getAtt.fulfilled]: (state, action) => {
      state.info = action.payload.info;
    },
  },
});



export default attSlice.reducer;