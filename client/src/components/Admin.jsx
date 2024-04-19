
import React from 'react';
import './css/Home.css'; // Import the corresponding CSS file
import {ActionAreaCard1, ActionAreaCard2, ActionAreaCard3, ActionAreaCard4, ActionAreaCard5, ActionAreaCard6} from './cards';
import pay from "../assets/img/payment.png"
import sell from "../assets/img/sell.png"
import trusted from "../assets/img/trusted.png"



const Admin = () => {
  const imageURL='https://scontent.fixc4-3.fna.fbcdn.net/v/t1.6435-9/93272843_101394028216928_5292488658975195136_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=7V1Zgxn4OAwAX9VO8cq&_nc_ht=scontent.fixc4-3.fna&oh=00_AfB4-b8_s_fGd-zQybMgArShOKwhHOfJSRCDDQ_fmPlZGw&oe=65E28221';
  return (
    <div className="home-container">
      <div className='home-image'>
        <img src={imageURL} alt="Hostel Image" className="home-image" />
        <div className='overlay-text'>
          <h1>Comfort, Community, Connection: The Hostel Trinity</h1> 
        </div>
      </div>
      <div className='site-images'>
        <div className='site-text'>
          Our Hostels 
        </div>
        <div className='image-grid'>
          <ActionAreaCard1/>
          <ActionAreaCard2/>
          <ActionAreaCard3/>
          <ActionAreaCard4/>
          <ActionAreaCard5/>
          <ActionAreaCard6/>
        </div>
      </div>
      <section id="keypoints" class="margin-7">
        <div class="featured-text">
          Featured
        </div>
        <div class="keypoints">
            <div class="keypoint-element">
                <div class="key-img-border">
                  <img src={pay} alt="" class="keyimg"/>
                  </div>
                <p class="key-head font">
                    Find Your Ideal Price
                </p>
                <p class="key-desc font">We provide the most ideal and best prices. Experience our
                    vast pricing flexibility and choose best for yourself.</p>
            </div>
            <div class="keypoint-element">
                <div class="key-img-border"><img src={sell} alt="" class="keyimg"/></div>
                <p class="key-head font">
                  Home-like-feel                </p>
                <p class="key-desc font">Ensuring a Secure Haven for Students - Your Safety is Our Priority! Plus, enjoy a warm and welcoming atmosphere that makes you feel like home.
                </p>
            </div>
            <div class="keypoint-element">
                <div class="key-img-border"><img src={trusted} alt="" class="keyimg"/></div>
                <p class="key-head font">
                    Trusted By 10k users
                </p>
                <p class="key-desc font">Our client entrust us for most fair and acceptable deals. We never dissapoint
                    you, be our one of trusted client.
                </p>
            </div>
        </div>
    </section>



    </div>
  );
};

export default Admin;
