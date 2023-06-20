import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderActive } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>
                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className='about_icon' />
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>
                        <article className="about_card">
                            <FiUsers className='about_icon' />
                            <h5>Clients</h5>
                            <small>300+ Worldwide</small>
                        </article>
                        <article className="about_card">
                            <VscFolderActive className='about_icon' />
                            <h5>Projects</h5>
                            <small>8+ Completed</small>
                        </article>
                    </div>
                    <p>
                        I am Saurav Kumar from
                        Patna Bihar. I am prefinal year student at Vellore Institute of Technology, Bhopal. I have a background
                        in B.tech Computer Science. My skill include Data analytics and Web Development using MERN
                        Stack. I'm passionate about travelling and I enjoy taking up new
                        challenges at work.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About