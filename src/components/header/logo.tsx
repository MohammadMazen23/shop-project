import { useDispatch } from 'react-redux'
import './header.scss'
import logo from '../../logo.png'
import React, { useEffect, useState } from 'react'


const AppLogo = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
       
    },[])

    return <div className='logo'>
        <div className='image'>
            <img src={logo} />
        </div>
        <div className='name'>
            NeuroEar
        </div>
    </div>
}

export default AppLogo
