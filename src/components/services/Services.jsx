import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className="container services_container">
          {/* START OF UI/UX DESIGN */}
          <article className="service">
            <div className="service_head">
              <h3>Data Analyst</h3>
            </div>

            <ul className="service_list">
              <li>
                <BiCheck className='service_list-icon' />
                <p>As a Data Analyst my responsibilities include the deep analysis of data and then determining the best way to represent it</p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p>I also ensure quality assurance and process documentation and define Key Performance Indicators (KPIs).</p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </article>
          {/* END OF UI/UX DESIGN */}
          <article className="service">
            <div className="service_head">
              <h3>Web Development</h3>
            </div>

            <ul className="service_list">
              <li>
                <BiCheck className='service_list-icon' />
                <p>As a Full-Stack Web Developer I designs and maintains websites and systems to serve a company's needs.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p>I develop these platforms to function independently, not needing to rely on third-party services to remain consistent.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p>I manage the client and server-side of these services, ensuring they're functional and usable.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p>I also provide back-end functionality that can run smoothly from any device or browser type commonly used today.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </article>
          {/* END OF WEB DEVELOPMENT */}
          <article className="service">
            <div className="service_head">
              <h3>Content Creation</h3>
            </div>

            <ul className="service_list">
              <li>
                <BiCheck className='service_list-icon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </article>
          {/* END OF CONTENT CREATION */}

        </div>
    </section>
  )
}

export default Services