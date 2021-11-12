import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../common/apis/Api";
import {history} from "../history";


export const nicknameChange = createAsyncThunk(
  "user/nicknameChange",
  async ({changeName, checkPwd, accessToken}, thunkAPI) => {
    try {
      const response = await Api({
        url: "user/changeProfile",
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: {
          username: changeName,
          password: checkPwd,
        },

      })
      console.log(response);
      if (response.data.ok) {
        console.log(changeName)
        const name_data = {
          name: changeName,
        }
        localStorage.setItem("name", JSON.stringify(name_data));
        history.push("/");
      }
    } catch (e) {
      return thunkAPI.rejectWithValue({
        error: "닉네임변경실패"
      })
    }
  }
);


export const pwdChange = createAsyncThunk(
  "user/pwdChange",
  async ({changePwd, password, accessToken}, thunkAPI) => {
    try {
      const response = await Api({
        url: "/user/changePwd",
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
          data: {
            currentPwd: password,
            newPwd: changePwd,
          },
      })
      console.log(response);
    } catch (e) {
      return thunkAPI.rejectWithValue({
        error: "비밀번호 변경 실패"
      })
    }
  }
);