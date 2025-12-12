import { useDispatch } from 'react-redux'
import './faqPage.scss'
import React, { useEffect, useState } from 'react'


const FAQPage = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        sessionStorage.setItem("page","faq");
        window.dispatchEvent(new Event("page-change"));

    },[])

    return <div className='homePage'>
       
    </div>
}

export default FAQPage
