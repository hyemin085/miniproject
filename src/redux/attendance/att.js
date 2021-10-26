import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../common/apis/Api";
import axios from "axios";

export const getAtt = createAsyncThunk(
  "att/getAtt",
  async() => {
    const response = await Api.get(
      `/attandance/attInfo`
    );
    return response.data;
  }
);

export const addAtt = createAsyncThunk(
  "att/addAtt",
  async({textInput, accessToken}, thunkAPI) => {
    try {
      const response = await Api({
        url: "/attandance/checkIn",
        method: "POST",
        data: {
          message: textInput,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    } catch (e) {
      return thunkAPI.rejectWithValue({
        error: "이미 오늘 출석을 완료했습니다.",
      });
    }
    await thunkAPI.dispatch(getAtt());

  }
)

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