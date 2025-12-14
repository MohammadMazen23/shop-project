import './homePage.scss'
import { useEffect } from 'react'
import {Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faUser } from '@fortawesome/free-solid-svg-icons'
import { rev } from '../../static/rev'


const Reviews = () => {



    useEffect(()=>{
       sessionStorage.setItem("page","home");
       window.dispatchEvent(new Event("page-change"));

    },[])

    return <div className='reviews'>
            <div className='title'>Customer Reviews</div>
            <Row className='reviewSection'>
                {rev.map((item,index) => <Col sm="12" md="6" lg="4" xl="3" className='revItem' id={index.toString()}>
                    <div className='revItemContainer'>
                        <div className='image'>
                            {item.photo ? <img src={item.photo} alt=""/> : <FontAwesomeIcon icon={faUser}/>}                        
                        </div>
                        <div className='revData'>
                            <div className='top'>
                                <span className='name'>{item.name}</span>
                                <div className='stars'>
                                    <span className={`starItem ${item.stars >= 1 && "colorStar"}`}><FontAwesomeIcon icon={faStar} /></span>
                                    <span className={`starItem ${item.stars >= 2 && "colorStar"}`}><FontAwesomeIcon icon={faStar} /></span>
                                    <span className={`starItem ${item.stars >= 3 && "colorStar"}`}><FontAwesomeIcon icon={faStar} /></span>
                                    <span className={`starItem ${item.stars >= 4 && "colorStar"}`}><FontAwesomeIcon icon={faStar} /></span>
                                    <span className={`starItem ${item.stars >= 5 && "colorStar"}`}><FontAwesomeIcon icon={faStar} /></span>
                                </div>
                            </div>
                            
                            <span className='review'>{item.review}</span>
                            
                        </div>
                    </div>
                    </Col>
                )}
            </Row>
       </div> 
}

export default Reviews
