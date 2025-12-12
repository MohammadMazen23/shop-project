import { useDispatch } from 'react-redux'
import './header.scss'
import React, { useEffect, useState } from 'react'
import { Drawer } from "@mui/material";
import { staticPages } from '../../static/static.page';
import { useNavigate } from 'react-router-dom';



const AppHeader = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [currentPage,setCurrentPage] = useState(sessionStorage.getItem("page"));

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }, []); 

    useEffect(() => {
         const updatePage = () => {
            setCurrentPage(sessionStorage.getItem("page"));
            };
            updatePage();
            window.addEventListener("page-change", updatePage);
            return () => window.removeEventListener("page-change", updatePage);
    },[])

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const controlsList = () => (
    <div className="controls">
        <div className="user">
            
        </div>
    </div>
    )

    const menuList = () => (<div className="menu">
        {staticPages.map((page,index) => 
            <div key={index} className={`menuItem ${page.name === currentPage && "activePage" }`} 
            onClick={() => {
                navigate(page.name === "home" ? "/" : page.name)
                setOpen(false)
                }}>
                {page.title}
            </div> 
        )}
    </div>)

    return <div className='appHeader'>
       <div className="logoArea">
            {/* <img  onClick={() => navigate("/")}/> */}        
        </div>
        {windowWidth < 850 ? <> 
       
            <span className={`menu-icon ${open ? 'open' : ''}`} onClick={toggleDrawer(!open)}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </span>
            <Drawer open={open} anchor="top" onClose={toggleDrawer(false)} className={`drawerComponent`}>
                {menuList()}    
                {controlsList()}
            </Drawer></>
            : <>
            {menuList()}
            {controlsList()}
       </>} 

    </div>
}

export default AppHeader
