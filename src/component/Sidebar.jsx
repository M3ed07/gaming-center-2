import React from 'react'
import { SidebarData } from './SidebarData'
import { NavLink } from 'react-router-dom'
import NewLogo from "../Makers project/logo and icons/NewLogo.png"
import { Outlet } from 'react-router-dom';
import Logout from '../components/Logout';
function Sidebar({children}) {
  return (
    <div className='Container'>
      
    <div className='Sidebar'>
    <div className='Logo'>
        <img src={NewLogo} alt="Logo" height={60} width={60}/>
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