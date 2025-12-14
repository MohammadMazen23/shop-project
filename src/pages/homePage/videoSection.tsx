import { useDispatch } from 'react-redux'
import './homePage.scss'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Col, Row } from 'react-bootstrap'
import { faq } from '../../static/faq'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import myVideo from "../../videos/vid.mp4"


const VideoSection = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(()=>{
       sessionStorage.setItem("page","home");
       window.dispatchEvent(new Event("page-change"));

    },[])

    return <div className='videoSection'>
        <div className='videoArea'>
            <video
            autoPlay
            muted
            loop
            playsInline
            className="bg-video"
            >
            <source src={myVideo} type="video/mp4" />
            </video>
        </div>
        <div className='mainIntro'>
            <div className='title'>
                All New Technology!
            </div>
            <div className='subtitle'>
                A non-invasive brain–computer interface (BCI) device designed to help patients communicate using silent-speech decoding
            </div>
            <div className='learnMore' onClick={() => navigate('products')}>
                Learn More {'>'}
            </div>
        </div>

       </div> 
}

export default VideoSection
