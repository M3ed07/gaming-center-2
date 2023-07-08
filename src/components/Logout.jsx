import React from 'react'
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import swal from 'sweetalert';
import { getAuth, signOut } from "firebase/auth";
import { Tooltip } from '@mui/material';
function Logout() {
    const Navigate = useNavigate();
    const handleLogout = ()=>{
        localStorage.removeItem('token');
        Navigate('/')
        swal({
            icon: "success",
            title: "Logged out Scuccessfully",
            text:`Log in now` 
          })
          const auth = getAuth();
          signOut(auth).then(() => {
          }).catch((error) => {
            console.log(error);
          });
    }
  return (
    <button className='LogoutStyle' onClick={handleLogout}> <Tooltip title="Log out" placement='right'> <LogoutIcon/> </Tooltip> <h4>Logout</h4></button>
  )
}

export default Logout