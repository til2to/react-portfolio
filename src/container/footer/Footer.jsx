import React, { useState } from 'react'

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import './Footer.scss'
// urlFor

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    e.preventDefault();
    // e.target.name, e.target.value. this gets the name & value of the input
    const { name, value } = e.target; 
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
    }

    client.create(contact)
      .then(() => {
        setIsFormSubmitted(true);
        setIsLoading(false);
      })
  }

  return (
    <>
      <h2 className='head-text'>Let's have a talk</h2>

      <div className='app__footer-cards'>
        <div className="app__footer-card">
          <img src={images.email} alt="" />
          <a href="mailto: denwusp@gmail.com" className='p-text'> denwusp@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +1 (123) 456-789" className='p-text'>+233 .........</a>
        </div>
      </div>

      {!isFormSubmitted ?
        <div className="app__footer-form app__flex">
          <div className='app__flex'>
            <input type="text"
              className="p-text" placeholder='Your Name'
              value={name}
              // onChange accepts a key press event.     
              name='name' onChange={handleChangeInput} required />
          </div>

          <div className='app_flex'>
            <input type="text"
              className="p-text" placeholder='Your Email'
              value={email} onChange={handleChangeInput}
              name='email' required />
          </div>

          <div>
            <textarea className="p-text"
              placeholder='Your Message'
              value={message}
              onChange={handleChangeInput}
              name='message' required
            />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>{isLoading ? 'Sending' : 'Send Message'}</button>
        </div>
        : <div>
          <h3 className='head-text'>Thank you for your message!</h3>
        </div>
      }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  "app__whitebg"
)
