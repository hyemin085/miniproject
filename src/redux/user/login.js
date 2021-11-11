import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../common/apis/Api";
import jwt_decode from "jwt-decode";
import {history} from "../history";


export const login = createAsyncThunk(
  "user/login",
  async(data, thunkAPI) => {
    try {
      const response = await Api({
        url: "/auth/login",
        method: "POST",
        data: {
          email: data.email,
          password: data.password,
        },
      }).then(response => {
        const {userId, name} = jwt_decode(response.data.token);
        const token = response.data.token;
        const user_data = {
          userId: userId,
          name: name,
          accessToken: token,
        };
        localStorage.setItem("user", JSON.stringify(user_data));
        history.push("/");
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  }
);


export const logout = createAsyncThunk(
  "user/logout",
  async (data, thunkAPI) => {
    localStorage.removeItem("user");
    history.push("/");
  }

);
