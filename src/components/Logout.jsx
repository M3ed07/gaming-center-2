import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import swal from 'sweetalert';
import { getAuth, signOut } from 'firebase/auth';

function Logout() {
  const Navigate = useNavigate();

  const handleLogout = () => {
    swal({
      title: 'Are you sure?',
      text: 'You will be logged out',
      icon: 'warning',
      buttons: {
        cancel: {
          text: 'Cancel',
          className: 'cancel-button',
          value: false,
          visible: true,
        },
        confirm: {
          text: 'Logout',
          className: 'logout-button',
          value: true,
          visible: true,
        },
      },
      dangerMode: true,
    }).then((confirmed) => {
      if (confirmed) {
        localStorage.removeItem('token');
        Navigate('/login');
        const auth = getAuth();
        signOut(auth)
          .then(() => {
            swal({
              icon: 'success',
              title: 'Logged out successfully',
              text: 'Log in now',
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  return (
    <button className='LogoutStyle' onClick={handleLogout}>
      <LogoutIcon /> <h4>Logout</h4>
    </button>
  );
}

export default Logout;
