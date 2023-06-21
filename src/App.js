import React from 'react';
import './App.css';
import Facebook from '../src/pics/facebook.png';
import Twitter from'../src/pics/download.png';
import Ecommerce from'../src/new/eco.png';
import House from'../src/new/house.jpg';
import Light from'../src/new/light.jpg';
import Mess from'../src/new/mess.png';



function App() {
  return (
    <div className="App">
      
      <body>

        <div class='maincontainer'>

          <div class='navigation'>
                <div className='uxchallenge'>
                 <a href='#'><h4 id='uxchallenge'>UXchallenge</h4></a>
                
                 </div>
                 <div class='everything'>

                   <a href='#'>Blog</a>  
                   <a href='#'>About</a>  
                  
                   <a href='#'><img src={Facebook} alt="My Image" className='f' /></a>
                   <a href='#'><img src={Twitter} alt="My Image"  className='t'/></a>
                


                </div>

          </div>

          <div class='content1'>
            <p className='s'>Level Up Your Design Skills</p>
            <p className='p'>Practice solving problems with UX design challenges.</p>
            <p className='p'>Expand your portfolio with case studies companies want to see.</p>

          </div>
          <div class='content2'>
            <div class='mini'>
              <div className='mass'>
            <img src={Light} alt="My Image" className='light' /><p>All Challenges have products that are made to solve these <b>real world problems.</b><a href='#'className='line'>Learn more about UX Challenge</a></p><img src={Light} alt="My Image" className='light'/>
            </div>
            </div>
            <div class='third'>
              <div class='ECOMMERCE'>
                <div className='topecom'>
                <a href='#'><div class='eco1'><img  src={Ecommerce} alt="My Image" className='eco'/></div></a>
                <a href='#'><div className='co'><h4>E-COMMERCE</h4></div></a>
                </div>

                
                <div class='d1'>
                 
                  <p className='find'>Finding jeans that fit</p>
                </div>

                  <div class='d2'>
                      <p className ='sho'>Shopping for jeans and other form-</p>
                    <p className='sho'>fitting apparel online could be</p>

                    <button><a href='#'><h3>DETAILS</h3></a></button>
                   </div>

                  

               
                  


              </div>

                     <div class='Smarthome'>
                      <div className='top'>
                      <a href='#'><div><img src={House} alt="My Image"  className='house' /></div></a>
                     <div className='co'><h4>SMART HOME</h4></div>
              </div>
        
                     <div class='s1'>
                     <p className='pets'>When pets are home alone</p>
                     </div>

                      <div class='s2'>
                        <p className='sho'>No matter how much we love our pets,</p>
                        <p className='sho'>we still need to leave home to go</p>
                      
                        <button><a href='#'><h3>DETAILS</h3></a></button>
                      

                 </div>

               </div>

               <div></div>
            </div>
            <div>
            <a href='#'><img src={Mess} alt="My Image" className='mess'/></a>
            </div>
          </div>

        </div>

      
      </body>
    </div>
  );
}


export default App;

