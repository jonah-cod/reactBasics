import React from 'react'
import { Brand } from './brand'
import { Menu } from './menu'
import { Notify } from './notify'
import './../styles.css'
export const Nav = () => {
    return (
        <div className = "nav">
            <Brand/>
            <Menu/>
            <Notify/>
        </div>
    )
}
