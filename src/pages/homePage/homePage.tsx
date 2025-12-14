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
                  A Complete Eczema Support Kit

               </div>
               <div className='content'>
                  Verdera is built as a simple 4-step routine that supports eczema-prone skin from daily care to flare moments. Our Topical Microbiome Spray delivers fast, lightweight hydration and barrier-support lipids to reduce dryness and sensitivity. The Anti-Itch Herbal Scalp Toner helps calm itch, redness, and flaking for reactive scalps and seborrheic dermatitis. For hot, localized patches, the SOS Probiotic Balm creates a protective, bandage-like layer to lock in moisture and restore comfort. Finally, the 24-Hour Probiotic Patch offers targeted, controlled support on specific areas to help soothe irritation and reinforce the barrier between treatments.
               </div>
            </Col>
         </Row>         
       </div>
       <FAQ />
       <Reviews />
    </div>
}

export default HomePage
