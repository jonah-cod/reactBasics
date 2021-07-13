import React from 'react'
import fb from './../images/fb.png'
import './../styles.css'
export const Brand = () => {
    return (
        <div className="brand">
            <img src = {fb} alt = "" width="75px"/>
            <input type="text" placeholder="Search"/>
        </div>
    )
}
