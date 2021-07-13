import React from 'react'
import user from './images/p1.png'

export const Whatsonyourmind = () => {
    return (
        <div className="onyourmind">
            <div className = "usertype">
                <img src={user} width="30px" alt=""  />
                <input type="text" placeholder="What's on your mind,  ?"/>
            </div>
            <hr/>
            <div className="activity">
                <a href="#">Live Video</a>
                <a href="#">Photo/Video</a>
                <a href="#">Feeling/Activity</a>
                
            </div>
        </div>
    )
}
