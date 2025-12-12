import { useDispatch } from 'react-redux'
import './homePage.scss'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Col, Row } from 'react-bootstrap'
import { teamData } from '../../static/teamData'
import Card from '../../components/card/card'
import { faq } from '../../static/faq'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import FAQ from './faq'
import VideoSection from './videoSection'


const HomePage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(()=>{
       sessionStorage.setItem("page","home");
       window.dispatchEvent(new Event("page-change"));

    },[])

    return <div className='homePage'>
       <VideoSection />
       <FAQ />
    </div>
}

export default HomePage
