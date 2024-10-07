import React from 'react'
import Link from 'next/link'
import cssstyle from './home.module.css'
import Image from 'next/image'
import logo from './logo.png'
console.log(cssstyle)
export default function Home() {
  return (
    <>
        <div className={cssstyle.homeBody}>
        <nav className={cssstyle.navbar} >
        <Link href="/"  id={cssstyle.logo}>RENT & REV</Link>
         <Link href="/" id={cssstyle.home}>Home</Link>
         <Link href="/about" target='plane' id={cssstyle.about}>About</Link>
        <Link href="/services" target='plane'  id={cssstyle.services}>Services</Link>
        <Link href="/contact" target='palne' id={cssstyle.contactus}>Contact</Link>  
         </nav>
        <br />
         <div className={cssstyle.maincontainer}> 
         <div className={cssstyle.imagecontainer}>
          <Image
          src={logo}
           alt="Logo"
           className={cssstyle.logoimage}/>
         </div>
          <div className={cssstyle.overview}> 
        <h2 className={cssstyle.h2}>Welcome to RENT & REV – Your Trusted Car Marketplace</h2>
        <p>At RENT & REV, we simplify buying, selling, and renting cars. Explore a wide range of vehicles, connect with verified sellers, and enjoy hassle-free rentals. Whether you're upgrading, selling, or renting, we offer reliable solutions to meet your needs. Drive with confidence through RENT & REV.</p>
          </div> 
          </div> 
        </div>
         </>
  );
};
