import React, {useState} from "react";
import {Link} from "react-router-dom";
import {login} from "../../redux/user/login";
import {useDispatch} from "react-redux";
import "./Login.scss"
import escape from "../../image/escape.png"

const Login = () => {
  const dispatch = useDispatch();
  const [email, SetEmail] = useState();
  const [password, SetPassWord] = useState();


  const LoginHandler = (event) => {
    event.preventDefault();
    if(email==="" || password===""){
      alert("빈칸");
    }
    dispatch(login({
      email,
      password
    }),[dispatch])
    SetEmail("");
    SetPassWord("");
  }

  return(
    <>
      <div className="login-Form">
      <div className="login">
        <h1>출석체크</h1>
        <form className="loginForm" >
          <h1>Logo</h1>
          <div>이메일
            <input value={email}
                   onChange={(e)=>SetEmail(e.target.value)}/></div>
          <div>패스워드
            <input
              type={"password"}
              value={password}
              onChange={(e)=>SetPassWord(e.target.value)}/></div>

          <button type="submit" onClick={LoginHandler} className="buttons">로그인</button>

        </form>
      </div>
      <div className="login">
        <div className="leftLogin">
          <h1>Welcome Back!</h1>
          <div class = "signUpInfo">To keep connected with us please login with your personal info.</div>

          <Link to="/singup">
            <button className="singUpBtn" >SIGN UP</button>
          </Link>
        </div>
      </div>
      </div>
      </>

  )
};

export default Login;