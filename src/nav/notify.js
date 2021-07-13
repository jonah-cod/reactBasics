import React from 'react'
import notification from './../images/notification.png'
import messages from './../images/messages.png'
import user from './../images/p1.png'

export const Notify = () => {
    return (
        <div className="notify">
            <img src={user} width="30px" alt=""/>
            <img src={messages} width="30px" alt=""/>
            <img src={notification} width="30px" alt=""/>
            
        </div>
    )
}
