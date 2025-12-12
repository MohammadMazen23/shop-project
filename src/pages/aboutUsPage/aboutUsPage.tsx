import { useDispatch } from 'react-redux'
import './aboutUsPage.scss'
import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { teamData } from '../../static/teamData'
import Card from '../../components/card/card'


const AboutUsPage = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        sessionStorage.setItem("page","about");
        window.dispatchEvent(new Event("page-change"));

    },[])

    return <div className='aboutUs'>
       <div className='cardsSection'>
            <div className='header'>Our Team</div>
            <Row>
                {teamData.map((member,index) => <Col lg="4" md="6" sm="12" className='cardArea'>
                    <Card id={index} data={member} />
                </Col>)}
                
            </Row>
       </div>
    </div>
}

export default AboutUsPage
