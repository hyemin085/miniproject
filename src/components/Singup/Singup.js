import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {singup} from "../../redux/user/singup";

const Signup = () => {
  const dispatch = useDispatch();
  const [email, SetEmail] = useState();
  const [name, SetName] = useState();
  const [password, SetPassword] = useState();
  const [pwdCheck, SetPwdCheck] = useState();

  const SingUpHandler = () => {
    console.log(email, name, password, pwdCheck);
    if(password!==pwdCheck){
      alert("비밀번호를 다시 확인해주세요")
      return;
    }
    dispatch(singup({
      email,
      name,
      password
    }),[dispatch])
  }
  return(
    <>
      <div className="singUp">
        <h1>회원가입</h1>
        <form className="loginForm">
          <h1>회원가입</h1>
          <div>이메일
            <input value={email}
                   onChange={(e)=> SetEmail(e.target.value)}/></div>
          <div>이름<input value={name}
                        onChange={(e)=>SetName(e.target.value)}/></div>
          <div>패스워드
            <input value={password}
                   type={"password"}
                   onChange={(e)=>SetPassword(e.target.value)} /></div>
          <div>패스워드확인
            <input value={pwdCheck}
                   type={"password"}
                   onChange={(e)=>SetPwdCheck(e.target.value)}/></div>

          <Link to ="/login">
          <button onClick={SingUpHandler}>회원가입</button>
          </Link>
        </form>

      </div>
    </>

  )
};

export default Signup;