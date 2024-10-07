import React from 'react'
import Image from 'next/image'
import arrowImage from './arrow.png'
import logo2 from './logo2.png'
import cssstyle from './contact.module.css'
const Contactpage = () => {
  return (
      <>
      <div className={cssstyle.contactBody}>
      <div className={cssstyle.contactContainer}>
      <form action="" className={cssstyle.contactLeft}>
        <div className={cssstyle.contactLeftTitle}>
          <h1>Contact US</h1>
          <hr />
        </div>
        <input type="text" name='name' placeholder='Enter Your Name' className={cssstyle.contactInputs} required />
        <input type="email" name='email' placeholder='Enter Your Email' className={cssstyle.contactInputs} required />
        <textarea name="message" placeholder='Enter Your Message' className={cssstyle.contactInputs} required></textarea>
        <button type='submit'>Submit <Image src={arrowImage} alt='arrow-image'/></button>
      </form>
      <div className="contactRight">
        <Image src={logo2} alt='Logo-2' width={350}/>
      </div>
    </div>
      </div>

      </>
  )
}

export default Contactpage
