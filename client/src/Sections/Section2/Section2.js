import { Link } from 'react-router-dom'
import './Section2.scss';
import React, { useState, useEffect } from 'react';

export default function Section2() {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
     
    useEffect(() => {
      setScrollPosition(0);
    }, []);
  
    const maxScrollToGrow = 200; 
    const scaleFactor = Math.min(1 + scrollPosition * 0.001, 1 + maxScrollToGrow * 0.001);
  return (
    <div className='section2'>
        <div className='hair-siluet'>
            <img src='https://coiffure.vamtam.com/wp-content/uploads/2023/01/GettyImages-1317331156.svg'/>
        </div>
        <div className='great_hair_title'>
            <h2>
            A great hairstyle is the best accessory. 
            </h2>
        </div>
        <div className='great_hair_title-2'>
        <p>
            We specialise in modern cuts and colour, with an emphasis on the long-term condition of your hair.
            </p>
        </div>
      
        <div className='book'><Link>Book an appointment</Link></div>
        <div className='hours'>
            <Link>Location & Hours</Link>
        </div>


        <div className='photos'>
            <div  className='photo1'>
                <img     style={{
            transform: `scale(${scaleFactor})`,
            transition: 'transform 0.2s',
            maxWidth: 'calc(100% - 40px)',
          }}
          src='https://coiffure.vamtam.com/wp-content/uploads/2023/01/GettyImages-1006812650.jpg'/>

            </div>
            <div className='photos2'>
                <div className='foto1'>
                    <img src='https://coiffure.vamtam.com/wp-content/uploads/2023/01/GettyImages-1287384257.jpg'/>

                </div>
                <div className='foto2'>
                    <img src='https://coiffure.vamtam.com/wp-content/uploads/2023/01/GettyImages-1132012971.jpg'/>

                </div>

            </div>
            <div className='salon'>
              <div className='salon-texts'>
          <div className='salon-text1'>
            <h2>
          Salon•
            </h2>
          </div>
          <div className='salon-text2'>
            
As a sustainably-minded salon, all of our products contain gentle, nourishing and natural ingredients and avoid any harsh or damaging chemical additives. 
          </div>

              </div>
          <div className='salon-photo'>
            <img src='https://coiffure.vamtam.com/wp-content/uploads/2023/01/GettyImages-1183120759.png'/>
            

          </div>
        </div>
       

        </div>
      
    </div>
  )
}
