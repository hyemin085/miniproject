import React, {useState} from "react";
import {Link} from "react-router-dom";
import {login} from "../../redux/user/login";
import {useDispatch} from "react-redux";
import "./Login.scss"
import {motion} from "framer-motion";
import {buttonVariants} from "../../common/animation";
import singup from "../../image/singup.png";
import {Naver_login} from "./Naver_login";



const containerVariants = {
  hidden: {
    opacity: 1,
    x: '-50vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
}



const Login = () => {
  const dispatch = useDispatch();
  const [email, SetEmail] = useState();
  const [password, SetPassWord] = useState();


  const LoginHandler = (event) => {
    event.preventDefault();
    if (email === " " || password === " ") {
      window.alert("빈칸");
    }
    dispatch(login({
      email,
      password
    }), [dispatch])
  }



  return (
    <>
      <div className="login-Form">
        <div className="login">
          <h1 className="formMargin">출석체크하기</h1>
          <form className="loginForm">
            <div>
              <input className="Input" value={email} placeholder="Email"
                     onChange={(e) => SetEmail(e.target.value)}/></div>
            <div>
              <input className="Input"
                     placeholder="Password"
                     type={"password"}
                     value={password}
                     onChange={(e) => SetPassWord(e.target.value)}/></div>

            <motion.button type="submit" onClick={LoginHandler} className="colorBtn"
                           variants={buttonVariants}
                           whileHover="hover">LOGIN
            </motion.button>
            <br/>
            <div className="social_login">
            <Naver_login/>
            </div>
          </form>
        </div>
        <motion.div className="login"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible">
          <div className="rightLogin">
            <h1 className="formMargin"><img src={singup}/></h1>
            <div class="signUpInfo">스터디원에게 오늘 하루 공부의 시작을 <br/> 알리려면 지금바로 출석체크의 회원이 되어주세요 !</div>

            <Link to="/singup">
              <motion.button className="noneColorBtn" variants={buttonVariants}
                      whileHover="hover">SIGN UP</motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </>

  )
};

export default Login;