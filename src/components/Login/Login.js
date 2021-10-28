import React, {useState} from "react";
import {Link} from "react-router-dom";
import {login} from "../../redux/user/login";
import {useDispatch} from "react-redux";
import "./Login.scss"


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

          <button type="submit" onClick={LoginHandler}>로그인</button>
          <Link to="/singup">
          <button>회원가입</button>
          </Link>
        </form>
      </div>
      <div className="login"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FVFXFC%2Fbtri67BORMW%2Forx2R8yWs3HJLegGVjqYn0%2Fimg.jpg"/></div>
      </div>
      </>

  )
};

export default Login;