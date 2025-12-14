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
import homeImg from '../../home.png'
import Reviews from './rev'

const HomePage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(()=>{
       sessionStorage.setItem("page","home");
       window.dispatchEvent(new Event("page-change"));

    },[])

    return <div className='homePage'>
       <VideoSection />
       <div className='promo'>
         <Row>
            <Col lg="4" md="12" className='image'>
               <img src={homeImg} />
            </Col>
            <Col lg="8" md="12" className='info'>
               <div className='title'>
                  Unparallelled foundation matching technology
               </div>
               <div className='content'>
                  Our cutting-edge skin shade detection technology identifies each customer’s individual skin tone. Within seconds, customer can discover the perfect product fit from your foundation collection and try it on virtually.
               </div>
            </Col>
         </Row>         
       </div>
       <FAQ />
       <Reviews />
    </div>
}

export default HomePage
