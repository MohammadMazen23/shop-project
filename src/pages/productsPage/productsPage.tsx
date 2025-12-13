import { useDispatch } from 'react-redux'
import './productsPage.scss'
import React, { useEffect, useState } from 'react'
import { productsList } from '../../static/products'
import { Col, Row } from 'react-bootstrap'
import PopUp from '../../components/popup/popup'

const ProductsPage = () => {

    const dispatch = useDispatch()
    const [open,setOpen] = useState(false)
    const [data, setData] = useState({title:"",
        subTitle:"",
        description:"",
        coverImage:'',
        images:[]})

    const openPopup = (data:any) => {
        setData(data)
        setOpen(true)
    }
    const closePopup = () => {
        setOpen(false)
        setData({title:"",
        subTitle:"",
        description:"",
        coverImage:'',
        images:[]})
    }
    useEffect(()=>{
        sessionStorage.setItem("page","products");
        window.dispatchEvent(new Event("page-change"));

    },[])

    return <>
    <PopUp open={open} close={() => closePopup()}  data={data}/>
    <div className='productsPage'>
       {productsList.map((item,index) => <Row id={index.toString()} className='item'>
            <Col lg="8" md="12" className='itemData'>
                <div className='itemName'>
                    {item.title}
                </div>
                <div className='itemDesc'>
                    {item.subTitle}
                </div>
                <div className='more' onClick={() => openPopup(item)}>
                    Learn More {">"}
                </div>
            </Col>
            <Col lg="4" md="12" className='image'>
                <img src={item.coverImage} />
            </Col>
       </Row>)}
    </div>
    </>
}

export default ProductsPage
