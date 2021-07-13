import React from 'react'
import home from './../images/home.jpg'
import video from './../images/video.png'
import users from './../images/users.png'
import market from './../images/market.png'

export const Menu = () => {
    return (
        <div className="menu">
            <ul>
                <li><img src= {home} width="30px" alt=""/></li>
                <li><img src= {video} width="30px" alt=""/></li>
                <li><img src= {users} width="30px" alt=""/></li>
                <li><img src= {market} width="30px" alt=""/></li>
                
            </ul>

        </div>
    )
}
