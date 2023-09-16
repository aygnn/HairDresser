import React, { useState,useRef } from 'react'
import './Navbarr.scss';
import './menu.scss';
import { Container } from 'react-bootstrap';
import { LiaHeart } from 'react-icons/lia';
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { useDimensions } from './use-dimensions';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}
export default function Navbarr() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [navbar,setNavbar]=useState(false)

  const changeBackground=()=>{
    if(window.scrollY>=80){
      setNavbar(true)
    }
    else{
      setNavbar(false)
    }
  }
  window.addEventListener('scroll',changeBackground)
 
  return (
    <div className={navbar ? 'main-nav active' : 'main-nav'}>
      <Container>
      <div className='navbarr'>
            <div className='left-nav'>
            <div className='commands'>
              <ul className='ul1'>
           
              <li className='active'> <Link>Salon</Link>
         
              <ul  className='sub-menu'>
              <li className='bos'><Link></Link></li>
                <li><Link>About</Link></li>
                <li><Link>Team</Link></li>
                <li><Link>Blog</Link></li>
                <li><Link>Contacts</Link></li>

              </ul>
            
              </li>
             
              <li> <Link>Services</Link></li>
              <li> <Link>Gallery</Link></li>
              <li> <Link>Shop</Link></li>
              </ul>

            </div>
            </div>
       
            <div className='center-nav'>
              <div>
                <img src='https://coiffure.vamtam.com/wp-content/uploads/2023/01/logo-light.svg'/>
              </div>

            </div>
            <div className='right-nav'>
              <div><Link>Location</Link></div>
              <div className='book'><Link>Book an appointment</Link></div>
              <div className='bag'><BsBag/></div>

              
            </div>

        </div>
      </Container>
      
          <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation className="ul" />
      <MenuToggle className="button" toggle={() => toggleOpen()} />
    </motion.nav>

      
    </div>
  )
}