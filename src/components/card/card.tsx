import { useDispatch } from 'react-redux'
import './card.scss'
import React, { useEffect, useState } from 'react'


const Card = ({id,data}:{id:any,data:{name:string,role:string,image:string}}) => {

    const dispatch = useDispatch()

    useEffect(()=>{
       
    },[])

    return <div className='singleCard' id={id}>
       <div className='image'>
            <img src={data.image} />
       </div>
       <div className='data'>
            <span className='name'>{data.name}</span>
            <span className='role'>{data.role}</span>
       </div>
    </div>
}

export default Card
