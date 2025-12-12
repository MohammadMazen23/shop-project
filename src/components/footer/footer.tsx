import { useDispatch } from 'react-redux'
import './footer.scss'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'


const AppFooter = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
       
    },[])

    return <div className='footer'>
       <FontAwesomeIcon icon={faCopyright} /> 2025 NeuroEar. All rights reserved.
    </div>
}

export default AppFooter
