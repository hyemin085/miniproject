import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {singup} from "../../redux/user/singup";
import "./Singup.scss";
import {motion} from "framer-motion";
import {buttonVariants} from "../../common/animation";

const containerVariants = {
  hidden: {
    opacity: 1,
    x: '50vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }


  }
}


const Signup = () => {
  const dispatch = useDispatch();
  const [email, SetEmail] = useState();
  const [name, SetName] = useState();
  const [password, SetPassword] = useState();
  const [pwdCheck, SetPwdCheck] = useState();

  const SingUpHandler = () => {
    console.log(email, name, password, pwdCheck);
    if (password !== pwdCheck) {
      alert("비밀번호를 다시 확인해주세요")
      return;
    }
    dispatch(singup({
      email,
      name,
      password
    }), [dispatch])
  }
  return (
    <>
      <div className="signUpForm">

        <motion.div className="signUpForms"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible">
          <div className="rightSignUp">
            <h1 className="formMargin">Hello !</h1>
            <div className="signUpInfo">Enter your personal details and start journey with us</div>
            <Link to="/login">
              <motion.button className="noneColorBtn"
                             variants={buttonVariants}
                             whileHover="hover">SIGN IN
              </motion.button>
            </Link>
          </div>
        </motion.div>
        <div className="signUpForms">
          <h1 className="formMargin">회원가입</h1>
          <h5>Have a nice day !</h5>
          <form className="leftSignUp">

            <div>
              <input className="Input" value={email} placeholder="Email"
                     onChange={(e) => SetEmail(e.target.value)}/></div>
            <div><input value={name} className="Input" placeholder="Name"
                        onChange={(e) => SetName(e.target.value)}/></div>
            <div>
              <input value={password}
                     placeholder="Password"
                     className="Input"
                     type={"password"}
                     onChange={(e) => SetPassword(e.target.value)}/></div>
            <div>
              <input value={pwdCheck}
                     placeholder="Confirm password"
                     className="Input"
                     type={"password"}
                     onChange={(e) => SetPwdCheck(e.target.value)}/></div>

            <Link to="/login">
              <motion.button
                className="colorBtn"
                onClick={SingUpHandler}
                variants={buttonVariants}
                whileHover="hover"
              >회원가입</motion.button>
            </Link>
          </form>

        </div>
      </div>
    </>

  )
};

export default Signup;