import React, {useEffect, useState} from "react";
import "./Home.scss"
import {useDispatch, useSelector} from "react-redux";
import {motion} from "framer-motion";

import {addAtt, getAtt} from "../../redux/attendance/att";
import CheckCard from "../CheckCard/CheckCard";
import Pagination from "react-js-pagination";
import jwt_decode from "jwt-decode";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '50vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    }
  }
}

if(window.location.href.includes('token')===true){
  const accessToken = window.location.href.split("=")[1]
  const naver_user = jwt_decode(accessToken);
  const name = naver_user.name;

  localStorage.setItem("user", JSON.stringify({accessToken, name}));
};




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

  const Items = useSelector(state =>state.att.totalItems);



  const atts = useSelector((state) => state.att.info);
  const name = token ? JSON.parse(token).name : "";

  const handlePageChange = (page) => {
    setPage(page);
    dispatch(getAtt({
      page
    }))
  };

  if (!token) {
    return (
      <>
        <motion.div className="homeColor"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible">
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
  totalItemsCount={Items}
  pageRangeDisplayed={2}
  prevPageText={"‹"} nextPageText={"›"}
  onChange={handlePageChange}
  />
        </motion.div>
      </>
    )
  }
    if(token){
    return (
      <>
        <motion.div className="homeColor"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible">
          <div className="welcomeName">{name}님 어서오세요</div>
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
          totalItemsCount={Items}
          pageRangeDisplayed={2}
          prevPageText={"‹"} nextPageText={"›"}
          onChange={handlePageChange}
        />
        </motion.div>
          </>
    )}
};

export default Home;