import React from 'react'
import "./css/chatbotStyle.css"
import telegram from "../../../assets/images/telegram.png"
import { Link } from 'react-router-dom'
// import './css/InputsStyles.css'";
/**
* @author
* @function chatBot
**/

const ChatBot = (props) => {
  return(
    <div className="chatbot-style">
        {/* <a href="https://web.telegram.org/k/" target="_blank"> */}
        <img className="chatbot-telegram" src={telegram} alt="telegram" />
        {/* </a> */}
        {/* <Link to="">
        <img className="chatbot-telegram" src={telegram} alt="telegram" />
        </Link> */}
            
        
        
    </div>
   )

 }

export default ChatBot;