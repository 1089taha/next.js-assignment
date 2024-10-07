import React from 'react'
import cssstyle from './services.module.css'
import Image from 'next/image'
import carscollage from './carscollage.jpg'
console.log(cssstyle)
const Servivespage = () => {
  return (
   <>
      <div className={cssstyle.servicesBody}>
      <div className={cssstyle.mainheading}>
      <h1>OUR SERVICES</h1>
     </div>
     <div className={cssstyle.maincontainer}>
      <div className={cssstyle.imagecontainer}>
     <Image
     src={carscollage}
     alt='collageOfDiffrentCars'
     className={cssstyle.carscollage}/>
      </div>
      <div className={cssstyle.servicesOverview}>
        <h2 className={cssstyle.subHeading}>We Have Wide Selection of Cars for Sale, Rent, and Purchase</h2>
        <p>At RENT & REv, we offer a diverse range of popular car models and brands to suit your every need. Whether you're looking to rent, sell, or buy a car, our selection includes trusted international brands such as Toyota, Honda, and Hyundai, as well as local favorites. From compact city cars, spacious sedans, and sleek executive vehicles to powerful SUVs and 4x4s, we have something for every purpose. Need assistance? We can also connect you with professional car evaluators and rental services with chauffeur options for your convenience.</p>
      </div>
     </div>
      </div>
   </>
  )
}

export default Servivespage

