import React from 'react'

function Contact() {
  return (
    <div className='contact-form-background'>
      <div className='contact-form-image'>

      </div>
    <div className='contact-form-container'>
      <h1>Contact Us</h1>
      <form className='contact-form'>
        <label htmlFor="name">Name</label>
        <input type="text" />
        <label htmlFor="email">Email</label>
        <input type="email" />
        <label htmlFor="textarea">Message</label>
        <textarea name="textarea" id="" cols="30" rows="10"></textarea>
        <button>Send Message</button>
      </form>
    </div>
    </div>
  )
}

export default Contact