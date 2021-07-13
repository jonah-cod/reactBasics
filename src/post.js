import React from 'react'
import guest from './images/user.jpg'
import user from './images/p1.png'
import userpost from './images/beefBurger.jpg'

export const Post = () => {
    return (
        <div className="post">
            <div >
                <img src={user} width="30px" alt=""/>
                <h2>John Doe</h2>
                <small>Burgers are yummy</small>
            </div>
            <img src={userpost} width="390px" height="250px" alt=""/>
            <div>
                <a href="">Like</a>
                <a href="">Comment</a>
                <a href="">Share</a>
            </div>
            <div className = "guestcomment">
                <img src={guest} width="30px" alt=""  />
                <input type="text" placeholder="Write a comment"/>
            </div>
        </div>
    )
}
