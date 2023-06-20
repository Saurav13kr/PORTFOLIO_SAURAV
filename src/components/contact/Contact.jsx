import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {FaGithubSquare} from 'react-icons/fa'
import {FaFacebookMessenger} from 'react-icons/fa'
import {FaWhatsappSquare} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_kkmozho', 'template_fyoh31f', form.current, 'Vws_guC209GFJcPzl')
        e.target.reset()
    };
    return ( 
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact_container">
            <div className="contact_options">
               <article className="contact_option">
                  <MdEmail className='contact_option-icon'/>
                  <h4>Email</h4>
                  <h5>saurav1309kumar@gmail.com</h5>
                  <a href="mailto:saurav1309kumar@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
               </article>
               <article className="contact_option">
                  <FaGithubSquare className='contact_option-icon'/>
                  <h4>Github</h4>
                  <h5>Saurav13kr</h5>
                  <a href="https://github.com/Saurav13kr" target='_blank' rel="noreferrer">Send a message</a>
               </article>
               <article className="contact_option">
                  <FaFacebookMessenger className='contact_option-icon'/>
                  <h4>Messenger</h4>
                  <h5>Saurav Kumar</h5>
                  <a href=" " target='_blank' rel="noreferrer">Send a message</a>
               </article>
               <article className="contact_option">
                  <FaWhatsappSquare className='contact_option-icon'/>
                  <h4>WhatsApp</h4>
                  <h5>+917903427676</h5>
                  <a href="https://api.whatsapp.com/send?phone+917903427676" target='_blank' rel="noreferrer">Send a message</a>
               </article>
            </div>
            {/* END OF CONTACT OPTION */}
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Your full Name' required/>
                <input type="email" name='email' placeholder='Your Email' required/>
                <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        </div>
    </section>
    )
}

export default Contact