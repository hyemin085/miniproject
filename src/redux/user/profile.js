import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../common/apis/Api";


export const nicknameChange = createAsyncThunk(
  "user/nicknameChange",
  async({changeName, checkPwd, accessToken}, thunkAPI) => {
    try{
      const response = await Api({
        url: "/user/changeProfile",
        method: "PUT",
        data: {
          nickname: changeName,
          password: checkPwd,
          accessToken: accessToken,
        },
        header: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }
);