import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {pwdChange} from "../../redux/user/profile";



const ChangePassword = () => {
  const dispatch = useDispatch();
  const [changePwd, SetChangePwd] = useState();
  const [password, SetPassword] = useState();
  const [checkPwd, SetCheckPwd] = useState();

  const changeNameChange = (event) => {
    event.preventDefault();
    const accessToken = JSON.parse(token).accessToken;

    if (checkPwd !== changePwd) {
      window.alert("변경하려는 비밀번호가 일치하지 않습니다.");
    }
    dispatch(pwdChange({
      accessToken,
      changePwd,
      password,
    }),[]);
  }
  const token = localStorage.getItem("user");


  return (
    <>
      <input placeholder="현재비밀번호" type="password"
             value={password}
             onChange={(e) => SetPassword(e.target.value)}/>
      <input placeholder="변경될 비밀번호" type="password"
             value={changePwd}
             onChange={(e) => SetChangePwd(e.target.value)}/>
      <input placeholder="변경될 비밀번호 확인" type="password"
             value={checkPwd}
             onChange={(e) => SetCheckPwd(e.target.value)}/>
      <button onClick={changeNameChange}>확인</button>
    </>
  )
}

export default ChangePassword;