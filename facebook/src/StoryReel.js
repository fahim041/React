import { Avatar } from '@material-ui/core';
import React from 'react';
import Story from './Story.js';
import "./StoryReel.css";

const StoryReel = () => {
    return (
        <div className="storyReel">
            <Story 
            image="https://static.toiimg.com/photo/72975551.cms"
            profileSrc="https://cdn2.vectorstock.com/i/1000x1000/38/21/male-face-avatar-logo-template-pictograph-vector-11333821.jpg"
            title="Fahim"
            />
            <Story 
            image="https://static.toiimg.com/photo/72975551.cms"
            profileSrc="https://cdn2.vectorstock.com/i/1000x1000/38/21/male-face-avatar-logo-template-pictograph-vector-11333821.jpg"
            title="Fahim"
            />
            <Story 
            image="https://static.toiimg.com/photo/72975551.cms"
            profileSrc="https://cdn2.vectorstock.com/i/1000x1000/38/21/male-face-avatar-logo-template-pictograph-vector-11333821.jpg"
            title="Fahim"
            />
            <Story 
            image="https://static.toiimg.com/photo/72975551.cmsU"
            profileSrc="https://cdn2.vectorstock.com/i/1000x1000/38/21/male-face-avatar-logo-template-pictograph-vector-11333821.jpg"
            title="Fahim"
            />
            <Story 
            image="https://static.toiimg.com/photo/72975551.cms"
            profileSrc="https://cdn2.vectorstock.com/i/1000x1000/38/21/male-face-avatar-logo-template-pictograph-vector-11333821.jpg"
            title="Fahim"
            />
        </div>
    )
};

export default StoryReel;