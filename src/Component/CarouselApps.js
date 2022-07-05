import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../Image/sepatu.jpg";
import image2 from "../Image/5e37dfdc0013d.png";
import image3 from "../Image/svgLOYZdUR.jpg";
import image4 from "../Image/abb5766a-9f52-4ab8-b27c-cf76ffaa2cef.jpg";
import "../App.css"

function CarouselApps() {
    let settings = {
        dot : true,
        infinite: true,
        speed : 500,
        slidesToShow : 3,
        slidesToScroll : 1,
        cssEase : "linear"
      }
      return (
        <Slider {...settings}>
          <div className='card-wrapper'>
            <div className='card'>
              <div className='card-image'>
                <img src={image2} className="image-carousel" />
              </div>
              <ul class="social-icon">
                <li>
                  <a href='#'>
                    <i className='fa fa-facebook'></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fa fa-instagram'></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fa fa-twitter'></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fa fa-dribbble'></i>
                  </a>
                </li>              
              </ul>
              <div className='details'>
                <h2>Dwi Mustikasari<span class="job-tittle">UI Developer</span></h2>
              </div>
            </div>
          </div>
          <div className='card-wrapper'>
            <div className='card'>
              <div className='card-image'>
                <img src={image3} className="image-carousel" />
              </div>
              <ul class="social-icon">
                <li>
                  <a href='#'>
                    <i className='fa fa-facebook'></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fa fa-instagram'></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fa fa-twitter'></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fa fa-dribbble'></i>
                  </a>
                </li>              
              </ul>
              <div className='details'>
                <h2>Dwi Mustikasari<span class="job-tittle">UI Developer</span></h2>
              </div>
            </div>
          </div>
          <div className='card-wrapper'>
            <div className='card'>
              <div className='card-image'>
                <img src={image4} className="image-carousel" />
              </div>
              <ul class="social-icon">
                <li>
                  <a href='#'>
                    <i className='fa fa-facebook'></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fa fa-instagram'></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fa fa-twitter'></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fa fa-dribbble'></i>
                  </a>
                </li>              
              </ul>
              <div className='details'>
                <h2>Dwi Mustikasari<span class="job-tittle">UI Developer</span></h2>
              </div>
            </div>
          </div>
          <div className='card-wrapper'>
            <div className='card'>
              <div className='card-image'>
                <img src={image1} className="image-carousel" />
              </div>
              <ul class="social-icon">
                <li>
                  <a href='#'>
                    <i className='fa fa-facebook'></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fa fa-instagram'></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fa fa-twitter'></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fa fa-dribbble'></i>
                  </a>
                </li>              
              </ul>
              <div className='details'>
                <h2>Dwi Mustikasari<span class="job-tittle">UI Developer</span></h2>
              </div>
            </div>
          </div>
         
         
        </Slider>
        )
}

export default CarouselApps