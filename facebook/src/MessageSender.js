import { Avatar } from '@material-ui/core';
import React, {useState} from 'react';
import "./MessageSender.css";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticoIcon from "@material-ui/icons/InsertEmoticon";

const MessageSender = () => {
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form>
                <input 
                    value={input}
                    onChange={(e)=> setInput(e.target.value)} 
                    placeholder={`What's on yout mind`} className="messageSender__input" />
                <input
                    value={imageUrl}
                    onChange={(e)=>setInput(e.target.value)}
                    placeholder="image URL" className="message" />
                <button onClick={handleSubmit} type="submit" >Submit</button>
                </form>
                
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color:"red"}} />
                    <h3>Live video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color:"green"}} />
                    <h3>Live video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticoIcon style={{color:"orange"}} />
                    <h3>Live video</h3>
                </div>
            </div>
        </div>
    ) 
}

export default MessageSender;