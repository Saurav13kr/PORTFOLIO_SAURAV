import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpeg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className='container header_container'>
          <h5>Hello I'm</h5>
          <h1>Saurav Kumar</h1>
          <h5 className='text-light'>Data Analyst & Full Stack Web Developer</h5>
          <CTA />
          <HeaderSocial />
          <div className='me'>
             <img src={ME} alt="me" />
          </div>
          <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header