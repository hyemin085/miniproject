import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {nicknameChange} from "../../redux/user/profile";


const ChangeName = () => {
  const dispatch = useDispatch();
  const [changeName, SetChangeName] = useState();
  const [checkPwd, SetCheckPwd] = useState();

  const changeNameChange = (event) => {
    event.preventDefault();
    const accessToken = JSON.parse(token).accessToken;
    console.log(accessToken);
    dispatch(nicknameChange({
      accessToken,
      changeName,
      checkPwd,
    }),[]);
  }
  const token = localStorage.getItem("user");


  return (
    <>
      <input placeholder="닉네임변경" type="text"
             value={changeName}
             onChange={(e) => SetChangeName(e.target.value)}/>
      <input placeholder="비밀번호확인" type="password"
             value={checkPwd}
             onChange={(e) => SetCheckPwd(e.target.value)}/>
      <button onClick={changeNameChange}>확인</button>
    </>
  )
}

export default ChangeName;