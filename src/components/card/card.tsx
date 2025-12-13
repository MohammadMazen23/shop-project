import { useDispatch } from 'react-redux'
import './card.scss'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const Card = ({id,data}:{id:any,data:{name:string,role:string,image:string}}) => {

    const dispatch = useDispatch()

    useEffect(()=>{
       
    },[])

    return <div className='singleCard' id={id}>
       <div className='image'>
            {data.image ? <img src={data.image} /> : <FontAwesomeIcon icon={faUser}/>}
       </div>
       <div className='data'>
            <span className='name'>{data.name}</span>
            <span className='role'>{data.role ? data.role : "Team Member"}</span>
       </div>
    </div>
}

export default Card
