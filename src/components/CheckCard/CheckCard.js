import React, {useEffect} from "react";

import "./CheckCard.scss"


const CheckCard = ({date, user}) => {

  return(
    <>

     <div className="checkCard">
       <div class="cardText">{date}</div>
       {user.map((user) => (
         <>
         <div className="cardText">{user.name} : {user.message} <span className="time">⏰{user.time}</span></div>
           {/*<div className="cardText"></div>*/}
         </>
       ))}

     </div>
    </>

  )
};

export default CheckCard;