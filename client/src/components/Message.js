import React from 'react'
import "./message.css";


const Message = ({ user, message, classs }) => {
    if (user) {
        return (
            <div className={`messageBox ${classs}`}  >
                {`${message}`}
            </div>
        )
    }
    else {

        return (
            <div className={`messageBox ${classs}`}>
                {`${message}`}
            </div>
        )
    }
}

export default Message
