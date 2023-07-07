import React from 'react'
import LineChart from './Apexchart/LineChart';
import SimpleDonut from './Apexchart/SimpleDonut';
import AdminTable from './Apexchart/AdminTable';
import './Apexchart/Dashboard.css'
function Dashboard() {

  return (
    <div className="Reservation-Container">
       <div className="top-section">
            <h1>Expand Creativity</h1>
            <p>Collaborate, Streamline, Create</p>
         </div>
      <div className='Cards'>
        <div className="card1">
          <div className='CardLine'></div>
        <div className='topSectionCard'>
        <h3>Visitors</h3>
          <img src={require('../Makers project/logo and icons/views.png')} width={60} height={60} alt="views" />
        </div>
          <h2>4000</h2>
          <p><img src={require('../Makers project/logo and icons/upArrow.png')} width={20} height={20} alt="arrow"/> <span>+6,5% </span> Since last week</p>
        </div>
        <div className="card1">
        <div className='CardLine'></div>
        <div className='topSectionCard'>
        <h3>Revenue</h3>
        <img src={require('../Makers project/logo and icons/increase.png')} width={60} height={60} alt="views" />
        </div>
        <h2>8453 $</h2>
        <p><img src={require('../Makers project/logo and icons/downarrow.png')} width={20} height={20} alt="arrow"/> <span style={{color:'#FE6387'}}>-7,5% </span> Since last week</p>
        </div>
        <div className="card1">
        <div className='CardLine'></div>
        <div className='topSectionCard'>
        <h3>Profit</h3>
        <img src={require('../Makers project/logo and icons/profit.png')} width={60} height={60} alt="views" />
        </div>
        <h2>80 %</h2>
        <p><img src={require('../Makers project/logo and icons/downarrow.png')} width={20} height={20} alt="arrow"/> <span style={{color:'#FE6387'}}>-2,5% </span> Since last week</p>
        </div>
        <div className="card1">
        <div className='CardLine'></div>
        <div className='topSectionCard'>
        <h3>Invoices</h3>
        <img src={require('../Makers project/logo and icons/bill.png')} width={60} height={60} alt="views" />
        </div>
        <h2>1900</h2>
        <p><img src={require('../Makers project/logo and icons/upArrow.png')} width={20} height={20} alt="arrow"/> <span>+9,5% </span> Since last week</p>
        </div>
      </div>
      <div className="charts">
      <div className='Donut'><SimpleDonut/></div>
      <div className='LineChart'><LineChart/></div>
      </div>
      <div><AdminTable/></div>
    </div>
  )
}

export default Dashboard;