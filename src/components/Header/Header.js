import React, {useEffect} from "react";
import "./Header.scss"
import {history} from "../../redux/history";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/user/login";
import {loginCheck} from "../../redux/user/userSlice";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const token = localStorage.getItem("user");
  const isLogin = useSelector((state) => state.user.isLogin)

  if (token) {
    dispatch(loginCheck(token));
  } else {
    dispatch(logout());
  }

  if (!token) {
    return (
      <>
        <div className="header">
          <div className="headerLine">
            <div className="present" onClick={() => {
              history.push("/")
            }}>Present
            </div>


            <motion.div className="nav" onClick={() => {
              history.push("/login")
            }}
                        whileHover={{scale: 1.3, originX: 0, color: '#c49f9b'}}
                        transition={{type: 'spring', stiffness: 300}}
            > login
            </motion.div>
          </div>
        </div>
      </>

    )
  }

  return (
    <>
      <div className="header">
        <div className="headerLine">
          <div className="present" onClick={() => {
            history.push("/")
          }}>Present
          </div>


          <motion.div className="nav" onClick={() => {
            dispatch(logout())
          }}  whileHover={{scale: 1.3, originX: 0, color: '#c49f9b'}}
                      transition={{type: 'spring', stiffness: 300}}>logout
          </motion.div>

          <div className="nav" onClick={() => {
            history.push("/changename")
          }}>비밀번호 변경</div>

        </div>

      </div>
    </>

  )
}


export default Header;