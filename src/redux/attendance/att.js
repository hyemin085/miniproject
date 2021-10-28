import {logout} from "../user/login";
import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../common/apis/Api";



export const getAtt = createAsyncThunk(
  "att/getAtt",
  async({page}) => {
    const response = await Api.get(
      `/attandance/attInfo?page=${page}`,
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
      const a = response.data.message;
      alert(a);

    } catch (e) {

      const b = e.response.data.message;
      alert(b);
      await thunkAPI.dispatch(logout());
      return thunkAPI.rejectWithValue({
        error: b,
      });
    }
    await thunkAPI.dispatch(getAtt());

  }
)
