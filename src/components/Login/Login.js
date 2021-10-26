import React, {useState} from "react";
import {Link} from "react-router-dom";
import {login} from "../../redux/user/login";
import {useDispatch} from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [email, SetEmail] = useState();
  const [password, SetPassWord] = useState();


  const LoginHandler = (event) => {
    event.preventDefault();
    console.log(email, password)
    if(email==="" || password===""){
      alert("빈칸");
    }
    dispatch(login({
      email,
      password
    }),[dispatch])
  }

  return(
    <>
      <div className="login">
        <h1>출석체크</h1>
        <form className="loginForm" >
          <h1>Logo</h1>
          <div>아이디
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
    </>

  )
};

export default Login;