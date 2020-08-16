import React from 'react';
import '../styles/message.css'

const Message = ({message, timestamp, user, image, userImage}) => {
    return (
        <div className="message">
            <img src={userImage} alt={user}/>
            <div className="message__info">
                <h4>
                    {user}
                    <span className="message__timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>
                <p>{message}</p>
                {image &&
                <img src={image} alt={user}/>
                }
            </div>
        </div>
    );
};

export default Message;
