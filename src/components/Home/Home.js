import React, {useEffect, useState} from "react";
import {addAtt, getAtt} from "../../redux/attendance/att";

import "./Home.scss"
import CheckCard from "../CheckCard/CheckCard";
import {useDispatch, useSelector} from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const [textInput, SetTextInput] = useState();
  const token = localStorage.getItem("user");

  const a = useSelector(state=>state);
  console.log(a);





  const HandlerTextInput = (event) => {
    event.preventDefault();
    const accessToken = JSON.parse(token).accessToken;
    dispatch(addAtt({
      accessToken,
      textInput,
    }), [dispatch]);
    SetTextInput("");
  }


  useEffect(() => {
    dispatch(getAtt());
  }, [dispatch]);
  const atts = useSelector((state) => state.att.info);
  const name = token ? JSON.parse(token).name : "로그인하세요";





  if (!token) {
    return (
      <>
        <div className="plzLogin">{name}</div>

    <div className="home">
      <div className="checkForm">
        {atts.map((att) => (
          <CheckCard  date={att.date} user={att.users}/>
        ))}
      </div>
    </div>
      </>
    )
  }
    if(token){
    return (
      <>

          <div>{name}님 어서오세요</div>
        <div className="attInput">
        <input className="attText" maxLength="10" type="text" value={textInput}
               onChange={(e)=>SetTextInput(e.target.value)}/>
          <button className="attendance" onClick={HandlerTextInput}>출석하기</button>
        </div>
        <div className="home">
          <div className="checkForm">
            {atts.map((att) => (
              <CheckCard date={att.date} user={att.users}/>
            ))}
          </div>
        </div>
          </>
    )}
};

export default Home;