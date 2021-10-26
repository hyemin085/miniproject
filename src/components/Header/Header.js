import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import "./Header.scss"
import {history} from "../../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/user/login";
import {loginCheck} from "../../redux/user/userSlice";

const Header = () => {
  const dispatch = useDispatch();

  const token = localStorage.getItem("user");
  const isLogin = useSelector((state) => state.user.isLogin)
  if (token) {
    dispatch(loginCheck(token));
  }

  if(!token){
  return(
    <>
      <div className="header">

          <div onClick={() => {
            history.push("/home")
          }}>Home</div>


        <div onClick={() => {
          history.push("/login")
        }}>로그인</div>

      </div>
    </>

  )
}
  return(
    <>
      <div className="header">

        <div onClick={() => {
          history.push("/home")
        }}>Home</div>


        <div onClick={() => {
          dispatch(logout())
        }}>로그아웃</div>

      </div>
    </>

  )
}


export default Header;