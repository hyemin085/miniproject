import React, {useEffect} from "react";
import "./Header.scss"
import {history} from "../../redux/history";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/user/login";
import {loginCheck} from "../../redux/user/userSlice";
import {motion} from "framer-motion";
import logo from "../../image/logo.png";

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
            <motion.div className="Logo" onClick={() => {
              history.push("/")
            }}
                        initial={{y: -250}}
                        animate={{y: 0}}
                        transition={{delay: 0.2, type: 'spring', stiffness: 120}}

            ><img src={logo}/>
            </motion.div>

            <div className="navMenu">
            <motion.div className="nav" onClick={() => {
              history.push("/login")
            }}
                        whileHover={{scale: 1.3, originX: 0, color: '#c49f9b'}}
                        transition={{type: 'spring', stiffness: 300}}
            > login
            </motion.div>
          </div>
          </div>
        </div>
      </>

    )
  }

  return (
    <>
      <div className="header">
        <div className="headerLine">
          <motion.div className="headerLogo" onClick={() => {
            history.push("/")
          }}
               whileHover={{scale: 1.2}}
               transition={{duration: 0.3, yoyo: 6}}
          ><img src={logo}/>
          </motion.div>

          <div className="navMenu">
          <motion.div className="nav" onClick={() => {
            dispatch(logout())
          }} whileHover={{scale: 1.3, originX: 0, color: '#c49f9b'}}
                      transition={{type: 'spring', stiffness: 300}}>logout
          </motion.div>
          <motion.div className="nav" onClick={() => {
            history.push("/changename")
          }} whileHover={{scale: 1.3, originX: 0, color: '#c49f9b'}}
               transition={{type: 'spring', stiffness: 300}}>닉네임변경
          </motion.div>
          </div>



        </div>

      </div>
    </>

  )
}


export default Header;