
import React from 'react';
import './css/Home.css'; // Import the corresponding CSS file
import {ActionAreaCard1, ActionAreaCard2, ActionAreaCard3, ActionAreaCard4, ActionAreaCard5, ActionAreaCard6} from './cards';
import pay from "../assets/img/payment.png"
import sell from "../assets/img/sell.png"
import trusted from "../assets/img/trusted.png"



const Home = () => {
  const imageURL='https://png.pngtree.com/thumb_back/fh260/background/20220428/pngtree-hostel-cartoon-flat-illustration-room-image_1110131.jpg';
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

export default Home;
