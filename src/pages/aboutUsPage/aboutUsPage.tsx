import './aboutUsPage.scss'
import { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { teamData } from '../../static/teamData'
import Card from '../../components/card/card'
import team from "../../office.png"

const AboutUsPage = () => {


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
                    A microbiome-focused dermo-cosmetic company developing barrier-supportive skincare for eczema-prone and reactive skin. Our products combine skin-friendly actives, calming botanicals, and probiotic-inspired technology to reduce irritation and help maintain a healthier skin environment.                </div>
            </div>
       </div> 
       <Row className='mission'>
            <Col lg='8' md="12" className='info'>
                <div className='title'>
                    Our Mission
                </div>
                <div className='data'>
                    Our mission is to redefine care for eczema-prone and highly sensitive skin through safe, effective, and truly personalized solutions designed specifically for its unique needs. Rather than adapting formulas from general skincare, we focus exclusively on strengthening the skin barrier and supporting the delicate balance of the skin microbiome, which plays a critical role in skin resilience, comfort, and long-term health.
                    <br/><br/>
                    We are committed to helping individuals manage flare-ups while also supporting lasting relief and everyday comfort. Through gentle, non-irritating, probiotic-based and herbal formulations, we work to calm itching, reduce inflammation, and protect the skin and scalp from recurring irritation. Our approach supports skin health from both the outside and the inside, recognizing that sustainable relief comes from restoring balance, not masking symptoms.
                    <br/><br/>
                    By combining targeted topical solutions with microbiome-supporting innovations, we strive to empower people living with eczema to feel more confident in their skin. Our mission is not only to soothe and repair, but to create a new standard of care that prioritizes safety, long-term well-being, and improved quality of life for those with sensitive, reactive skin.
                </div>
            </Col>
            <Col lg='4' md="12" className='image'>
                <img src={team} alt=""/>
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
