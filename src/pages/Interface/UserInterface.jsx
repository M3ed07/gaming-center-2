import React from 'react'
import { NavLink } from 'react-router-dom'
import './UserInterface.css'
import { InterfaceNavData } from './InterfaceNavData'
import GetAppIcon from '@mui/icons-material/GetApp';
import { useNavigate } from 'react-router-dom';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
function UserInterface() {
  const Navigate = useNavigate();
  return (
    <div className='InterfaceContainer'>
      <section className="FirstSection">
        <div className="userInterfaceNav">
        <div className="ProjectName">
        <img src={require('../../Makers project/logo and icons/blackops.png')} width={40} height={40} alt="Logo" />
        <h2>Game Center</h2>
        </div>
        <div className='Navbar'>
        {InterfaceNavData.map((item,index)=>(
            <NavLink to={item.path} key={index} className={"Nav"}>
                <h2 className='interfacetitle'>{item.title}</h2>
            </NavLink>
        )
    )}
        </div>
        <div><button onClick={()=>Navigate('/login')} className='NavButton'>Sign in</button></div>
        </div>

        <div className='FisrtSectionMiddle'>
          <img className="FisrtSectionMiddleimg" src={require('../../Makers project/Images and ill/suke.png')} alt="FirstSection" />
        <div className='FisrtSectionMiddleTypography'>
        <h1>Enjoy Your Time Fully Without<br/>Any Problems</h1>
        <p>An application specialized in managing network<br/>lounges to enjoy the most fun while playing your<br/>favorite game …</p>
        <div className='DownloadButtons'>
        <button id='DownloadButton'><GetAppIcon/> Download For Mac</button>
        <button id='BrowserButton'>Continue With Your Browser</button>
        </div>
        </div>
        </div>
      </section>

      <section className='SecondSection'>
        <div className='FisrtSectionMiddleTypography' id='secondTypography'>
        <h1>Get a discount code For<br/>more fun …</h1>
        <p>Get more prizes and powerful discounts<br/>when you use the application And use<br/>it in your reservations for more savings<br/>and enjoyment</p>
        </div>
        <div className='DiscountPara'>
          <div className='DiscountParaLeftHalf'>
            <div className='Attributes'>
            <div className='DiscountParaAttributes' id='Attributes1'>
              <div className='AttributeCircles'>
                <div className="SmallCircles"></div>
                <div className="BigCircles"></div>
                <div className="SmallCircles"></div>
                </div>
              <div className='AttributeLine'></div>
              <h4>How We Work</h4></div>
            <div className='DiscountParaAttributes' id='Attributes2'>
              <div className='AttributeCircles'>
                
                <div className="BigCircles" id='Big1'></div>
                <div className="SmallCircles" id='Small1'></div>
                <div className="SmallCircles" id='Small1'></div>
                </div>
              <div className='AttributeLine'></div>
              <h4>Reserve Seat</h4></div>
            <div className='DiscountParaAttributes' id='Attributes3'>
              <h3 style={{margin:'2.8px' ,fontWeight:'bold',opacity:'80%'}}>%</h3>
              <div className='AttributeLine'></div>
              <h4 style={{opacity:'80%'}}>Discount</h4></div>
            <div className='DiscountParaAttributes' id='Attributes1'>
              <div className='AttributeCircles'>
                <div className="SmallCircles" id='Small2'></div>
                <div className="SmallCircles" id='Small2'></div>
                <div className="BigCircles" id='Big2'></div>
                </div>
              <div className='AttributeLine'></div>
              <h4>Tournaments</h4></div>
          </div>
          <center><img src={require('../../Makers project/logo and icons/blackops.png')} style={{opacity:'80%'}} width={60} height={60} alt="Logo" /></center>
          </div>
          <div className='DiscountParaRightHalf'>
            <h3>Discount Code</h3>
            <div className='InsideDiscounts'>
              <ContentCopyIcon/>
              <div className='AttributeLine' id='RightLine'></div>
              <h4 style={{opacity:'80%' , fontSize:'12px'}}>RS20G</h4>
              <div className='AttributeLine' id='RightLine'></div>
              <h4 style={{opacity:'80%' , fontSize:'12px' , fontWeight:'500'}}>50%</h4>
              </div>
              <div className='InsideDiscounts'>
              <ContentCopyIcon/>
              <div className='AttributeLine' id='RightLine'></div>
              <h4 style={{opacity:'80%' , fontSize:'12px'}}>HS4YD</h4>
              <div className='AttributeLine' id='RightLine'></div>
              <h4 style={{opacity:'80%' , fontSize:'12px' , fontWeight:'500'}}>10%</h4>
              </div>
              <div className='InsideDiscounts'>
              <ContentCopyIcon/>
              <div className='AttributeLine' id='RightLine'></div>
              <h4 style={{opacity:'80%' , fontSize:'12px'}}>T50HiG</h4>
              <div className='AttributeLine' id='RightLine'></div>
              <h4 style={{opacity:'80%' , fontSize:'12px' , fontWeight:'500'}}>30%</h4>
              </div>
              <div className='InsideDiscounts'>
              <ContentCopyIcon/>
              <div className='AttributeLine' id='RightLine'></div>
              <h4 style={{opacity:'80%' , fontSize:'12px'}}>SS20F</h4>
              <div className='AttributeLine' id='RightLine'></div>
              <h4 style={{opacity:'80%' , fontSize:'12px' , fontWeight:'500'}}>15%</h4>
              </div>
          </div>
          <img className='InterfaceDiscountImg' height={580} width={750} src={require('../../Makers project/Images and ill/InterfaceDiscount.png')} alt="" />
          </div>
      </section>

      <section className='ThirdSection'>
        <div className='ThirdSectionContainer'>
          <div className='ThirdSectionImages'>
          <img src={require('../../Makers project/Images and ill/ThirdSectionImg.png')} width={660} height={970} alt="" />
          </div>
        <div className='FisrtSectionMiddleTypography'>
        <h1>Reserve Your Seat And<br/>Have Fun</h1>
        <p>Choose the date, reserve a seat for you<br/>and your friends, and have the competition<br/>of a lifetime </p>
        <div className='DownloadButtons' style={{display:'flex'}}>
        <button style={{width:'420px'}} id='BrowserButton'>Learn More About Seat Reservation</button>
        </div>
        </div>
        </div>
      </section>
    </div>
  )
}

export default UserInterface