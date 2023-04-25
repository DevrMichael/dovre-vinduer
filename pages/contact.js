import React from 'react'

function Contact() {
  return (
    <div className='contact-form-background'>
      <div className='contact-form-image'>

      </div>
    <div className='contact-form-container'>
      <h1>Kontakt Oss</h1>
      <p>
            Ta kontakt med oss i dag for mer utfyllende informasjon om våre produkter og tjenester. <br /> <br /> Send oss en mail ved å klikke <a href="mailto:naeem@dovrevinduer.no">her</a> eller ring oss på tlf nr. 90 76 15 78.
          </p>
      {/* <form className='contact-form'>
        <label htmlFor="name">Name</label>
        <input type="text" />
        <label htmlFor="email">Email</label>
        <input type="email" />
        <label htmlFor="textarea">Message</label>
        <textarea name="textarea" id="" cols="30" rows="10"></textarea>
        <button>Send Message</button>
      </form> */}
    </div>
    </div>
  )
}

export default Contact