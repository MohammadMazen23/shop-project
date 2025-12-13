import { useDispatch } from 'react-redux'
import './aboutUsPage.scss'
import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { teamData } from '../../static/teamData'
import Card from '../../components/card/card'
import team from "../../office.png"

const AboutUsPage = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        sessionStorage.setItem("page","about");
        window.dispatchEvent(new Event("page-change"));

    },[])

    return <div className='aboutUs'>
       <div className='companyOverview'>
            {/* <img src={officeImg} /> */}
            <div className='about'>
                <div className='title'>
                    Who Are We?
                </div>
                <div className='subtitle'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            </div>
       </div> 
       <Row className='mission'>
            <Col lg='8' md="12" className='info'>
                <div className='title'>
                    Our Mission
                </div>
                <div className='data'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            </Col>
            <Col lg='4' md="12" className='image'>
                <img src={team} />
            </Col>
       </Row>
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
