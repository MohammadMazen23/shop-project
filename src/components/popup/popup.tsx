import { useDispatch } from 'react-redux'
import './popup.scss'
import React, { useEffect, useRef, useState } from 'react'
import { Col, Row } from 'react-bootstrap';

interface IProps {
  open: boolean;
  close: () => void;
  data: {
    title: string;
    subTitle: string;
    description: string;
    coverImage?: any;
    images: string[];
    price?: string;
  }
}

const PopUp = ({ open, close , data }: IProps) => {
  const dispatch = useDispatch()
  const boxRef = useRef<HTMLDivElement | null>(null)

  const [activeImage,setActiveImage] = useState("")

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        close()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [close])

  useEffect(() => {setActiveImage(data.images[0])} , [data])

  return open ? (
    <div className="popUpContainer">
      <div className="popUpWindow" ref={boxRef}>
        <Row>
            <Col xl="5" lg="12" className="imageContainer">
                <div className='mainImage'>
                    <img src={activeImage} />
                </div>
                <div className='smallImages'>
                    {data.images ? data.images.map((item, index) => <img src={item} id={index.toString()} className={item === activeImage ? "activeImage" : ""} onClick={() => setActiveImage(item)}/>)  : <></>}
                </div>
            </Col>
            <Col xl="7" lg="12" className='dataContainer'>
                <div className='title'>
                    {data.title}
                </div>
                {/* <div className='subtitle'>
                    {data.subTitle}
                </div> */}
                <div className='desc'>
                    {data.description}
                </div>
            </Col>
        </Row>
      </div>
    </div>
  ) : null
}

export default PopUp
