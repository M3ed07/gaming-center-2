import React from 'react'
import { SidebarData } from './SidebarData'
import { NavLink } from 'react-router-dom'
import logo from "../Makers project/logo and icons/logo.png"
import { Outlet } from 'react-router-dom';
import Logout from '../components/Logout';
function Sidebar({children}) {
  return (
    <div className='Container'>
      
    <div className='Sidebar'>
    <div className='Logo'>
        <img src={logo} alt="Logo" height={50} width={50}/>
        <p>Game center</p>
      </div>
        {SidebarData.map((item,index)=>(
            <NavLink to={item.path} key={index} className={"link"}>
                <div className='icon'>{item.icon}</div>
                <h4 className='title'>{item.title}</h4>
            </NavLink>
        )
        
    )} 
    <center>
    <Logout/>
    </center>
    </div>
    <main>{children}<Outlet/></main>
    </div>
  )
}

export default Sidebar