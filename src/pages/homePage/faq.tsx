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


const FAQ = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(()=>{
       sessionStorage.setItem("page","home");
       window.dispatchEvent(new Event("page-change"));

    },[])

    return <div className='faq'>
            <div className='title'>Frequently Asked Questions</div>
            <Row className='questionSection'>
                {faq.map((item,index) => <Col md="12" lg="6" className='questionItem'> <Accordion id={index.toString()}>
                    <AccordionSummary
                        expandIcon={<FontAwesomeIcon icon={faChevronUp} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        >
                        <Typography component="span">{item.q}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {item.a}
                        </AccordionDetails>
                    </Accordion>
                    </Col>
                )}
            </Row>
       </div> 
}

export default FAQ
