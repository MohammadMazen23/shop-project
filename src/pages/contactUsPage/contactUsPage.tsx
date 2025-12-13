import { useDispatch } from 'react-redux'
import './contactUsPage.scss'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Form, Formik, FormikHelpers, FormikValues } from 'formik'
import { Button, TextField } from '@mui/material'
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationCrosshairs, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons'
import Map from '../../map.jpg';

const ContactUsPage = () => {

    const dispatch = useDispatch()

    const containerStyle = {
        width: "100%",
        height: "420px"
    };

    const center = {
        lat: 40.7128,
        lng: -74.0060
    };

    const [message,setMessage] = useState({
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        message:''
    })

    useEffect(()=>{
        sessionStorage.setItem("page","contact");
        window.dispatchEvent(new Event("page-change"));

    },[])

    return <div className='contactUs'>
        <Row>
            <Col sm="12" lg="6" className='form'>
                <Formik initialValues={message} onSubmit={function (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>): void | Promise<any> {
                    throw new Error('Function not implemented.')
                } }>
                    <Form className='formInputs'>
                        <div className='title'>
                            Have an inquiry? Don't hesitate to reach out.
                        </div>
                        <Row>
                            <Col md='6'>
                                <TextField id="outlined-basic" name='firstnName' label="First Name" variant="outlined" onChange={e => setMessage({...message, firstName:e.target.value})}/>
                            </Col>
                            <Col md='6'>
                                <TextField id="outlined-basic" name='lastName' label="Last Name" variant="outlined" onChange={e => setMessage({...message, lastName:e.target.value})}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md='12'>
                                <TextField id="outlined-basic" name='email' label="Email" variant="outlined" onChange={e => setMessage({...message, email:e.target.value})}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md='12'>
                                <TextField id="outlined-basic" name='phone' label="Phone" variant="outlined" onChange={e => setMessage({...message, phone:e.target.value})}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md='12'>
                                <TextField id="outlined-basic" name='message' label="Message" variant="outlined" multiline rows={6} onChange={e => setMessage({...message, message:e.target.value})}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md='12'>
                                <Button variant="contained" className="submit" type='submit'>Send</Button>
                            </Col>
                        </Row>


                        


                        {/* <label htmlFor="lastName">Last Name</label>
                        <Field id="lastName" name="lastName" placeholder="Doe" />

                        <label htmlFor="email">Email</label>
                        <Field
                        id="email"
                        name="email"
                        placeholder="jane@acme.com"
                        type="email"
                        /> */}

                        {/* <button type="submit">Submit</button> */}
                    </Form>
                </Formik>
            </Col>
            <Col sm="12" lg="6" className='map'>
                <Row>
                    <Col xl='12'>
                        {/* <LoadScript googleMapsApiKey="YOUR_API_KEY">
                            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
                                <Marker position={center} />
                            </GoogleMap>
                        </LoadScript> */}
                        <img 
                            className='mapImage' 
                            src={Map} 
                            onClick={() => window.open("https://maps.app.goo.gl/Yq65FuALhbvkgrCn9", "_blank")}
                        />
                    </Col>
                    <Col xl="12">
                        <Row className='contactInfo'>
                            <Col xl='12'>
                                <FontAwesomeIcon icon={faLocationCrosshairs} /> Hamidiye, 34408 Kağıthane/İstanbul
                            </Col>
                            <Col sm='12' lg="6">
                                <FontAwesomeIcon icon={faPhone} /> <span onClick={() => window.location.href = "tel:+90542342214"}>+90542342214</span>
                            </Col>
                            <Col sm='12' lg="6">
                                <FontAwesomeIcon icon={faMessage} /> <span onClick={() => window.location.href = "mailto:support@neuroear.com"}>support@neuroear.com</span>
                            </Col>
                        </Row>
                    
                    </Col>
                </Row>
            </Col>
        </Row>
       
    </div>
}

export default ContactUsPage
