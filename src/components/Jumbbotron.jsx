
import React from 'react'
import Iphone from '../assets/images/iphone-14.jpg'
import HoldingIphone from '../assets/images/iphone-hand.png'
const Jumbbotron = () => {
  const handleScroll = () => {
    const element = document.querySelector(".sound-section")
    window.scrollTo({
      top: element.getBoundingClientRect().top,
      left: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div className='jumbotron-section wrapper'>
      <h2 className="title">New</h2>
      <img className='logo' src={Iphone} alt="iphone 14 pro" />
      <p className='text'>Big and bigger</p>
      <span className='description'>from $41.62 or 24 mo. or $999 before trade in</span>
      <ul className='links'>
        <li>
          <button className='button'>Buy </button>
        </li>
        <li>
          <a className="link" onClick={handleScroll}> Learn More </a>
        </li>
      </ul>
      <img className='iphone-img' src={HoldingIphone} alt="iphone"/>
    </div>
  )
}

export default Jumbbotron
