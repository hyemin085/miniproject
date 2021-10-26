import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import Api from "../../common/apis/Api";

export const singup = createAsyncThunk(
  "user/signup",
  async (data, thunkAPi) => {
    try {
      const response = await Api({
        url: `/auth/signup`,
        method: "POST",
        data: {
          email: data.email,
          name: data.name,
          password: data.password,
        },
      });
    } catch (e) {
      return thunkAPi.rejectWithValue({
        error: "회원가입실패"
      });
    }
  }
);