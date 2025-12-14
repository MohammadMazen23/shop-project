import './homePage.scss'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import myVideo from "../../videos/vid.mp4"


const VideoSection = () => {

    const navigate = useNavigate()


    useEffect(()=>{
       sessionStorage.setItem("page","home");
       window.dispatchEvent(new Event("page-change"));

    },[])

    return <div className='videoSection'>
        <div className='videoArea'>
            <video
            autoPlay
            muted
            loop
            playsInline
            className="bg-video"
            >
            <source src={myVideo} type="video/mp4" />
            </video>
        </div>
        <div className='mainIntro'>
            <div className='title'>
                All-New Microbiome Care!
            </div>
            <div className='subtitle'>
                A gentle, microbiome-supportive eczema kit designed to calm itch, support barrier repair, and help manage flare-ups for sensitive skin and scalp.            </div>
            <div className='learnMore' onClick={() => navigate('products')}>
                Learn More {'>'}
            </div>
        </div>

       </div> 
}

export default VideoSection
