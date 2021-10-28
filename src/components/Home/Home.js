import React, {useEffect, useState} from "react";
import "./Home.scss"
import {useDispatch, useSelector} from "react-redux";


import {addAtt, getAtt} from "../../redux/attendance/att";
import CheckCard from "../CheckCard/CheckCard";
import Pagination from "react-js-pagination";

const Home = () => {
  const dispatch = useDispatch();
  const [textInput, SetTextInput] = useState();

  const [page, setPage] = useState(1);

  const token = localStorage.getItem("user");

  const HandlerTextInput = (event) => {
    event.preventDefault();
    const accessToken = JSON.parse(token).accessToken;

    dispatch(addAtt({
      accessToken,
      textInput,
    }), []);
    SetTextInput("");
  }

  useEffect(() => {
    dispatch(getAtt({page}));
  }, []);



  const atts = useSelector((state) => state.att.info);
  const name = token ? JSON.parse(token).name : "로그인하세요";

  const handlePageChange = (page) => {
    setPage(page);
    dispatch(getAtt({
      page
    }))
  };

  if (!token) {
    return (
      <>
        <div className="plzLogin">{name}</div>

    <div className="home">
      <div className="checkForm">
        {atts.map((att) => (
          <CheckCard  date={att.date} user={att.users} />
        ))}
      </div>
    </div>
<Pagination
  activePage={page}
  itemsCountPerPage={8}
  totalItemsCount={20}
  pageRangeDisplayed={8}
  prevPageText={"‹"} nextPageText={"›"}
  onChange={handlePageChange}
  />
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
        <Pagination
          activePage={page}
          itemsCountPerPage={8}
          totalItemsCount={20}
          pageRangeDisplayed={8}
          prevPageText={"‹"} nextPageText={"›"}
          onChange={handlePageChange}
        />
          </>
    )}
};

export default Home;