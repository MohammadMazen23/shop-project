import { useDispatch } from 'react-redux'
import './productsPage.scss'
import React, { useEffect, useState } from 'react'


const ProductsPage = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        sessionStorage.setItem("page","products");
        window.dispatchEvent(new Event("page-change"));

    },[])

    return <div className='homePage'>
       
    </div>
}

export default ProductsPage
