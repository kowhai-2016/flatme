import React from 'react'

import BannerDemo from './BannerDemo'
import BannerDream from './BannerDream'
import BannerHeader from './BannerHeader'
import BannerRules from './BannerRules'
import './style.css'

const Landing = () => {
  return (
    <div className='Landing'>
      <BannerHeader />
      <BannerRules />
      <BannerDemo />
      <BannerDream />
    </div>
  )
}

export default Landing
