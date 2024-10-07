import React from 'react'
import cssstyle from './about.module.css'
const About = () => {
  return (
    <>
      <div className={cssstyle.aboutBody}>
      <div className={cssstyle.heading}>
      <h1>About</h1>
    </div>
    <br />
    <br />
    <div className={cssstyle.about}>
      <h2>About RENT & REV</h2>
    </div>
     <section className={cssstyle.aboutparagraph}>
     <p>At RENT AND REV, we provide a seamless platform for buying, selling, and renting cars tailored to your needs. Whether you're looking to own your dream car, sell your current vehicle, or rent a car for a temporary need, our team is dedicated to offering a hassle-free, transparent, and efficient experience. With a wide selection of vehicles and a commitment to customer satisfaction, we aim to simplify the automotive process and ensure you find the perfect match for your lifestyle and budget.</p>
     </section>
      </div>
    </>
  )
}

export default About
