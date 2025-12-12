import { useDispatch } from 'react-redux'
import './notFoundPage.scss'
import React, { useEffect, useState } from 'react'


const NotFoundPage = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        sessionStorage.setItem("page","notFound");
        window.dispatchEvent(new Event("page-change"));


    },[])

    return <div className='homePage'>
       
    </div>
}

export default NotFoundPage
