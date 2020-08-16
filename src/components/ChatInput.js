import React, {useState} from 'react';
import '../styles/chatInput.css'
import Button from "@material-ui/core/Button";
import {useStateValue} from "../StateProvider";
import db from "../firebase";
import firebase from "firebase";

const ChatInput = ({channelName, channelId}) => {

    const [input, setInput] = useState('');
    const [inputURL, setInputURL] = useState('');
    const [{user}] = useStateValue();

    const sendMessage = (e) => {
        e.preventDefault();
        if (channelId) {
            db.collection('rooms').doc(channelId)
                .collection('messages').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL,
                image: inputURL
            })
        }

        setInput('')
        setInputURL('')

    }

    return (
        <div className="chatInput">
            <form onSubmit={sendMessage}>
                <input
                    className="chatInput__message"
                    placeholder={`Message #${channelName}`}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <input
                    className="chatInput__image"
                    placeholder={`Image URL`}
                    value={inputURL}
                    onChange={(e) => setInputURL(e.target.value)}
                />
                <Button
                    type="submit"
                >SEND</Button>
            </form>
        </div>
    );
};

export default ChatInput;
