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
          accessToken: token,
        };
        const name_data = {
          name: name,
        }
        localStorage.setItem("user", JSON.stringify(user_data));
        localStorage.setItem("name", JSON.stringify(name_data));
        console.log(response)
       if(response.data.ok){
         history.push("/")
       }
      });
      return response;
    } catch (e) {
      function loginError() {
        alert("로그인을 실패하였습니다. 아이디나 비밀번호를 확인해주세요.")
        history.back();
      }
      loginError();
      return false;
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
